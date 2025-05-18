export type FilterField = 'composition' | 'rating' | 'price'

export interface BaseFilter {
	id: number
	title: string
	field: FilterField
	type: 'checkbox' | 'range'
}

export interface CheckboxOption {
	label: string
	value: string | number
}

export interface RangeOption {
	key: 'min' | 'max'
	label: string
	placeholder: string
	value: string
}

export interface CheckboxFilterType extends BaseFilter {
	type: 'checkbox'
	options: CheckboxOption[]
	field: 'composition' | 'rating'
}

export interface RangeFilterType extends BaseFilter {
	type: 'range'
	options: RangeOption[]
	field: 'price'
}

export type Filter = CheckboxFilterType | RangeFilterType
