import { Input } from '../../../shared/ui/input'
import { Modal } from '../../../shared/ui/modal'
import { useValidate } from '../model/useValidate'

interface OrderModalProps {
	onClose: () => void
}

export function OrderModal({ onClose }: OrderModalProps) {
	const { errors, validate } = useValidate()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)

		if (!validate(formData)) {
			e.preventDefault()
			return
		}

		const entries = Object.fromEntries(formData.entries())
		console.log('📝 Order Form Values:', entries)
	}

	return (
		<div className='p-8 relative z-[100] flex flex-col justify-center items-center -mt-[54rem]'>
			<Modal className='pt-4 pb-10' onSubmit={handleSubmit} overlay onClose={onClose}>
				<Input error={errors.name} name='name' label='Имя' />
				<Input error={errors.phone} name='phone' label='Телефон' />
				<Input error={errors.address} name='address' label='Адрес доставки' />

				<div className='my-6 flex flex-col gap-2'>
					<label htmlFor='payment' className='text-[1.5rem] ml-6 font-bold'>
						Оплата
					</label>
					<select
						id='payment'
						name='payment'
						className='px-8 py-3 rounded-[1.5rem] border-none outline-none text-[1.5rem] bg-[var(--color-primary)] text-[var(--background-primary)]'
					>
						<option value='' disabled>
							Выберите
						</option>
						<option value='cash'>Наличными</option>
						<option value='card'>Картой</option>
						<option value='online'>Онлайн</option>
					</select>
				</div>

				<Input name='comment' label='Дополнительно' />
			</Modal>
		</div>
	)
}
