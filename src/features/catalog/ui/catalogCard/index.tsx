import React from 'react'
import Temp from '../../../../assets/temp/temp.png'
import Cart from '../../../../assets/cart.svg'
import styles from './catalogCard.module.css'
import { Link } from 'react-router-dom'

interface Props {
	id: string
	title: string
	image: string
	price: number
	currency: string
	rating: number
}

export function CatalogCard({ id, title, image, price, currency, rating }: Props) {
	const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()

		console.log('hey!!!')
	}

	return (
		<Link to={`/catalog/${id}`} className={styles.wrapper}>
			<img className={styles.image} src={image} alt='flower' />
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.price}>
					{price} {currency}
				</div>
				<div className={styles.footer}>
					<div>{rating.toFixed(1)} &#9733;</div>
					<button onClick={addToCart}>
						<img className={styles.cart} src={Cart} alt='cart' />
					</button>
				</div>
			</div>
		</Link>
	)
}
