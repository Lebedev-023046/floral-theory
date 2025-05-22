import Dark from '../assets/theme/dark.png'
import Light from '../assets/theme/light.png'
import { useThemeCtx } from '../app/providers/themeProvider'

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useThemeCtx()
	const src = theme === 'light' ? Dark : Light

	return (
		<button className='max-w-[2rem] max-h-[2rem]' onClick={toggleTheme}>
			<img src={src} alt='theme' className='max-w-full max-h-full' />
		</button>
	)
}
