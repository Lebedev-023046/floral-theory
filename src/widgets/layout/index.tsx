import React from 'react'
import styles from './header.module.css'
import { Header } from '../header'
import { Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<div className={styles.layoutWrapper}>
			<Header />
			<Outlet />
		</div>
	)
}
