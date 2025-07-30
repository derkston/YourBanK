import { Container } from '../container/Container'
import { Logo } from '../ui/logo/Logo'
import style from './Footer.module.css'

export const Footer = () => {
	return <footer className={style.footer}>
		<Container>
			<div className={style.footer__nav}>
					<Logo/>
			</div>
			<ul className={style.footer__contact}>
					<li>
						<a href="tel:89089078760">
							<img src="/public/img/icons/tel.svg" className={style.footer__contact_icon} />
							+79089078760
						</a>
					</li>
					<li>
						<a href="mailto:stepaarkadevich2019@gmail.com">
							<img src="/public/img/icons/email.svg" className={style.footer__contact_icon} />
							stepaarkadevich2019@gmail.com
						</a>
					</li>
			</ul>
		</Container>
	</footer>
}
