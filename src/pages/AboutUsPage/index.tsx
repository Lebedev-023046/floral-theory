import { Title } from '../../shared/ui/title'
import Flowers from './assets/flowers.png'
import InstagramIcon from './assets/instagram.svg'

export function AboutUsPage() {
	return (
		<div className='pt-[8.5rem]'>
			<div className='bg-[var(--background-primary)] text-[var(--color-primary)] font-gagalin px-8 py-16'>
				<h1 className='text-center'></h1>
				<Title variant='secondary' size='s'>
					"FLORAL THEORY — ЦВЕТЫ КАК ИСКУССТВО"
				</Title>

				<div className='flex flex-wrap justify-around items-center mt-12 gap-8'>
					<div className='bg-[var(--background-secondary)] px-20 py-30 rounded-4xl max-w-[850px]'>
						<p className='text-[2rem] leading-[1.5]'>
							"Мы верим, что цветы — это не просто подарок, а способ передать эмоции. Каждый наш букет создаётся с
							любовью к деталям, балансу цвета и текстуры. Наша миссия — вдохновлять, удивлять и делать ваши моменты
							особенными."
						</p>
					</div>
					<img src={Flowers} alt='Букет' className='-ml-32 scale-[1.5]' />
				</div>

				<Title
					as='h2'
					variant='secondary'
					className='inline-block text-center text-[3rem] mt-20 mb-4 ml-[12%] bg-white/10 border-[6px] border-white/20 px-20 py-4 rounded-[2rem]'
				>
					ПОЧЕМУ МЫ?
				</Title>

				<ul className='text-[2rem] mt-12 ml-[5%]'>
					{[
						'Авторские букеты — только ручная сборка и уникальные комбинации.',
						'Свежесть — работаем с локальными поставщиками и ежедневными поставками.',
						'Эко-подход — биоразлагаемая упаковка и перерабатываемые материалы.',
						'Персонализация — подбираем цветы под характер и вкус получателя.'
					].map((text, i) => (
						<li key={i} className='flex items-center max-w-[65%] gap-[3.75rem] mt-[4.75rem] leading-[1.5]'>
							<span className='w-[4.875rem] h-[4.875rem] rounded-full bg-[var(--background-secondary)] shrink-0' />
							{text}
						</li>
					))}
				</ul>

				<div className='flex flex-wrap justify-between items-center gap-4 mt-[14rem] w-[85%] mx-auto text-[2rem]'>
					<div>
						<p className='ml-[-1rem] mb-8'>ул. Куйбышева 45</p>
						<p>ПН – СБ 9:00 – 21:00</p>
						<p>ВС 10:00 – 18:00</p>
					</div>
					<div className='flex items-center gap-2 font-bold'>
						<img src={InstagramIcon} alt='Instagram' />
						<span>+375(29)5783421</span>
					</div>
				</div>
			</div>
		</div>
	)
}
