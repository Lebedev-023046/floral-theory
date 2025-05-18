import { Bouquet } from '../types'

const API_URL = 'http://localhost:3000'

export const getBouquets = async () => {
	try {
		const response = await fetch(`${API_URL}/catalog`)

		if (!response.ok) {
			throw new Error(`Failed to fetch bouquets: ${response.status} ${response.statusText}`)
		}

		const data: Bouquet[] = await response.json()
		return data
	} catch (error) {
		console.error('Failed to fetch bouquets:', error)
		throw error
	}
}
