import { useState } from 'react'
import { useUserCtx } from '../../app/providers/userProvider'
import Profile from '../../assets/profile.svg'

import styles from './profileDropdown.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/routes'
import { Button } from '../../shared/ui/button'

export function ProfileDropdown() {
	const { user, logout } = useUserCtx()
	const [open, setOpen] = useState<boolean>(false)

	const toggleDropdown = () => setOpen(prev => !prev)

	return (
		<div className={styles.dropdownWrapper}>
			<button className={styles.trigger} onClick={toggleDropdown}>
				<img className={styles.profileImage} src={Profile} alt='profile' />
			</button>

			{open && (
				<div className={styles.dropdownMenu}>
					{user ? (
						<div className={styles.userInfo}>
							<p className={styles.name}>
								{user.name} {user.surname}
							</p>
							<p className={styles.phone}>+{user.phone}</p>
							<Button className={styles.logout} onClick={logout}>
								Выйти
							</Button>
						</div>
					) : (
						<Link to={ROUTES.auth} className={styles.login}>
							Войти
						</Link>
					)}
				</div>
			)}
		</div>
	)
}
