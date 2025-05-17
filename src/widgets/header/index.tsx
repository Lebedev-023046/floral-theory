import React from 'react'

import Logo from '../../assets/logo.png'
import Profile from '../../assets/profile.svg'
import Cart from '../../assets/cart.svg'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/routes'

import { getTheme } from '../../app/providers/themeProvider'
import { ThemeSwitcher } from '../themeSwitcher'

import styles from './header.module.css'

export function Header() {
	const theme = getTheme()

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img src={Logo} alt='logo' />
			</div>

			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navListItem}>
						<Link className={styles.navListLink} to={ROUTES.catalog}>
							каталог
						</Link>
					</li>
					<li className={styles.navListItem}>
						<Link className={styles.navListLink} to='/#about'>
							о нас
						</Link>
					</li>
					<li className={styles.navListItem}>
						<Link className={styles.navListLink} to='/#sales'>
							акции
						</Link>
					</li>
				</ul>
			</nav>

			<div className={styles.menu}>
				<ThemeSwitcher />
				<button>
					<img className={styles.profileImage} src={Cart} alt='cart' />
				</button>
				<button>
					<img className={styles.profileImage} src={Profile} alt='profile' />
				</button>
			</div>
		</div>
	)
}
