import { useState } from 'react'

export function useValidate() {
	const [errors, setErrors] = useState<Record<string, string>>({})

	const validate = (formData: FormData) => {
		const newErrors: Record<string, string> = {}

		const name = formData.get('name')?.toString().trim() || ''
		const phone = formData.get('phone')?.toString().trim() || ''
		const address = formData.get('address')?.toString() || ''

		if (!name) newErrors.name = 'Введите имя'

		if (!phone) newErrors.phone = 'Введите номер телефона'
		else if (!/^\+375\d{9}$/.test(phone)) newErrors.phone = 'Неверный формат. Пример: +375291234567'

		if (!address) newErrors.address = 'Введите адрес доставки'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	return {
		errors,
		validate
	}
}
