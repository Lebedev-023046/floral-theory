import React, { ReactNode, useId } from 'react'
import { Button } from './button'

interface ModalProps {
	title?: 'войти' | 'регистрация'
	submitLabel?: string
	children?: ReactNode
	overlay?: boolean
	className?: string
	renderFooterText?: () => ReactNode
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
	onClose?: () => void
}

export const Modal = ({
	title,
	submitLabel = 'Подтвердить',
	children,
	overlay,
	className = '',
	renderFooterText,
	onSubmit,
	onClose
}: ModalProps) => {
	const id = useId()

	return (
		<>
			<div
				className={`relative z-[1000] flex flex-col justify-center items-center w-full max-w-[550px] px-[5.5rem] py-[2.5rem] pb-[6rem] rounded-[1.5rem] m-auto text-[var(--color-primary)] bg-[var(--background-secondary)] ${className}`}
			>
				<div className='text-start w-[180px]'>
					<h1 className='text-end text-[3rem] font-[Gagalin] leading-none'>
						<span className='block text-start'>Floral</span>
						<span className='block text-[var(--color-secondary)]'>Theory</span>
					</h1>
					{title && <h2 className='text-center mt-[2.5rem] mb-[1.5rem] text-[2rem]'>{title}</h2>}
				</div>
				<div className='w-full mt-[1.5rem]'>
					<form onSubmit={onSubmit} className='w-full'>
						<div>{children}</div>
						<div className='flex flex-col justify-center items-center gap-[1rem] mt-[3.5rem] text-[1.5rem]'>
							<Button type='submit' className='w-[90%]'>
								{submitLabel}
							</Button>
							{overlay && (
								<Button type='button' onClick={onClose} className='w-[90%]'>
									Закрыть
								</Button>
							)}
						</div>
						{renderFooterText && (
							<div className='text-[0.8rem] mt-[1rem] text-center text-[var(--color-secondary)]'>
								{renderFooterText()}
							</div>
						)}
					</form>
				</div>
			</div>
			{overlay && <div id={id} onClick={onClose} className='fixed inset-0 w-full h-full bg-black/60 z-[999]' />}
		</>
	)
}
