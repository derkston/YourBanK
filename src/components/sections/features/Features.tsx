import { useState } from 'react'
import { Container } from '../../container/Container'
import { Arrow } from '../../ui/arrow/Arrow'
import style from './Features.module.css'
export const Features = () => {
	const [tab , setTab] = useState(
		{banking : true , tools : false , support : false}
		)
	return <section className={style.features}>
		<Container>
			<div className={style.features__content}>
				<h2>Out <span>Features</span></h2>
				<p>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
			</div>
			<div className={style.tabs}>
					<div className={style.tab_bar}>
						<button
						 onClick={() => setTab({banking : true , tools : false , support : false})}
						 className={tab.banking ? style.active : ''}>Online Banking</button>
						<button
						 onClick={() => setTab({banking : false , tools : true , support : false})}
						 className={tab.tools ? style.active : ''}>Financial Tools</button>
						<button
						 onClick={() => setTab({banking : false , tools : false , support : true})}
						 className={tab.support ? style.active : ''}>Customer Support</button>
					</div>
					<ul className={tab.banking ? style.active : ''}>
						<li key='tab2'>
							<h4>24/7 Account Access <span>/banking</span></h4>
							<p>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
							<Arrow/>
						</li>
						<li key='tab3'>
							<h4>Mobile Banking App <span>/banking</span></h4>
							<p>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
							<Arrow/>
						</li>
						<li key='tab4'>
							<h4>Secure Transactions <span>/banking</span></h4>
							<p>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
							<Arrow/>
						</li>
						<li key='tab5'>
							<h4>Bill Pay and Transfers <span>/banking</span></h4>
							<p>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
							<Arrow/>
						</li>
					</ul>
					<ul className={tab.tools ? style.active : ''}>
						<li key='tab6'>
							<h4>24/7 Account Access <span>/tools</span></h4>
							<p>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
							<Arrow/>
						</li>
						<li key='tab7'>
							<h4>Mobile Banking App <span>/tools</span></h4>
							<p>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
							<Arrow/>
						</li>
						<li key='tab8'>
							<h4>Secure Transactions <span>/tools</span></h4>
							<p>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
							<Arrow/>
						</li>
						<li key='tab9'>
							<h4>Bill Pay and Transfers <span>/tools</span></h4>
							<p>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
							<Arrow/>
						</li>
					</ul>
					<ul className={tab.support ? style.active : ''}>
						<li key='tab10'>
							<h4>24/7 Account Access <span>/support</span></h4>
							<p>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
							<Arrow/>
						</li>
						<li key='tab11'>
							<h4>Mobile Banking App <span>/support</span></h4>
							<p>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
							<Arrow/>
						</li>
						<li key='tab12'>
							<h4>Secure Transactions <span>/support</span></h4>
							<p>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
							<Arrow/>
						</li>
						<li key='tab13'>
							<h4>Bill Pay and Transfers <span>/support</span></h4>
							<p>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
							<Arrow/>
						</li>
					</ul>
			</div>
		</Container>
	</section>
}
