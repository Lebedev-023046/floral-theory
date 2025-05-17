import { Title } from '../../../../shared/ui/title'
import Phone from '../../assets/phone.png'
import Clock from '../../assets/clock.png'
import Location from '../../assets/location.png'
import Delivery from '../../assets/delivery.png'
import styles from './about.module.css'

export function About() {
	return (
		<section className={styles.aboutWrapper}>
			<Title as='h1'>О нас</Title>
			<div className={styles.infoContainer}>
				<div className={styles.infoBlock}>
					<img className={styles.image} src={Phone} alt='phone' />
					<p className={styles.text}>+375(29)5783421</p>
				</div>
				<div className={styles.infoBlock}>
					<img className={styles.image} src={Clock} alt='time' />
					<p className={styles.text}>
						<span>ПН - СБ 9:00 - 21:00</span>
						<span>ВС 10:00 - 18:00</span>
					</p>
				</div>
				<div className={styles.infoBlock}>
					<img className={styles.image} src={Location} alt='location' />
					<p className={styles.text}>ул. Куйбышева 45</p>
				</div>
				<div className={styles.infoBlock}>
					<img className={styles.image} src={Delivery} alt='carrying' />
					<p className={styles.text}>
						<span>Оперативная доставка</span>
						<span>Вежливые курьеры</span>
					</p>
				</div>
			</div>
			<div className='infoBlock'></div>
		</section>
	)
}
