import { Link } from 'react-router-dom'
import { ROUTES } from '../shared/routes'
import { useCartCtx } from '../app/providers/cartProvider'
import Cart from '../assets/cart.svg'

export function CartIcon() {
	const { cart } = useCartCtx()

	return (
		<button className='relative'>
			<Link to={ROUTES.cart} className='relative inline-block'>
				<span className='absolute -top-3 -right-2 flex items-center justify-center w-5.5 h-5.5 text-xs text-[var(--background-primary)] bg-[var(--color-primary)] rounded-full'>
					{cart.length}
				</span>
				<img src={Cart} alt='cart' className='object-contain max-w-inherit max-h-inherit' />
			</Link>
		</button>
	)
}
