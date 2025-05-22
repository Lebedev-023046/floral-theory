import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AuthModal } from '../../features/auth/ui/authModal'
import { useLoginForm } from '../../features/auth/model/useLoginForm'
import { useRegisterForm } from '../../features/auth/model/useRegisterForm'

export const AuthPage = () => {
	const location = useLocation()

	return (
		<div className='flex justify-center items-center min-h-full bg-[var(--background-primary)]'>
			<Routes location={location}>
				<Route path='login' element={<AuthModal mode='login' {...useLoginForm()} />} />
				<Route path='register' element={<AuthModal mode='register' {...useRegisterForm()} />} />
				<Route path='*' element={<Navigate to='login' />} />
			</Routes>
		</div>
	)
}
