import Logo from '../../../assets/logo.png'

import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../routes'

import { ThemeSwitcher } from '../../../widgets/themeSwitcher'
import { CartIcon } from '../../../widgets/cart'
import { ProfileDropdown } from '../../../widgets/ProfileDropdown'
import styles from './header.module.css'

export function Header() {
	const { pathname } = useLocation()
	const isMainPage = pathname === '/'

	return (
		<header className={`${styles.header} ${!isMainPage ? styles.hasRightBg : ''}`}>
			<div className={styles.logo}>
				<Link to={ROUTES.main}>
					<img src={Logo} alt='logo' />
				</Link>
			</div>

			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navListItem}>
						<Link className={styles.navListLink} to={ROUTES.catalog}>
							каталог
						</Link>
					</li>
					<li className={styles.navListItem}>
						<Link className={styles.navListLink} to={ROUTES.aboutUs}>
							о нас
						</Link>
					</li>
					<li className={styles.navListItem}>
						<a className={styles.navListLink} href='/#sales'>
							акции
						</a>
					</li>
				</ul>
			</nav>

			<div className={styles.menu}>
				<ThemeSwitcher />
				<CartIcon />
				<ProfileDropdown />
			</div>
		</header>
	)
}
