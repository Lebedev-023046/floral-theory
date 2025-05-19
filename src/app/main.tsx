import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router'
import { Theme } from './providers/themeProvider'
import '../shared/fonts/Gagalin-Regular.otf'
import './global.css'
import './themes.css'
import { FilterProvider } from './providers/filterProvider'
import { BouquetProvider } from './providers/BouquetProvider'
import { CartProvider } from './providers/cartProvider'
import { UserProvider } from './providers/userProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Theme>
			<UserProvider>
				<BouquetProvider>
					<CartProvider>
						<FilterProvider>
							<AppRouter />
						</FilterProvider>
					</CartProvider>
				</BouquetProvider>
			</UserProvider>
		</Theme>
	</StrictMode>
)
