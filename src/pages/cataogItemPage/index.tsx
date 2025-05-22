import { Navigate, useParams } from 'react-router-dom'
import { CatalogCard } from '../../features/catalog/ui/catalogCart'
import { useBouquetsCtx } from '../../app/providers/BouquetProvider'
import { ROUTES } from '../../shared/routes'
import { Button } from '../../shared/ui/button'
import { useCartCtx } from '../../app/providers/cartProvider'

export function CatalogItemPage() {
	const { addToCart } = useCartCtx()
	const { id } = useParams() as { id: string }
	const { bouquets } = useBouquetsCtx()
	const bouquet = bouquets.find(bouquet => bouquet.id === id)

	if (!bouquet) {
		alert('Товар не найден')
		return <Navigate to={ROUTES.catalog} />
	}

	return (
		<div className='px-12 pt-[13rem] pb-12'>
			<section className='flex justify-evenly gap-12 p-12 rounded-[1.5rem] text-[var(--color-primary)] bg-[var(--background-secondary)]'>
				<div className='flex flex-col justify-center gap-12'>
					<CatalogCard {...bouquet} />
				</div>

				<div className='flex flex-col items-start justify-center gap-6 max-w-[700px] w-full'>
					<div>
						<h2 className='ml-6 text-2xl font-semibold'>Состав</h2>
						<p className='mt-4 text-[1.5rem] px-10 py-6 text-center rounded-[1.5rem] text-[var(--background-secondary)] bg-[var(--color-primary)]'>
							{bouquet.composition.join(', ')}
						</p>
					</div>
					<div>
						<h2 className='ml-6 text-2xl font-semibold'>Оформление</h2>
						<p className='mt-4 text-[1.5rem] px-10 py-6 text-center rounded-[1.5rem] text-[var(--background-secondary)] bg-[var(--color-primary)]'>
							{bouquet.decoration}
						</p>
					</div>
					<div>
						<h2 className='ml-6 text-2xl font-semibold'>Дополнительно</h2>
						<p className='mt-4 text-[1.5rem] px-10 py-6 text-center rounded-[1.5rem] text-[var(--background-secondary)] bg-[var(--color-primary)]'>
							{bouquet.additional}
						</p>
					</div>
				</div>
			</section>

			<div className='w-[30%] ml-auto mr-20 mt-6'>
				<Button onClick={() => addToCart(bouquet)} className='text-[2rem] rounded-[1.2rem]' variant='secondary'>
					добавить в корзину
				</Button>
			</div>
		</div>
	)
}
