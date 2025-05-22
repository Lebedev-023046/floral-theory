import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { ROUTES } from '../routes'
import { ThemeSwitcher } from '../../widgets/themeSwitcher'
import { CartIcon } from '../../widgets/cartIcon'
import { ProfileDropdown } from '../../widgets/profileDropdown'

export function Header() {
	const { pathname } = useLocation()
	const isMainPage = pathname === '/'

	return (
		<header
			className={`absolute z-10 top-0 w-full flex justify-between items-center px-12 py-6 ${
				!isMainPage
					? 'after:content-[""] after:absolute after:top-0 after:right-0 after:w-[50.5%] after:h-full after:rounded-tl-2xl after:rounded-bl-2xl after:bg-[var(--background-primary)] after:-z-10'
					: ''
			}`}
		>
			<div>
				<Link to={ROUTES.main}>
					<img src={Logo} alt='logo' />
				</Link>
			</div>

			<nav className='absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<ul className='flex gap-10 text-[2rem]'>
					<li className='text-[var(--background-primary)]'>
						<Link to={ROUTES.catalog}>каталог</Link>
					</li>
					<li className='text-[var(--background-primary)]'>
						<Link to={ROUTES.aboutUs}>о нас</Link>
					</li>
					<li className='text-[var(--color-primary)]'>
						<a href='/#sales'>акции</a>
					</li>
				</ul>
			</nav>

			<div className='flex gap-4'>
				<ThemeSwitcher />
				<CartIcon />
				<ProfileDropdown />
			</div>
		</header>
	)
}
