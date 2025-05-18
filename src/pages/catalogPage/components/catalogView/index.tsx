import { useGetBouquets } from '../../../../features/catalog/model/useGetBouquets'
import { CatalogCard } from '../../../../features/catalog/ui/catalogCard'
import styles from './catalogView.module.css'

export function CatalogView() {
	const { bouquets, loading, isError } = useGetBouquets()

	return (
		<section className={styles.content}>
			{loading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>Error</p>
			) : (
				<>
					{bouquets.map(bouquet => (
						<CatalogCard
							key={bouquet.id}
							title={bouquet.name}
							image={bouquet.image}
							price={bouquet.price}
							currency={bouquet.currency}
							rating={bouquet.rating}
						/>
					))}
				</>
			)}
		</section>
	)
}
