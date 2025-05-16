export function useLoginForm() {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const phone = formData.get('phone')
		const password = formData.get('password')
		console.log({ phone, password })
	}

	return { onSubmit }
}
