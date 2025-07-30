
import type { ReactElement } from 'react'
import style from './Container.module.css'

export const Container = ({children} : {children : ReactElement}) => {
	return <div className={style.container}>
		{children}
	</div>
}
