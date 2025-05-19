import { createContext, ReactNode, useContext, useState } from 'react'
import { Bouquet } from '../../features/catalog/types'

interface CartItem extends Bouquet {}

interface CartContextType {
	cart: CartItem[]
	addToCart: (item: Bouquet) => void
	removeFromCart: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([])

	const addToCart = (item: Bouquet) => {
		const existingItem = cart.find(i => i.id === item.id)
		if (existingItem) {
			alert('Товар уже в корзине')
			return
		}

		setCart(prev => [...prev, { ...item }])
	}

	const removeFromCart = (id: string) => {
		setCart(prev => prev.filter(i => i.id !== id))
	}

	return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}

export const useCartCtx = () => {
	const ctx = useContext(CartContext)
	if (!ctx) throw new Error('CartContext must be used within a CartProvider')
	return ctx
}
