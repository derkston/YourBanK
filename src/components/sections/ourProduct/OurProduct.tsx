import { useState } from 'react'
import { Container } from '../../container/Container'
import { getImagePath } from '../../../utils/imagePath'
import style from './OurProduct.module.css'

export const OurProduct = () => {
	const [individuals , setIndividuals ] = useState(true);
	const [businesses , setBusinesses ] = useState(false);
	return <section className={style.our_products}>
		<Container>
			<div className={style.our_products}>
				<div className={style.our_products_text}>
					<h2>Our<span>Products</span></h2>
					<p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
				</div>
				<div className={style.variants_btn}>
						<button onClick={() => {setIndividuals(true); setBusinesses(false) } } className={individuals ? '' : 'disable'}>For Individuals</button>
						<button onClick={() => {setIndividuals(false); setBusinesses(true)} } className={businesses ? '' : 'disable'}>For Businesses</button>
				</div>
					{individuals && <ul className={style.variants_products}>
					
						<li>
						<img src={getImagePath('img/icons/briefcase.svg')} className='item__icon' />
						<h3>Checking Accounts <span>/For Individuals</span></h3>
						<p>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
					</li>
					<li>
						<img src={getImagePath('img/icons/Union.svg')} className='item__icon' />
						<h3>Savings Accounts <span>/For Individuals</span></h3>
						<p>Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
					</li>
					<li>
						<img src={getImagePath('img/icons/mortgage.svg')} className='item__icon' />
						<h3>Loans and Mortgages <span>/For Individuals</span></h3>
						<p>Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.</p>
					</li>
					</ul>
				}
					{
					businesses &&
					<ul className={style.variants_products}>
						
						<li>
						<img src={getImagePath('img/icons/briefcase.svg')}className='item__icon' />
						<h3>Checking Accounts <span>/For businesses</span></h3>
						<p>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
					</li>
					<li>
						<img src={getImagePath('img/icons/Union.svg')}className='item__icon' />
						<h3>Savings Accounts <span>/For businesses</span></h3>
						<p>Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
					</li>
					<li>
						<img src={getImagePath('img/icons/mortgage.svg')}className='item__icon' />
						<h3>Loans and Mortgages <span>/For businesses</span></h3>
						<p>Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.</p>
					</li>
					</ul>
					}
			</div>
		</Container>
	</section>
}

