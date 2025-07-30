import { useState } from 'react'
import { Container } from '../../components/container/Container'
import { Testimonials } from '../../components/sections/testimonials/Testimonials'
import { Login } from '../../components/ui/login/Login'
import { Register } from '../../components/ui/register/Register'
import style from './Account.module.css'
export const Account = () => {
	const [isSign , setSign] = useState(false)
	return <main>
		<section>
			<Container>
				<div className={style.account}>
						<div className={style.account__switch}>
							<button
							 className={isSign ? 'disable' : '' }
							  onClick={() => setSign(false)}>Register</button>
							<button
							 className={isSign ? '' : 'disable' }
							  onClick={() => setSign(true)}>Login</button>
						</div>
						<div className={style.form__wrapper}>	
							{isSign ? <Login/> : <Register/>}
						</div>
				</div>
			</Container>
		</section>
		<Testimonials/>
	</main>
}
