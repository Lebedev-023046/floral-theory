const API_URL = 'http://localhost:3000'

import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../shared/routes'
import { useUserCtx } from '../../../app/providers/userProvider'

export function useRegisterForm() {
	const navigate = useNavigate()
	const { login } = useUserCtx()

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)

		const name = formData.get('name')?.toString().trim() || ''
		const surname = formData.get('surname')?.toString().trim() || ''
		const phone = formData.get('phone')?.toString().trim() || ''
		const password = formData.get('password')?.toString() || ''

		if (!name || !surname || !phone || !password) {
			alert('Заполните все поля')
			return
		}

		try {
			const checkRes = await fetch(`${API_URL}/users?phone=${phone.slice(1)}`)
			const existingUsers = await checkRes.json()

			if (existingUsers.length > 0) {
				alert('Пользователь с таким номером уже существует')
				return navigate(ROUTES.auth)
			}

			const res = await fetch(`${API_URL}/users`)
			const users = await res.json()
			const maxId = Math.max(0, ...users.map((u: any) => Number(u.id)))
			const newUser = {
				id: maxId + 1,
				name,
				surname,
				phone,
				password,
				role: 'user'
			}

			const createRes = await fetch(`${API_URL}/users`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newUser)
			})

			if (createRes.ok) {
				const createdUser = await createRes.json()
				login(createdUser)
				navigate('/')
			} else {
				alert('Ошибка при регистрации')
			}
		} catch (error) {
			console.error('Ошибка при регистрации:', error)
			alert('Ошибка при регистрации')
		}
	}

	return { onSubmit }
}
