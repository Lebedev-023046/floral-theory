import React from 'react'
import { Modal } from '../../../../shared/ui/modal'
import { Input } from '../../../../shared/ui/input'
import { Link } from 'react-router-dom'
import styles from './AuthModal.module.css'

// const phonePattern = '\+375\s?\(?\d{2}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}'

interface AuthModalProps {
	mode: 'login' | 'register'
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AuthModal = ({ mode, onSubmit }: AuthModalProps) => {
	const isLogin = mode === 'login'


	return (
		<Modal
			title={isLogin ? 'войти' : 'регистрация'}
			submitLabel={isLogin ? 'Войти' : 'Зарегистрироваться'}
			renderFooterText={() =>
				isLogin ? (
					<p>
						Нет аккаунта? <Link className={styles.decor} to='/auth/register'>Зарегистрируйтесь</Link>
					</p>
				) : (
					<p>
						Уже есть аккаунт? <Link className={styles.decor} to='/auth/login'>Войдите</Link>
					</p>
				)
			}
			onSubmit={onSubmit}
		>
			<div className={styles.authFormWrapper}>
				{isLogin ? (
					<>
						<Input name='phone' label='Телефон' type="tel" inputMode='tel' autoComplete=""   />
						<Input name='password' label='пароль' type='password' />
					</>
				) : (
					<>
						<Input name='name' label='Имя' />
						<Input name='surname' label='Фамилия' />
						<Input name='phone' label='Телефон' type="tel" inputMode='tel'/>
						<Input name='password' label='Пароль' type='password'/>
					</>
				)}
			</div>
		</Modal>
	)
}
