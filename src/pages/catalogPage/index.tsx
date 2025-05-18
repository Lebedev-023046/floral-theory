import { Title } from '../../shared/ui/title'

import { CatalogView } from './components/catalogView'
import { FiltersView } from './components/filtersView'

import styles from './catalogPage.module.css'
import { useEffect } from 'react'
import { useFiltersCtx } from '../../app/providers/filterProvider'

export const CatalogPage = () => {
	const { resetFilters } = useFiltersCtx()

	useEffect(() => {
		return () => {
			resetFilters()
		}
	}, [])

	return (
		<main className={styles.catalogPageWrapper}>
			<div className={styles.container}>
				<aside className={styles.sidebar}>
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
