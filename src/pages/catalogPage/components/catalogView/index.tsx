import { useBouquetsCtx } from '../../../../app/providers/BouquetProvider'
import { useFilteredBouquets } from '../../../../features/catalog/model/useFilteredBouquets'
import { CatalogCard } from '../../../../features/catalog/ui/catalogCart'

export function CatalogView() {
	const { bouquets, loading, isError } = useBouquetsCtx()
	const filteredBouquets = useFilteredBouquets(bouquets)

	return (
		<section className='flex justify-start items-start flex-wrap h-full w-3/4 gap-12 py-10 px-20 overflow-auto'>
			{loading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>Error</p>
			) : (
				<>
					{filteredBouquets.map(bouquet => (
						<CatalogCard key={bouquet.id} {...bouquet} />
					))}
				</>
			)}
		</section>
	)
}
