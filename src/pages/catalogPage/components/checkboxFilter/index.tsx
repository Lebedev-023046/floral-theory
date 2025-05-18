import { useState } from 'react'

import styles from './checkboxFilter.module.css'
import { useFiltersCtx } from '../../../../app/providers/filterProvider'

type FilterField = 'composition' | 'rating'

interface Option {
	label: string
	value: string | number
}

interface CheckboxFilterProps {
	filter: {
		id: number
		title: string
		field: FilterField
		options: Option[]
	}
}

export const CheckboxFilter = ({ filter }: CheckboxFilterProps) => {
	const { filters, setFilters } = useFiltersCtx()

	const targetField = filter.title === 'рейтинг' ? 'rating' : 'composition'

	const selected = filters[targetField] as (string | number)[]

	const toggleOption = (value: string | number, checked: boolean) => {
		setFilters(prev => ({
			...prev,
			[filter.field]: checked ? [...prev[filter.field], value] : prev[filter.field].filter(v => v !== value)
		}))
	}

	return (
		<>
			{filter.options.map(option => (
				<label className={styles.label} key={option.value}>
					<input
						className={styles.input}
						type='checkbox'
						checked={selected.includes(option.value)}
						onChange={e => toggleOption(option.value, e.target.checked)}
					/>
					<p>{option.label}</p>
				</label>
			))}
		</>
	)
}
