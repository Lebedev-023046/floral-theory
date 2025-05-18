import { useEffect, useState } from 'react'
import { getBouquets } from './getBouquets'
import { Bouquet } from '../types'

export function useGetBouquets() {
	const [bouquets, setBouquets] = useState<Bouquet[]>([])
	const [loading, setLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetchBouquets = async () => {
			try {
				setLoading(true)
				setIsError(false)
				const data = await getBouquets()
				setBouquets(data)
			} catch (error) {
				console.error('Failed to fetch bouquets:', error)
				setIsError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchBouquets()
	}, [])

	return { bouquets, loading, isError }
}
