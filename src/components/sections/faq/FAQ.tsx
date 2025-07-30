import { Container } from '../../container/Container'
import style from './FAQ.module.css'
export const FAQ = () => {

	
	return <section className={style.faq}>
		<Container>
			<div className={style.faq__content}>
				<h2><span>Frequently</span> Asked Questions</h2>
				<p>Still you have any questions? Contact our Team via support@yourbank.com</p>
				<Questions/>
			</div>
		
		</Container>
	</section>
}

function Questions(){
	return 	<>
		<ul className={style.questions}>
						<li key='questions1' className={style.questions_item}>
							<h4>How do I open an account with YourBank? <span>questions1</span></h4>
							<p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
						</li>
						<li key='questions2' className={style.questions_item}>
							<h4>What documents do I need to provide to apply for a loan?<span>questions2</span></h4>
							<p>The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
						</li>
						<li key='questions3' className={style.questions_item}>
							<h4>How can I access my accounts online?<span>questions3</span></h4>
							<p>Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
						</li>
						<li key='questions4' className={style.questions_item}>
							<h4>Are my transactions and personal information secure?<span>questions4</span></h4>
							<p>At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
						</li>
				</ul>
				<details>
							<summary>Load All FAQ’s</summary>
							<ul className={style.questions}>
								<li key='questions5' className={style.questions_item}>
							<h4>How do I open an account with YourBank? <span>questions5</span></h4>
							<p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
						</li>
						<li key='questions6' className={style.questions_item}>
							<h4>What documents do I need to provide to apply for a loan?<span>questions6</span></h4>
							<p>The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
						</li>
						<li key='questions7' className={style.questions_item}>
							<h4>How can I access my accounts online?<span>questions7</span></h4>
							<p>Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
						</li>
						<li key='questions8' className={style.questions_item}>
							<h4>Are my transactions and personal information secure?<span>questions8</span></h4>
							<p>At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
						</li>
							</ul>
						</details>
	</>
}