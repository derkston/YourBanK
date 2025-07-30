import { Mission } from '../../components/sections/mission/Mission'
import { PressReleases } from '../../components/sections/pressReleases/PressReleases'
import { Preview } from '../../components/sections/preview/Preview'
import style from './About.module.css'

export const About = () => {
	return <main className={style.about}>
		<Preview
			subtitle='Welcome to YourBank'
			title='Where Banking Meets '
			titleSpan='Excellence!'
			text='At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.'
			images='/public/img/About.png'
		/>
		<Mission/>
		<PressReleases/>
	</main>
}
