import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	children: ReactNode
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
	const variantClass = variant === 'primary' ? styles.primary : styles.secondary

	return (
		<button className={`${styles.button} ${variantClass} ${className}`} {...props}>
			{children}
		</button>
	)
}
