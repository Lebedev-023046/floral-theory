import React from 'react'
import Dark from '../../assets/theme/dark.png'
import Light from '../../assets/theme/light.png'
import { getTheme, useThemeCtx } from '../../app/providers/themeProvider'

import styles from './themeSwitcher.module.css'

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useThemeCtx()

	const src = theme === 'light' ? Dark : Light

	return (
		<button className={styles.themeSwitcherButton} onClick={toggleTheme}>
			<img className={styles.themeSwitcherImage} src={src} alt='theme' />
		</button>
	)
}
