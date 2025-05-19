const API_URL = 'http://localhost:3000'

export async function getUsers() {
	try {
		const res = await fetch(`${API_URL}/users`)
		const users = await res.json()
		return users
	} catch (error) {
		console.log('error')
		throw error
	}
}
