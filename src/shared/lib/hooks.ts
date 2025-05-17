import { useEffect, useMemo, useRef } from 'react'
import debounce from 'lodash/debounce'

export const useDebounce = (callback: () => void, delay: number): (() => void) => {
	const ref = useRef<() => void>(() => {})

	useEffect(() => {
		ref.current = callback
	}, [callback])

	const debouncedCallback = useMemo(() => {
		const func = () => {
			ref.current?.()
		}
		return debounce(func, delay)
	}, [delay])

	return debouncedCallback
}
