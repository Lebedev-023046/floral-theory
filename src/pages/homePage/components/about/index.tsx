import { Title } from '../../../../shared/ui/title'
import Phone from '../../assets/phone.png'
import Clock from '../../assets/clock.png'
import Location from '../../assets/location.png'
import Delivery from '../../assets/delivery.png'

export function About() {
	return (
		<section id='about' className='py-8 pb-24 bg-[rgba(var(--background-secondary-rgb),0.25)]'>
			<Title as='h1'>О нас</Title>

			<div className='flex flex-wrap justify-evenly gap-8 mt-8'>
				<div className='flex flex-col items-center gap-8 text-[1.5rem] text-[var(--title-color)]'>
					<img
						src={Phone}
						alt='phone'
						className='filter invert-[66%] sepia-[16%] saturate-[281%] hue-rotate-[95deg] brightness-[90%] contrast-[91%] dark:invert-[68%] dark:sepia-[8%] dark:saturate-[540%] dark:contrast-[88%]'
					/>
					<p>+375(29)5783421</p>
				</div>

				<div className='flex flex-col items-center gap-8 text-[1.5rem] text-[var(--title-color)]'>
					<img
						src={Clock}
						alt='time'
						className='filter  saturate-100 invert-[66%] sepia-[16%]  hue-rotate-[95deg] brightness-[90%] contrast-[91%] dark:invert-[68%] dark:sepia-[8%] dark:saturate-[540%] dark:contrast-[88%]'
					/>
					<p className='text-center'>
						<span className='block'>ПН - СБ 9:00 - 21:00</span>
						<span className='block'>ВС 10:00 - 18:00</span>
					</p>
				</div>

				<div className='flex flex-col items-center gap-8 text-[1.5rem] text-[var(--title-color)]'>
					<img
						src={Location}
						alt='location'
						className='filter invert-[66%] sepia-[16%] saturate-[281%] hue-rotate-[95deg] brightness-[90%] contrast-[91%] dark:invert-[68%] dark:sepia-[8%] dark:saturate-[540%] dark:contrast-[88%]'
					/>
					<p>ул. Куйбышева 45</p>
				</div>

				<div className='flex flex-col items-center gap-8 text-[1.5rem] text-[var(--title-color)]'>
					<img
						src={Delivery}
						alt='carrying'
						className='filter invert-[66%] sepia-[16%] saturate-[281%] hue-rotate-[95deg] brightness-[90%] contrast-[91%] dark:invert-[68%] dark:sepia-[8%] dark:saturate-[540%] dark:contrast-[88%]'
					/>
					<p className='text-center'>
						<span className='block'>Оперативная доставка</span>
						<span className='block'>Вежливые курьеры</span>
					</p>
				</div>
			</div>
		</section>
	)
}
