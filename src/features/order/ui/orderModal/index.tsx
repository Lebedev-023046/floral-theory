import { Input } from '../../../../shared/ui/input'
import { Modal } from '../../../../shared/ui/modal'
import { useValidate } from '../../model/useValidate'
import styles from './orderModal.module.css'

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
		<div className={styles.orderModalWrapper}>
			<Modal className={styles.padding} onSubmit={handleSubmit} overlay onClose={onClose}>
				<Input error={errors.name} name='name' label='Имя' />
				<Input error={errors.phone} name='phone' label='Телефон' />
				<Input error={errors.address} name='address' label='Адрес доставки' />
				<div className={styles.selectBlock}>
					<label htmlFor='payment' className={styles.selectLabel}>
						Оплата
					</label>
					<select id='payment' name='payment' className={styles.select}>
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
