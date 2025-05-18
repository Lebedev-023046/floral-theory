import { useFiltersCtx } from '../../../app/providers/filterProvider'
import { Bouquet } from '../types'

export function useFilteredBouquets(bouquets: Bouquet[]) {
	const { filters } = useFiltersCtx()

	return bouquets.filter(b => {
		const matchesComposition =
			filters.composition.length === 0 || filters.composition.some(c => b.composition.includes(c))

		const matchesRating = filters.rating.length === 0 || filters.rating.some(r => b.rating >= r)

		const priceMin = Number(filters.price.min) || 0
		const priceMax = Number(filters.price.max) || Infinity
		const matchesPrice = b.price >= priceMin && b.price <= priceMax

		return matchesComposition && matchesRating && matchesPrice
	})
}
