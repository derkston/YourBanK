import { Container } from '../../container/Container'
import style from './Mission.module.css'
export const Mission = () => {
	return <section className={style.mission}>
		<Container>
			<div className={style.mission__content}>
					<h2><span>Mission & Vision</span></h2>
					<p>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
					<div className={style.mission_and_vision}>
							<div className={style.mission_and_vision__images}>
									<img src="/img/mission.png" />
								</div>
								<div className={style.mission_and_vision__text}>
									<h3>Mission</h3>
									<p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
								</div>
							
					</div>
					<div className={style.mission_and_vision}>
						
							<div className={style.mission_and_vision__text}>
								<h3>Vision</h3>
								<p>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
							</div>
								<div className={style.mission_and_vision__images}>
							<img src="/img/vision.png" />
						</div>
					</div>
			</div>
		
		</Container>
	</section>
}
