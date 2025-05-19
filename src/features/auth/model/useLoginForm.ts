import { useNavigate } from 'react-router-dom'
import { useUserCtx } from '../../../app/providers/userProvider'

const API_URL = 'http://localhost:3000'

export function useLoginForm() {
	const navigate = useNavigate()
	const { login } = useUserCtx()
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const phone = formData.get('phone')
		const password = formData.get('password')

		if (!phone || !password) return

		console.log({ phone, password })

		try {
			const res = await fetch(`${API_URL}/users?phone=${phone.slice(1)}&password=${password}`)

			const users = await res.json()

			console.log({ users })

			if (users.length > 0) {
				login(users[0])
				navigate('/')
			} else {
				alert('Неверный номер или пароль')
			}
		} catch (error) {
			console.error('Login error', error)
		}
	}

	return { onSubmit }
}
