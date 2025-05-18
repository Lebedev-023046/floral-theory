import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary'
	children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
	const variantClass = props.variant === 'primary' ? styles.primary : styles.secondary

	return (
		<button className={`${styles.button} ${variantClass}`} {...props}>
			{children}
		</button>
	)
}
