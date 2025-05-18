import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Bouquet } from '../../features/catalog/types'
import { getBouquets } from '../../features/catalog/model/getBouquets'

interface BouquetContextType {
	bouquets: Bouquet[]
	loading: boolean
	isError: boolean
}

const BouquetContext = createContext<BouquetContextType | undefined>(undefined)

export const BouquetProvider = ({ children }: { children: ReactNode }) => {
	const [bouquets, setBouquets] = useState<Bouquet[]>([])
	const [loading, setLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetch = async () => {
			try {
				setLoading(true)
				const data = await getBouquets()
				setBouquets(data)
			} catch {
				setIsError(true)
			} finally {
				setLoading(false)
			}
		}
		fetch()
	}, [])

	return <BouquetContext.Provider value={{ bouquets, loading, isError }}>{children}</BouquetContext.Provider>
}

export const useBouquetsCtx = (): BouquetContextType => {
	const context = useContext(BouquetContext)
	if (!context) {
		throw new Error('useBouquets must be used within a BouquetProvider')
	}
	return context
}
