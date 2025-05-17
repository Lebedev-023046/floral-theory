import React from 'react'
import { useThemeCtx } from '../../app/providers/themeProvider'
import { Button } from '../../shared/ui/button'
import styles from './homePage.module.css'
import { Hero } from './components/hero'

export const HomePage = () => {
	const { toggleTheme } = useThemeCtx()

	return (
		<div className={styles.homePageWrapper}>
			<Hero />
			{/* <Button onClick={toggleTheme}>Hey!</Button> */}
		</div>
	)
}
