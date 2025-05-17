import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../shared/routes'
import { AuthPage } from '../pages/authPage'
import { HomePage } from '../pages/homePage'
import { CatalogPage } from '../pages/catalogPage'
import { CatalogItemPage } from '../pages/cataogItemPage'
import { Layout } from '../widgets/layout'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.auth + '/*'} element={<AuthPage />} />

				<Route element={<Layout />}>
					<Route path={ROUTES.main} element={<HomePage />} />
					<Route path={ROUTES.catalog} element={<CatalogPage />} />
					<Route path={ROUTES.catalogItem} element={<CatalogItemPage />} />
				</Route>

				<Route path='*' element={<Navigate to={ROUTES.main} />} />
			</Routes>
		</BrowserRouter>
	)
}
