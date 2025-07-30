import { useContext, useState } from 'react'
import { NavLink } from 'react-router'
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '../../../routes/routes'
import { UserContext } from '../../context/AppContext'
import style from './NavBar.module.css'

export const NavBar = () => {
	const user = useContext(UserContext);
	const [burgerIsActive, setBurgerIsActive] = useState(false)
	
	return <>
		<nav className={style.nav}>
			{user.isRegister && user.isLogged ? [
				PUBLIC_ROUTE
					.filter(e => e.path != '/account:login' && e.path != '/account:register')
					.map(e => {
						return <NavLink key={e.path} to={e.path}>{e.pathName}</NavLink>
					}),
				PRIVATE_ROUTE.map(e => {
					return <NavLink key={e.path} to={e.path}>{e.pathName}</NavLink>
				})
			] : (
				PUBLIC_ROUTE
					.filter(e => e.path != '/account:login' && e.path != '/account:register')
					.map(e => {
						return <NavLink key={e.path} to={e.path}>{e.pathName}</NavLink>
					})
			)
			}
		</nav>
		<nav className={burgerIsActive ? style.nav_mb_active : style.nav_mb}>
			{user.isRegister && user.isLogged ? [
				PUBLIC_ROUTE
					.filter(e => e.path != '/account:login' && e.path != '/account:register')
					.map(e => {
						return <NavLink key={e.path} to={e.path}>{e.pathName}</NavLink>
					}),
				PRIVATE_ROUTE
					.map(e => {
						return <NavLink key={e.path} to={e.path}>{e.pathName}</NavLink>
					})
			] : (
				PUBLIC_ROUTE
					.filter(e => e.path != '/account:login' && e.path != '/account:register')
					.map(e => {
						return <NavLink key={e.path} to={e.path}>{e.pathName}</NavLink>
					})
			)
			}
		</nav>
		
		<button onClick={() => setBurgerIsActive(!burgerIsActive)} className={style.burger}>
			<span></span><span></span><span></span>
		</button>
	</>
}
