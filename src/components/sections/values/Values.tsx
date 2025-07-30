import { Container } from '../../container/Container'
import style from './Values.module.css'
export const Values = () => {
	return <section className={style.values}>
			<Container>
				<div className={style.values__content		}>
						<h2>Our <span>Values</span></h2>
						<p>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
						</p>
						<ul className={style.values__list}>
							<li>
								<h3>Integrity</h3>
								<p>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
							</li>
							<li>
								<h3>Customer Centricity</h3>
								<p>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
							</li>
							<li>
								<h3>Collaboration</h3>
								<p>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
							</li>
							<li>
								<h3>Innovation</h3>
								<p>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
							</li>
						</ul>
				</div>
			</Container>
	</section>
}
