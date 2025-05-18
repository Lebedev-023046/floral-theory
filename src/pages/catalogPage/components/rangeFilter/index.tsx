import { useEffect, useState } from 'react'

import styles from './rangeFilter.module.css'
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
				<div key={option.key} className={styles.inputContainer}>
					<label className={styles.label}>{option.label}</label>
					<input
						className={styles.input}
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
