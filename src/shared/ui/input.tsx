import { InputHTMLAttributes, ReactNode, useId } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	children?: ReactNode
}

export const Input = ({ children, label = '', type = 'text', error, ...props }: InputProps) => {
	const id = useId()

	return (
		<div className='w-full mb-6 last:mb-0'>
			{label && (
				<label htmlFor={id} className='block ml-6 mb-1 text-[1.5rem]'>
					{label}
				</label>
			)}
			<input
				id={id}
				type={type}
				{...props}
				className='w-full px-8 py-3 rounded-full outline-none border-none text-[1.5rem] text-[var(--background-primary)] bg-[var(--color-primary)]'
			/>
			{error && <span className='block mt-2 ml-4 text-[1rem] text-red-200'>{error}</span>}
		</div>
	)
}
