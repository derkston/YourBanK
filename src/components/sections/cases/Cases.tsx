import { Link } from 'react-router'
import { Container } from '../../container/Container'
import style from './Cases.module.css'
export const Cases = () => {
	return <section className={style.cases}>
		<Container>
			<div className={style.cases__content}>
				<h2><span>Use Cases</span></h2>
				<p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
				<div className={style.solutions}>
						
					<ul className={style.cards}>
						<img style={ {left : 0 ,}} src='/public/img/AbstractDesign2.svg' className={style.iconAbstract}/>
						<li key='1'>
							<img src='/public/img/icons/Group.svg' className='item__icon'/>
							<h4>Managing Personal Finances</h4>
						</li>
						<li key='2'>
							<img src='/public/img/icons/Frame.svg' className='item__icon'/>
							<h4>Saving for the Future</h4>
						</li>
						<li key='3'>
							<img src='/public/img/icons/Union2.svg' className='item__icon'/>
							<h4>Homeownership</h4>
						</li>
						<li key='4'>
							<img src='/public/img/icons/Subtract.svg' className='item__icon'/>
							<h4>Education Funding</h4>
						</li>
					</ul>
					<div className={style.solutions__info}>
						<h3>For Individuals</h3>
						<p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
						<ul className={style.solutions__info_list}>
							<li key='5'>
								<span>78%</span>
								<p>Secure Retirement Planning</p>
							</li>
							<li key='6'>
								<span>63%</span>
								<p>Manageable Debt Consolidation</p>
							</li>
							<li key='7'>
								<span>91%</span>
								<p>Reducing financial burdens</p>
							</li>
						</ul>
						<Link to='/'>Learn More</Link>
					</div>
					</div>
					<div className={style.solutions}>
							
					<ul className={style.cards}>
						<img style={ {right : 0 ,}} src='/public/img/AbstractDesign.svg' className={style.iconAbstract}/>
						<li key='8'>
							<img src='/public/img/icons/Subtract2.svg' className='item__icon'/>
							<h4>Startups and Entrepreneurs</h4>
						</li>
						<li key='9'>
							<img src='/public/img/icons/mortgage.svg' className='item__icon'/>
							<h4>Cash Flow Management</h4>
						</li>
						<li key='10'>
							<img src='/public/img/icons/Subtract-1.svg' className='item__icon'/>
							<h4>Business Expansion</h4>
						</li>
						<li key='11'>
							<img src='/public/img/icons/Subtract-2.svg' className='item__icon'/>
							<h4>Payment Solutions</h4>
						</li>
						
					</ul>
					<div className={style.solutions__info}>
						<h3>For businesses</h3>
						<p> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
						<ul className={style.solutions__info_list}>
							<li key='12'>
								<span>65%</span>
								<p>Cash Flow Management</p>
							</li>
							<li key='13'>
								<span>70%</span>
								<p>Drive Business Expansion</p>
							</li>
							<li key='14'>
								<span>45%</span>	
								<p>Streamline payroll processing</p>
							</li>
						</ul>
						<Link to='/'>Learn More</Link>
					</div>
					</div>
					</div>
		</Container>
	</section>
}
