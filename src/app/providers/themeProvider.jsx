import React from 'react'

const initalState = {
	theme: 'light',
	toggleTheme: () => {}
}

export const ThemeContext = React.createContext(initalState)

export const useTheme = () => {
	const context = React.useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = React.useState('light')
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
