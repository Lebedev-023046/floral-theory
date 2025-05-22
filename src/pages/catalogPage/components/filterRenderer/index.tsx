import { Filter } from '../../types'
import { CheckboxFilter } from '../checkboxFilter'
import { RangeFilter } from '../rangeFilter'

interface FilterRendererProps {
	filter: Filter
	isOpen: boolean
	toggle: () => void
}

export const FilterRenderer = ({ filter, isOpen, toggle }: FilterRendererProps) => {
	return (
		<div className='p-4 text-[1.5rem] border-2 border-current rounded-2xl mb-8 last:mb-0'>
			<div onClick={toggle} className='flex justify-between items-center gap-4 cursor-pointer'>
				<h2>{filter.title}</h2>
				<span>{isOpen ? '+' : '-'}</span>
			</div>

			<div
				className={`flex flex-col justify-center gap-3 text-base overflow-hidden transition-all duration-300 ${
					isOpen ? 'mt-4 max-h-[9999px]' : 'max-h-0'
				}`}
			>
				{filter.type === 'checkbox' && <CheckboxFilter filter={filter} />}
				{filter.type === 'range' && <RangeFilter filter={filter} />}
			</div>
		</div>
	)
}
