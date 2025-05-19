import { useBouquetsCtx } from '../../app/providers/BouquetProvider'
import { useCartCtx } from '../../app/providers/cartProvider'
import { CatalogCard } from '../../features/catalog/ui/catalogCard'
import { Title } from '../../shared/ui/title'
import styles from './cartPage.module.css'

export function CartPage() {
	const { bouquets } = useBouquetsCtx()
	const bouquet = bouquets[0]

	const { cart, removeFromCart } = useCartCtx()

	if (cart.length === 0) {
		return (
			<div className={styles.cartWrapper}>
				<Title as='h1' className={styles.title}>
					Корзина пуста
				</Title>
			</div>
		)
	}

	return (
		<div className={styles.cartWrapper}>
			<div className={styles.container}>
				<Title as='h1' className={styles.title}>
					Корзина
				</Title>

				<div className={styles.cartItems}>
					{cart.map(bouquet => (
						<div key={bouquet.id} className={styles.cartContent}>
							<div className={styles.imageBlock}>
								<CatalogCard {...bouquet} />
							</div>

							<div className={styles.table}>
								<div className={styles.row}>
									<span className={styles.bouquetName}>{bouquet.name}</span>
									<span className={styles.bouquetPrice}>
										{bouquet.price} {bouquet.currency}
									</span>
									<div className={styles.actions}>
										<button className={styles.order}>заказать</button>
										<button className={styles.delete} onClick={() => removeFromCart(bouquet.id)}>
											удалить
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
