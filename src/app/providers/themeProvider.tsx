import React, { useState, useEffect, PropsWithChildren } from 'react'

const StorageKey = 'theme-color'

type Theme = 'light' | 'dark'

interface InitialState {
	theme: Theme
	toggleTheme: () => void
}

const initalState: InitialState = {
	theme: 'light',
	toggleTheme: () => {}
}

export const ThemeContext = React.createContext(initalState)

export const useThemeCtx = () => {
	const context = React.useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

export const getTheme = (): Theme => {
	let theme = localStorage.getItem(StorageKey) as Theme

	if (!theme) {
		localStorage.setItem(StorageKey, 'light')
		theme = 'light'
	}

	return theme
}

export const Theme = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState(getTheme)

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	useEffect(() => {
		localStorage.setItem(StorageKey, theme)
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
