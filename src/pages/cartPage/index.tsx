import { useState } from 'react'
import { useBouquetsCtx } from '../../app/providers/BouquetProvider'
import { useCartCtx } from '../../app/providers/cartProvider'
import { CatalogCard } from '../../features/catalog/ui/catalogCart'
import { Title } from '../../shared/ui/title'
import { OrderModal } from '../../features/order/ui/orderModal'

export function CartPage() {
	const { bouquets } = useBouquetsCtx()
	const { cart, removeFromCart } = useCartCtx()
	const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false)

	const handleOrder = () => setIsOrderOpen(true)
	const handleClose = () => setIsOrderOpen(false)

	if (cart.length === 0) {
		return (
			<div className='min-h-screen py-[13rem] px-8'>
				<Title as='h1'>Корзина пуста</Title>
			</div>
		)
	}

	return (
		<div className='min-h-screen py-[13rem] px-8 relative'>
			<div className='p-8 border-[4px] border-[var(--background-primary)] rounded-3xl text-[var(--title-color)] bg-[var(--color-primary)]'>
				<Title as='h1' className="font-['Russo_One']">
					Корзина
				</Title>

				<div className='flex flex-col gap-8 mt-8'>
					{cart.map(bouquet => (
						<div key={bouquet.id} className='flex items-center gap-8'>
							<div className='max-w-[300px]'>
								<CatalogCard {...bouquet} />
							</div>

							<div className='flex-1 flex flex-col justify-center'>
								<div className='flex justify-between items-center py-6 border-y-[3px] border-[var(--title-color)] text-2xl'>
									<span className='font-bold'>{bouquet.name}</span>
									<span>
										{bouquet.price} {bouquet.currency}
									</span>
									<div className='flex gap-4 text-2xl'>
										<button
											className='bg-[var(--background-primary)] text-white font-bold px-6 py-3 rounded-full'
											onClick={handleOrder}
										>
											заказать
										</button>
										<button
											className='border-[4px] border-[var(--title-color)] bg-transparent px-6 py-3 rounded-full text-[var(--title-color)] font-bold flex items-center gap-2'
											onClick={() => removeFromCart(bouquet.id)}
										>
											удалить
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{isOrderOpen && <OrderModal onClose={handleClose} />}
		</div>
	)
}
