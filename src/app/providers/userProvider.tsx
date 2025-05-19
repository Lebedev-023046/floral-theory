import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User } from '../../features/auth/types'

interface UserContextType {
	user: User | null
	login: (user: User) => void
	logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const stored = localStorage.getItem('user')
		if (stored) {
			try {
				setUser(JSON.parse(stored))
			} catch {
				localStorage.removeItem('user')
			}
		}
	}, [])

	const login = (user: User) => {
		setUser(user)
		localStorage.setItem('user', JSON.stringify(user))
	}

	const logout = () => {
		setUser(null)
		localStorage.removeItem('user')
	}

	return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}

export const useUserCtx = () => {
	const ctx = useContext(UserContext)
	if (!ctx) throw new Error('useUserCtx must be used inside UserProvider')
	return ctx
}
