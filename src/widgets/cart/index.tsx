import { Link } from 'react-router-dom'

import { ROUTES } from '../../shared/routes'
import { useCartCtx } from '../../app/providers/cartProvider'
import Cart from '../../assets/cart.svg'
import styles from './cart.module.css'

export function CartIcon() {
	const { cart } = useCartCtx()
	return (
		<button>
			<Link to={ROUTES.cart}>
				<span className={styles.cartCounter}>{cart.length}</span>
				<img className={styles.cartImage} src={Cart} alt='cart' />
			</Link>
		</button>
	)
}
