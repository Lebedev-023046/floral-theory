import { useState } from 'react'
import { FILTERS } from '../../constants'
import { FilterRenderer } from '../filterRenderer'
import { Button } from '../../../../shared/ui/button'
import { useBouquetsCtx } from '../../../../app/providers/BouquetProvider'
import { useFiltersCtx } from '../../../../app/providers/filterProvider'

export function FiltersView() {
	const { bouquets } = useBouquetsCtx()
	const { resetFilters } = useFiltersCtx()

	const [openedFilters, setOpenedFilters] = useState<number[]>([])
	const toggleFilter = (id: number) => {
		setOpenedFilters(prev => (prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]))
	}

	return (
		<div className='mt-[5.625rem]'>
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
