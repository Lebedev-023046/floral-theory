import { useState } from 'react'
import { FILTERS } from '../../constants'
import { FilterRenderer } from '../filterRenderer'

import styles from './filtersView.module.css'
import { Button } from '../../../../shared/ui/button'
import { useBouquetsCtx } from '../../../../app/providers/BouquetProvider'
import { useFilteredBouquets } from '../../../../features/catalog/model/useFilteredBouquets'
import { useFiltersCtx } from '../../../../app/providers/filterProvider'

export function FiltersView() {
	const { bouquets } = useBouquetsCtx()
	const { resetFilters } = useFiltersCtx()

	const [openedFilters, setOpenedFilters] = useState<number[]>([])
	const toggleFilter = (id: number) => {
		setOpenedFilters(prev => (prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]))
	}

	return (
		<div className={styles.filters}>
			{FILTERS.map(filter => {
				const isOpen = openedFilters.includes(filter.id)
				return <FilterRenderer key={filter.id} filter={filter} isOpen={isOpen} toggle={() => toggleFilter(filter.id)} />
			})}

			<Button variant='secondary' onClick={resetFilters}>
				Сбросить фильтры
			</Button>
		</div>
	)
}
