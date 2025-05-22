import { Header } from './header'
import { Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<div className='flex flex-col min-h-full w-full h-full bg-[var(--color-primary)]'>
			<Header />
			<Outlet />
		</div>
	)
}
