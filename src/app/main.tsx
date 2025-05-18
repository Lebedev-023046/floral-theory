import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router'
import { Theme } from './providers/themeProvider'
import '../shared/fonts/Gagalin-Regular.otf'
import './global.css'
import './themes.css'
import { FilterProvider } from './providers/filterProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Theme>
			<FilterProvider>
				<AppRouter />
			</FilterProvider>
		</Theme>
	</StrictMode>
)
