import { useCartCtx } from '../../../app/providers/cartProvider'
import Cart from '../../../assets/cart.svg'
import Remove from '../../../assets/delete.png'
import { Link } from 'react-router-dom'
import { Bouquet } from '../types'

export function CatalogCard({ id, name, image, price, currency, rating, ...rest }: Bouquet) {
	const { addToCart, removeFromCart, cart: cartItems } = useCartCtx()

	const isInCart = cartItems.some(item => item.id === id)
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		const bouquet = { id, name, image, price, currency, rating, ...rest }

		if (isInCart) {
			removeFromCart(id)
		} else {
			addToCart(bouquet)
		}
	}

	return (
		<Link
			to={`/catalog/${id}`}
			className='block relative min-w-[294px] max-w-[350px] rounded-t-[36px] bg-[var(--background-primary)] text-[var(--color-primary)] overflow-hidden text-[1.5rem] font-light'
		>
			<img className='w-full h-full max-h-[350px] object-cover overflow-hidden' src={image} alt='flower' />
			<div className='flex flex-col items-center text-center pt-0 px-4 pb-3 -mt-6'>
				<div
					className='relative px-4 py-2 rounded-md'
					style={{ backgroundColor: 'rgba(var(--background-secondary-rgb), 0.76)' }}
				>
					{name}
				</div>
				<div className='mt-3 font-[Ruwudu,serif]'>
					{price} {currency}
				</div>
				<div className='flex justify-between items-center w-full font-[Ruwudu,serif] mt-2'>
					<div>{rating.toFixed(1)} &#9733;</div>
					<button onClick={handleClick} className='bg-transparent border-none cursor-pointer'>
						<img
							src={isInCart ? Remove : Cart}
							alt={isInCart ? 'remove from cart' : 'add to cart'}
							className='w-8 h-8'
						/>
					</button>
				</div>
			</div>
		</Link>
	)
}
