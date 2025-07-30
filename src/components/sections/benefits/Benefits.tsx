import { Container } from '../../container/Container'
import style from './Benefits.module.css'

export const Benefits = () => {
	return <section className={style.benefits}>
		<Container>
		<div className={style.benefits__content}>
				<h2>Our<span>Benefits</span></h2>
				<p>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
			<ul className={style.benefits__list}>
						<li>
							<h3><img src="/public/img/icons/benefits1.svg" className='item__icon' />Competitive Compensation</h3>
							<p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
						</li>
						<li>
							<h3><img src="/public/img/icons/benefits2.svg" className='item__icon' />Health and Wellness</h3>
							<p>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
						</li>
						<li>
							<h3><img src="/public/img/icons/benefits3.svg" className='item__icon' />Retirement Planning</h3>
							<p>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
						</li>
						<li>
							<h3><img src="/public/img/icons/benefits4.svg" className='item__icon' />Work-Life Balance</h3>
							<p>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
						</li>
			</ul>
		</div>
		</Container>
	</section>
}
