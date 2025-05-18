import React from 'react'
import { useThemeCtx } from '../../app/providers/themeProvider'
import { Hero } from './components/hero'
import { Sales } from './components/sales'
import { About } from './components/about'

import styles from './homePage.module.css'
import { useFiltersCtx } from '../../app/providers/filterProvider'

export const HomePage = () => {
	return (
		<main className={styles.homePageWrapper}>
			<Hero />
			<Sales />
			<About />
		</main>
	)
}
