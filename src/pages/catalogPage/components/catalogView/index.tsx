import { useBouquetsCtx } from '../../../../app/providers/BouquetProvider'
import { useFilteredBouquets } from '../../../../features/catalog/model/useFilteredBouquets'
import { CatalogCard } from '../../../../features/catalog/ui/catalogCard'
import styles from './catalogView.module.css'

export function CatalogView() {
	const { bouquets, loading, isError } = useBouquetsCtx()
	const filteredBouquets = useFilteredBouquets(bouquets)

	return (
		<section className={styles.content}>
			{loading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>Error</p>
			) : (
				<>
					{filteredBouquets.map(bouquet => (
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
