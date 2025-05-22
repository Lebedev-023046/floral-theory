import { Title } from '../../shared/ui/title'
import styles from './AboutUsPage.module.css'
import Flowers from './assets/flowers.png'
import InstagramIcon from './assets/instagram.svg'

export function AboutUsPage() {
	return (
		<div className={styles.aboutUsWrapper}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}></h1>
				<Title variant='secondary' size='s'>
					"FLORAL THEORY — ЦВЕТЫ КАК ИСКУССТВО"
				</Title>

				<div className={styles.missionSection}>
					<div className={styles.quoteBlock}>
						<p className={styles.quote}>
							"Мы верим, что цветы — это не просто подарок, а способ передать эмоции. Каждый наш букет создаётся с
							любовью к деталям, балансу цвета и текстуры. Наша миссия — вдохновлять, удивлять и делать ваши моменты
							особенными."
						</p>
					</div>
					<img src={Flowers} alt='Букет' className={styles.image} />
				</div>

				<Title as='h2' variant='secondary' className={styles.subtitle}>
					ПОЧЕМУ МЫ?
				</Title>

				<ul className={styles.list}>
					<li className={styles.listItem}>
						<span className={styles.dot}></span>
						Авторские букеты — только ручная сборка и уникальные комбинации.
					</li>
					<li className={styles.listItem}>
						<span className={styles.dot}></span>
						Свежесть — работаем с локальными поставщиками и ежедневными поставками.
					</li>
					<li className={styles.listItem}>
						<span className={styles.dot}></span>
						Эко-подход — биоразлагаемая упаковка и перерабатываемые материалы.
					</li>
					<li className={styles.listItem}>
						<span className={styles.dot}></span>
						Персонализация — подбираем цветы под характер и вкус получателя.
					</li>
				</ul>

				<div className={styles.footer}>
					<div className={styles.addressBlock}>
						<p>ул. Куйбышева 45</p>
						<p>ПН – СБ 9:00 – 21:00</p>
						<p>ВС 10:00 – 18:00</p>
					</div>
					<div className={styles.contacts}>
						<img src={InstagramIcon} alt='Instagram' />
						<span>+375(29)5783421</span>
					</div>
				</div>
			</div>
		</div>
	)
}
