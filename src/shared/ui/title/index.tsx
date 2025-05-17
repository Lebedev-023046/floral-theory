import React from 'react'
import styles from './title.module.css'

interface Props {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: React.ReactNode
}

export function Title({ as: As, children }: Props) {
	return <As className={styles.title}>{children}</As>
}
