import { Header } from '../header'
import { Outlet } from 'react-router-dom'
import styles from './header.module.css'

export function Layout() {
	return (
		<div className={styles.layoutWrapper}>
			<Header />
			<Outlet />
		</div>
	)
}
