import { Filter } from '../../types'
import { CheckboxFilter } from '../checkboxFilter'
import { RangeFilter } from '../rangeFilter'
import styles from './filterRenderer.module.css'

interface FilterRendererProps {
	filter: Filter
	isOpen: boolean
	toggle: () => void
}

export const FilterRenderer = ({ filter, isOpen, toggle }: FilterRendererProps) => {
	return (
		<div className={styles.filter}>
			<div className={styles.filterTitle} onClick={toggle}>
				<h2>{filter.title}</h2>
				<span>{isOpen ? '+' : '-'}</span>
			</div>

			<div className={`${styles.filterOptions} ${isOpen ? styles.show : ''}`}>
				{filter.type === 'checkbox' && <CheckboxFilter filter={filter} />}
				{filter.type === 'range' && <RangeFilter filter={filter} />}
			</div>
		</div>
	)
}
