import React from 'react'
import styles from './title.module.css'

interface Props {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	variant?: 'primary' | 'secondary'
	size?: 's' | 'm' | 'l'
	className?: string
	children: React.ReactNode
}

export function Title({ as: As = 'h1', variant = 'primary', size = 'm', className, children }: Props) {
	const variantClass = variant === 'primary' ? styles.primary : styles.secondary
	const sizeClass = size === 's' ? styles.s : size === 'm' ? styles.m : styles.l

	return <As className={`${styles.title} ${variantClass} ${sizeClass} ${className}`}>{children}</As>
}
