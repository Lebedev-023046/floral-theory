interface Props {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	variant?: 'primary' | 'secondary'
	size?: 's' | 'm' | 'l'
	className?: string
	children: React.ReactNode
}

export function Title({ as: As = 'h1', variant = 'primary', size = 'm', className = '', children }: Props) {
	const variantClass = variant === 'primary' ? 'text-[var(--title-color)]' : 'text-[var(--color-primary)]'

	const sizeClass = size === 's' ? 'text-[3rem]' : size === 'm' ? 'text-[4rem]' : 'text-[4.375rem]'

	const baseClass = 'text-center font-[Gagalin]'

	return <As className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}>{children}</As>
}
