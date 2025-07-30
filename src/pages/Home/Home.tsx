import { Cases } from '../../components/sections/cases/Cases'
import { FAQ } from '../../components/sections/faq/FAQ'
import { Features } from '../../components/sections/features/Features'
import { OurProduct } from '../../components/sections/ourProduct/OurProduct'
import { Preview } from '../../components/sections/preview/Preview'
import { StartFinancial } from '../../components/sections/startFinancial/StartFinancial'
import { Testimonials } from '../../components/sections/testimonials/Testimonials'
import style from './Home.module.css'

export const Home = () => {


	return <main className={style.home}>
		<Preview
		subtitle='No LLC Required, No Credit Check.'
		title='Welcome to YourBank
		Empowering Your'
		titleSpan='Financial Journey'
		images='/public/img/AbstractDesign3.svg'
		text='At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers` needs.'
		/>
		<OurProduct/>
		<Cases/>
		<Features/>
		<FAQ/>
		<Testimonials/>
		<StartFinancial/>
	</main>
}
