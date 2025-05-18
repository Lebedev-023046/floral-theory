import { Title } from '../../shared/ui/title'

import { CatalogView } from './components/catalogView'
import { FiltersView } from './components/filtersView'

import styles from './catalogPage.module.css'

export const CatalogPage = () => {
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
