import React, { ReactNode, useId } from 'react'
import { Button } from '../button'
import styles from './modal.module.css'

interface ModalProps {
	title?: 'войти' | 'регистрация'
	submitLabel?: string
	children?: ReactNode
	renderFooterText: () => ReactNode

	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Modal = ({ title, submitLabel = 'Подтвердить', renderFooterText, children, onSubmit }: ModalProps) => {
	const id = useId()

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.headerContainer}>
				<h1 className={styles.title}>
					<span>Floral</span>
					<span>Theory</span>
				</h1>
				{title && <h2 className={styles.subtitle}>{title}</h2>}
			</div>
			<div className={styles.formContainer}>
				<form onSubmit={onSubmit} className={styles.authForm}>
					<div className={styles.formFields}>{children}</div>
					<div className={styles.buttonContainer}>
						<Button type='submit'>{submitLabel}</Button>
						{renderFooterText && <div className={styles.footerText}>{renderFooterText()}</div>}
					</div>
				</form>
			</div>
		</div>
	)
}
