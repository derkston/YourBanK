import { useContext } from 'react'
import { NavLink } from 'react-router'
import { Container } from '../../container/Container'
import { UserContext } from '../../context/AppContext'
import style from './StartFinancial.module.css'

export const StartFinancial = () => {
	const user = useContext(UserContext);
	
	return <section className={style.start_financial}>
		<Container>
			<div className={style.start_financial__content}>
				<img src="/img/AbstractDesign2.svg" className={style.icon} />
				<div className={style.start_financial_text}>
					<h2>Start your financial journey with
						<span>YourBank today!</span>
					</h2>
					<p>Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
				</div>
				<NavLink to={user.isLogged ? '/user' : '/login'} className='button'>Open Account</NavLink>
			</div>
		</Container>
	</section>
}
