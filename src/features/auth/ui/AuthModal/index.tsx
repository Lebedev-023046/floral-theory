import React from 'react'
import { Modal } from '../../../../shared/ui/modal'
import { Input } from '../../../../shared/ui/input'
import { Link } from 'react-router-dom'
import styles from './AuthModal.module.css'
import { useValidate } from './useValidate'

// const phonePattern = '\+375\s?\(?\d{2}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}'

interface AuthModalProps {
	mode: 'login' | 'register'
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AuthModal = ({ mode, onSubmit }: AuthModalProps) => {
	const isLogin = mode === 'login'
	const { errors, validate } = useValidate({ isLogin })

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget)
		if (!validate(formData)) {
			e.preventDefault()
			return
		}
		onSubmit(e)
	}

	return (
		<Modal
			title={isLogin ? 'войти' : 'регистрация'}
			submitLabel={isLogin ? 'Войти' : 'Зарегистрироваться'}
			renderFooterText={() =>
				isLogin ? (
					<p>
						Нет аккаунта?{' '}
						<Link className={styles.decor} to='/auth/register'>
							Зарегистрируйтесь
						</Link>
					</p>
				) : (
					<p>
						Уже есть аккаунт?{' '}
						<Link className={styles.decor} to='/auth/login'>
							Войдите
						</Link>
					</p>
				)
			}
			onSubmit={handleSubmit}
		>
			<div className={styles.authFormWrapper}>
				{!isLogin && (
					<>
						<Input name='name' label='Имя' error={errors.name} />
						<Input name='surname' label='Фамилия' error={errors.surname} />
					</>
				)}
				<Input name='phone' label='Телефон' type='tel' inputMode='tel' error={errors.phone} />
				<Input name='password' label='Пароль' type='password' error={errors.password} />
			</div>
		</Modal>
	)
}
