import { NavLink } from 'react-router'
import { Container } from '../../container/Container'
import style from './Job.module.css'
export const Job = () => {
	return <section className={style.job}>
		<Container>
			<div className={style.job__content}>
				<h2><span>Job Openings</span></h2>
				<p>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
				<ul className={style.job__list}>
						<li className={style.job__item}>
									<h3>Relationship Manager</h3>
									<div className={style.job__info}>
										<span>Location: India</span>
										<span>Department: Retail Banking</span>
									</div>
									<h3>About This Job</h3>
									<p>As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.</p>
									<ul className={style.requirements}>
										<h3>Requirements & Qualifications</h3>
										<li>Bachelor's degree in Business, Finance, or a related field</li>
										<li>Minimum of 3 years of experience in sales or relationship management in the banking industry</li>
										<li>Proven track record of meeting and exceeding sales targets</li>
										<li>Excellent interpersonal and negotiation skills</li>
										<li>Strong knowledge of banking products and services</li>
									</ul>
									<NavLink to='/' className='button'>Apply Now</NavLink>
						</li>
						<li className={style.job__item}>
									<h3>Risk Analyst</h3>
									<div className={style.job__info}>
										<span>Location: India</span>
										<span>Department: Risk Management</span>
									</div>
									<h3>About This Job</h3>
									<p>As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.</p>
									<ul className={style.requirements}>
										<h3>Requirements & Qualifications</h3>
										<li>Bachelor's degree in Finance, Economics, or a related field</li>
										<li>Minimum of 2 years of experience in risk management or a similar role</li>
										<li>Proficiency in risk analysis tools and techniques</li>
										<li>Strong analytical and problem-solving skills</li>
										<li>Knowledge of regulatory requirements and industry best practices</li>
									</ul>
									<NavLink to='/' className='button'>Apply Now</NavLink>
						</li>
						<li className={style.job__item}>
									<h3>IT Security Specialist</h3>
									<div className={style.job__info}>
										<span>Location: India</span>
										<span> Department: Information Technology</span>
									</div>
									<h3>About This Job</h3>
									<p>As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.</p>
									<ul className={style.requirements}>
										<h3>Requirements & Qualifications</h3>
										<li>Bachelor's degree in Computer Science, Information Security, or a related field</li>
										<li>Minimum of 5 years of experience in IT security or a similar role</li>
										<li>In-depth knowledge of network security protocols and technologies</li>
										<li>Familiarity with regulatory frameworks such as PCI DSS and GDPR</li>
										<li>Professional certifications such as CISSP or CISM are preferred</li>
									</ul>
									<NavLink to='/' className='button'>Apply Now</NavLink>
						</li>
				</ul>
			</div>
		</Container>
	</section>
}
