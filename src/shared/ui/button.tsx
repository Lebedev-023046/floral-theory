import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary'
	children: ReactNode
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
	const baseStyles = 'block w-full px-8 py-3 rounded-3xl cursor-pointer min-w-fit'
	const primaryStyles = 'bg-[var(--button-background)] text-[var(--button-color)]'
	const secondaryStyles = 'bg-[var(--background-secondary)] text-[var(--color-primary)]'

	const variantClass = variant === 'primary' ? primaryStyles : secondaryStyles

	return (
		<button className={`${baseStyles} ${variantClass} ${className}`} {...props}>
			{children}
		</button>
	)
}
