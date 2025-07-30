import { Benefits } from '../../components/sections/benefits/Benefits'
import { FAQ } from '../../components/sections/faq/FAQ'
import { Job } from '../../components/sections/job/Job'
import { Preview } from '../../components/sections/preview/Preview'
import { StartFinancial } from '../../components/sections/startFinancial/StartFinancial'
import { Values } from '../../components/sections/values/Values'
import style from './Careers.module.css'

export const Careers = () => {
	return <main className={style.careers}>
		<Preview
				subtitle=''
				title='Welcome to !'
				titleSpan='YourBank Careers!'
				images='img/Image.png'
				text='Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.'
		/>
		<Values/>
		<Benefits/>
		<Job/>
		<FAQ/>
		<StartFinancial/>
	</main>
}
