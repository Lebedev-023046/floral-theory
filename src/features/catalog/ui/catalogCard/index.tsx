import React from 'react'
import Temp from '../../../../assets/temp/temp.png'
import Cart from '../../../../assets/cart.svg'
import styles from './catalogCard.module.css'

interface Props {
	title: string
	image: string
	price: number
	currency: string
	rating: number
}

export function CatalogCard({ title, image, price, currency, rating }: Props) {
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={image} alt='flower' />
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.price}>
					{price} {currency}
				</div>
				<div className={styles.footer}>
					<div>{rating.toFixed(1)} &#9733;</div>
					<button>
						<img className={styles.cart} src={Cart} alt='cart' />
					</button>
				</div>
			</div>
		</div>
	)
}
