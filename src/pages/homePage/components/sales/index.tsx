import React from 'react'
import { Title } from '../../../../shared/ui/title'
import { CatalogCard } from '../../../../features/catalog/ui/catalogCart'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { useBouquetsCtx } from '../../../../app/providers/BouquetProvider'

export function Sales() {
	const { bouquets } = useBouquetsCtx()
	const bouquetsForSale = bouquets.filter(bouquet => bouquet.hasSale)

	return (
		<section id='sales' className='pt-[5.5rem] px-[4.5rem] pb-0'>
			<Title as='h1'>акционные предложения</Title>

			<div className='m-[6.25rem]'>
				<Splide
					options={{
						rewind: true,
						perPage: 3,
						gap: '4.25rem',
						pagination: false
					}}
				>
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
