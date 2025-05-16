import React, { InputHTMLAttributes, ReactNode, useId } from 'react'
import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	children?: ReactNode
}

export const Input = ({ children, label = '', type = 'text', ...props }: InputProps) => {
	const id = useId()

	return (
		<div className={styles.inputContainer}>
			{label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<input className={styles.input} {...props} id={id} type={type} />
		</div>
	)
}
