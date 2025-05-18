import React, { createContext, useContext, useState, ReactNode, PropsWithChildren } from 'react'

type FiltersState = {
	composition: string[]
	rating: number[]
	price: {
		min: string
		max: string
	}
}

const defaultFilters: FiltersState = {
	composition: [],
	rating: [],
	price: {
		min: '',
		max: ''
	}
}

type FilterContextType = {
	filters: FiltersState
	setFilters: React.Dispatch<React.SetStateAction<FiltersState>>
	resetFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider = ({ children }: PropsWithChildren) => {
	const [filters, setFilters] = useState<FiltersState>(defaultFilters)

	const resetFilters = () => {
		setFilters(defaultFilters)
	}

	return <FilterContext.Provider value={{ filters, setFilters, resetFilters }}>{children}</FilterContext.Provider>
}

export const useFiltersCtx = (): FilterContextType => {
	const context = useContext(FilterContext)
	if (!context) {
		throw new Error('useFilters must be used within a FilterProvider')
	}
	return context
}
