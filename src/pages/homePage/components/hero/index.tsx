import React from 'react'
import HeroFlowers from '../../assets/hero-flowers.png'
import styles from './hero.module.css'

export function Hero() {
	return (
		<section className={styles.heroWrapper}>
			<h1 className={styles.heroTitle}>
				<span>Floral</span>
				<span>Theory</span>
			</h1>

			<img className={styles.heroFlowers} src={HeroFlowers} alt='flowers' />
		</section>
	)
}
