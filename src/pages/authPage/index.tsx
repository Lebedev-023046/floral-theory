import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useThemeCtx } from '../../app/providers/themeProvider'
import { AuthModal } from '../../features/auth/ui/AuthModal'

import { useLoginForm } from '../../features/auth/model/useLoginForm'
import { useRegisterForm } from '../../features/auth/model/useRegisterForm'

import styles from './authPage.module.css'

export const AuthPage = () => {
	const location = useLocation()

	return (
		<div className={styles.authPageWrapper}>
			<Routes location={location}>
      <Route path="login" element={<AuthModal mode="login" {...useLoginForm()} />} />
      <Route path="register" element={<AuthModal mode="register" {...useRegisterForm()} />} />
				<Route path='*' element={<Navigate to='login' />} />
			</Routes>
		</div>
	)
}
