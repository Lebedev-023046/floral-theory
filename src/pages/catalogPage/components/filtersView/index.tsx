import { useState } from 'react'
import { FILTERS } from '../../constants'
import { FilterRenderer } from '../filterRenderer'

import styles from './filtersView.module.css'

export function FiltersView() {
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
		</div>
	)
}
