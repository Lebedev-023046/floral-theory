import { useFiltersCtx } from '../../../../app/providers/filterProvider'

interface RangeFilterProps {
	filter: {
		options: { key: 'min' | 'max'; label: string; placeholder: string; value: string }[]
	}
}

export const RangeFilter = ({ filter }: RangeFilterProps) => {
	const { filters, setFilters } = useFiltersCtx()
	const { price } = filters

	const onChange = (key: 'min' | 'max', value: string) => {
		setFilters(prev => ({
			...prev,
			price: {
				...prev.price,
				[key]: value
			}
		}))
	}

	return (
		<>
			{filter.options.map(option => (
				<div key={option.key} className='flex items-center gap-4 text-[1.1rem]'>
					<label className='min-w-[15%]'>{option.label}</label>
					<input
						className='w-full px-2 py-1 rounded border-2 outline-none bg-background-secondary text-color-primary placeholder:text-color-primary'
						type='number'
						placeholder={option.placeholder}
						value={price[option.key]}
						onChange={e => onChange(option.key, e.target.value)}
					/>
				</div>
			))}
		</>
	)
}
