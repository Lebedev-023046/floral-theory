import { Navigate, useParams } from 'react-router-dom'

import styles from './catalogItemPage.module.css'
import { CatalogCard } from '../../features/catalog/ui/catalogCard'
import { useBouquetsCtx } from '../../app/providers/BouquetProvider'
import { ROUTES } from '../../shared/routes'
import { Button } from '../../shared/ui/button'

export function CatalogItemPage() {
	const { id } = useParams() as { id: string }
	const { bouquets } = useBouquetsCtx()

	const bouquet = bouquets.find(bouquet => bouquet.id === id)

	if (!bouquet) {
		return <Navigate to={ROUTES.catalog} />
	}

	return (
		<div className={styles.CatalogItemPageWrapper}>
			<section className={styles.container}>
				<div className={styles.card}>
					<CatalogCard
						id={bouquet.id}
						title={bouquet.name}
						image={bouquet.image}
						price={bouquet.price}
						currency={bouquet.currency}
						rating={bouquet.rating}
					/>
				</div>
				<div className={styles.catalogItemInfoContainer}>
					<div className={styles.section}>
						<h2 className={styles.title}>Состав</h2>
						<p className={styles.text}>{bouquet.composition.join(', ')}</p>
					</div>
					<div className={styles.section}>
						<h2 className={styles.title}>Оформление</h2>
						<p className={styles.text}>{bouquet.decoration}</p>
					</div>
					<div className={styles.section}>
						<h2 className={styles.title}>Дополнительно</h2>
						<p className={styles.text}>{bouquet.additional}</p>
					</div>
				</div>
			</section>
			<div className={styles.buttonContainer}>
				<Button className={styles.addToCartButton} variant='secondary'>
					добавить в корзину
				</Button>
			</div>
		</div>
	)
}
