import { Container } from '../../container/Container'
import { getImagePath } from '../../../utils/imagePath'
import style from './Protect.module.css'

export const Protect = () => {
	return <section className={style.protect}>
		<Container>
			<div className={style.protect__content}>
					<h2>How We <span>Protect You</span></h2>
					<p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
					<ul className={style.protect__list}>
							<li>
								<div className={style.protect__title}>
									<img src={getImagePath('img/icons/protect1.svg')}  className="item__icon" />
									<h4>Secure Online Banking Platform</h4>
								</div>
								<p>Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.</p>
							</li>
							<li>
								<div className={style.protect__title}>
									<img src={getImagePath('img/icons/protect2.svg')}  className="item__icon" />
									<h4>Multi-Factor Authentication</h4>
								</div>
								<p>To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.</p>
							</li>
							<li>
								<div className={style.protect__title}>
									<img src={getImagePath('img/icons/protect3.svg')}  className="item__icon" />
									<h4>Fraud Monitoring</h4>
								</div>
								<p>We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.</p>
							</li>
							<li>
								<div className={style.protect__title}>
									<img src={getImagePath('img/icons/protect4.svg')}  className="item__icon" />
									<h4>Secure Mobile Banking</h4>
								</div>
								<p>Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.</p>
							</li>
					</ul>
			</div>
		</Container>
	
	</section>
}
