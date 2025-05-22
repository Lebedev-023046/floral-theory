import { useState } from 'react'
import { useUserCtx } from '../app/providers/userProvider'
import { Link } from 'react-router-dom'

import Profile from '../assets/profile.svg'
import { ROUTES } from '../shared/routes'
import { Button } from '../shared/ui/button'

export function ProfileDropdown() {
	const { user, logout } = useUserCtx()
	const [open, setOpen] = useState<boolean>(false)

	const toggleDropdown = () => setOpen(prev => !prev)

	return (
		<div className='relative text-base'>
			<button onClick={toggleDropdown}>
				<img src={Profile} alt='profile' className='object-contain max-w-full max-h-full' />
			</button>

			{open && (
				<div className='absolute top-[120%] right-0 min-w-[220px] bg-[var(--background-primary)] text-[var(--color-primary)] border border-[var(--color-secondary)] rounded-xl shadow-xl p-4 z-50 flex flex-col gap-3'>
					{user ? (
						<div className='flex flex-col gap-1 font-medium'>
							<p>
								{user.name} {user.surname}
							</p>
							<p>{user.phone}</p>
							<Button
								onClick={logout}
								className='mt-3 bg-[var(--button-background)] text-[var(--primary-color)] px-4 py-2 border-2 border-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--button-color)] hover:text-[var(--background-primary)] transition-colors'
							>
								Выйти
							</Button>
						</div>
					) : (
						<Link
							to={ROUTES.auth}
							className='text-center font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)]'
						>
							Войти
						</Link>
					)}
				</div>
			)}
		</div>
	)
}
