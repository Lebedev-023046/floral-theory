import React from 'react'

import Logo from '../../assets/logo.png'
import Profile from '../../assets/profile.svg'
import Cart from '../../assets/cart.svg'

import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../shared/routes'

import { getTheme } from '../../app/providers/themeProvider'
import { ThemeSwitcher } from '../themeSwitcher'

import styles from './header.module.css'

export function Header() {
	const { pathname } = useLocation()
	const isMainPage = pathname === '/'

	return (
		<header className={`${styles.header} ${pathname !== '/' ? styles.hasRightBg : ''}`}>
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
						<a className={styles.navListLink} href='/#about'>
							о нас
						</a>
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
				<button>
					<img className={styles.cartImage} src={Cart} alt='cart' />
				</button>
				<button>
					<img className={styles.profileImage} src={Profile} alt='profile' />
				</button>
			</div>
		</header>
	)
}
