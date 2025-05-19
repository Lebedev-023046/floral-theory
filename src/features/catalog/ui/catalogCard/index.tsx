import React from 'react'
import Temp from '../../../../assets/temp/temp.png'
import Cart from '../../../../assets/cart.svg'
import Remove from '../../../../assets/delete.png'
import styles from './catalogCard.module.css'
import { Link } from 'react-router-dom'
import { useCartCtx } from '../../../../app/providers/cartProvider'
import { Bouquet } from '../../types'

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
		<Link to={`/catalog/${id}`} className={styles.wrapper}>
			<img className={styles.image} src={image} alt='flower' />
			<div className={styles.content}>
				<div className={styles.title}>{name}</div>
				<div className={styles.price}>
					{price} {currency}
				</div>
				<div className={styles.footer}>
					<div>{rating.toFixed(1)} &#9733;</div>
					<button onClick={handleClick}>
						<img
							className={styles.cart}
							src={isInCart ? Remove : Cart}
							alt={isInCart ? 'remove from cart' : 'add to cart'}
						/>
					</button>
				</div>
			</div>
		</Link>
	)
}
