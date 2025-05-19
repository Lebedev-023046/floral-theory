import React from 'react'
import { Title } from '../../../../shared/ui/title'
import { CatalogCard } from '../../../../features/catalog/ui/catalogCard'

import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/react-splide/css'

import styles from './sales.module.css'
import { useBouquetsCtx } from '../../../../app/providers/BouquetProvider'

export function Sales() {
	const { bouquets } = useBouquetsCtx()

	const bouquetsForSale = bouquets.filter(bouquet => bouquet.hasSale)

	return (
		<section id='sales' className={styles.salesWrapper}>
			<Title as='h1'>акционные предложения</Title>

			<div className={styles.sliderWrapper}>
				<Splide options={{ rewind: true, perPage: 3, gap: '4.25rem', pagination: false }}>
					{bouquetsForSale.map(bouquet => (
						<SplideSlide key={bouquet.id}>
							<CatalogCard {...bouquet} />
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	)
}
