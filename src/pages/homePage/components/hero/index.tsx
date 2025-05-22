import React from 'react'
import HeroFlowers from '../../assets/hero-flowers.png'

export function Hero() {
	return (
		<section className='h-[100dvh] w-full relative'>
			<div className='h-full w-1/2 ml-auto rounded-bl-[2rem] bg-[var(--background-primary)]'>
				<h1
					className='absolute top-1/2 left-1/2 transform -translate-x-[52%] -translate-y-1/2 rotate-[270deg] 
	text-[8rem] leading-[0.7] max-w-[700px] min-w-[500px] w-[45%] font-[Gagalin]'
				>
					<span className='block text-[var(--background-primary)]'>Floral</span>
					<span className='block text-[var(--color-primary)] text-right'>Theory</span>
				</h1>

				<img
					src={HeroFlowers}
					alt='flowers'
					className='absolute bottom-0 right-0 w-[45%] h-auto object-cover object-center'
				/>
			</div>
		</section>
	)
}
