import React from 'react'
import { useThemeCtx } from '../../app/providers/themeProvider'
import { Hero } from './components/hero'
import { Sales } from './components/sales'
import styles from './homePage.module.css'
import { About } from './components/about'

export const HomePage = () => {
	const { toggleTheme } = useThemeCtx()

	return (
		<div className={styles.homePageWrapper}>
			<Hero />
			<Sales />
			<About />
			{/* <Button onClick={toggleTheme}>Hey!</Button> */}
		</div>
	)
}
