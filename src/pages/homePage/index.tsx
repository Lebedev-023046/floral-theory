import React from 'react'
import { useThemeCtx } from '../../app/providers/themeProvider'
import { Hero } from './components/hero'
import { Sales } from './components/sales'
import { About } from './components/about'

import { useFiltersCtx } from '../../app/providers/filterProvider'

export const HomePage = () => {
	return (
		<main className='h-full'>
			<Hero />
			<Sales />
			<About />
		</main>
	)
}
