import { FAQ } from '../../components/sections/faq/FAQ'
import { Preview } from '../../components/sections/preview/Preview'
import { Protect } from '../../components/sections/protect/Protect'
import style from './Security.module.css'

export const Security = () => {
	return <main className={style.security}>
			<Preview
				subtitle=''
				title='Your Security is Our'
				titleSpan='Top Priority'
				text='At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.'
				images='/public/img/security.png'
			/>
			<Protect/>
			<FAQ/>
	</main>
}
