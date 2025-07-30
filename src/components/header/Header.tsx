import { Container } from '../container/Container'
import { Logo } from '../ui/logo/Logo'
import { NavBar } from '../ui/navBar/NavBar'
import style from './Header.module.css'

export const Header = () => {
	return <header className={style.header}>
		<img className={style.icon} src="/public/img/icons/header-icon.svg"/>
		<Container>
			<div className={style.header__content}>
				<Logo/>
				<NavBar/>
			</div>
		</Container>
	</header>
}
