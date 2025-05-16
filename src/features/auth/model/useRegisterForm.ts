export function useRegisterForm() {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)

		const name = formData.get('name')?.toString().trim() || ''
		const surname = formData.get('surname')?.toString().trim() || ''
		const phone = formData.get('phone')?.toString().trim() || ''
		const password = formData.get('password')?.toString() || ''

		console.log({ name, surname, phone, password })
	}

	return { onSubmit }
}
