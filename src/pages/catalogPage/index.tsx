import { Title } from '../../shared/ui/title'

import { CatalogView } from './components/catalogView'
import { FiltersView } from './components/filtersView'
import { useFiltersCtx } from '../../app/providers/filterProvider'
import { useEffect } from 'react'

export const CatalogPage = () => {
	const { resetFilters } = useFiltersCtx()

	useEffect(() => {
		const body = document.querySelector('body')
		if (body) {
			body.style.overflow = 'hidden'
		}

		return () => {
			resetFilters()
			if (body) {
				body.style.overflow = 'auto'
			}
		}
	}, [])

	return (
		<main className='h-full pt-[13rem]'>
			<div className='flex gap-8 h-full'>
				<aside className='p-8 w-1/4 h-full overflow-y-auto rounded-tr-2xl text-[color:var(--color-primary)] bg-[color:var(--background-primary)]'>
					<header>
						<Title as='h1' variant='secondary' size='l'>
							каталог
						</Title>
						<FiltersView />
					</header>
				</aside>
				<CatalogView />
			</div>
		</main>
	)
}
