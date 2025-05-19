import { useState } from 'react'

export function useValidate({ isLogin }: { isLogin: boolean }) {
	const [errors, setErrors] = useState<Record<string, string>>({})

	const validate = (formData: FormData) => {
		const newErrors: Record<string, string> = {}

		const phone = formData.get('phone')?.toString().trim() || ''
		const password = formData.get('password')?.toString() || ''

		if (!phone) newErrors.phone = 'Введите номер телефона'
		else if (!/^\+375\d{9}$/.test(phone)) newErrors.phone = 'Неверный формат. Пример: +375291234567'

		if (!password) newErrors.password = 'Введите пароль'
		else if (password.length < 4) newErrors.password = 'Минимум 4 символа'

		if (!isLogin) {
			const name = formData.get('name')?.toString().trim() || ''
			const surname = formData.get('surname')?.toString().trim() || ''

			if (!name) newErrors.name = 'Введите имя'
			if (!surname) newErrors.surname = 'Введите фамилию'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	return {
		errors,
		validate
	}
}
