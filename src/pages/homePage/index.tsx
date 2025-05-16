import React from 'react'
import { useThemeCtx } from '../../app/providers/themeProvider'
import { Button } from '../../shared/ui/button'


export const HomePage = () => {
	const { toggleTheme } = useThemeCtx()

	return (
		<>
			<Button onClick={toggleTheme}>Hey!</Button>
		</>
	)
}
