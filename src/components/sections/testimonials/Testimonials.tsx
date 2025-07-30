import { useState } from 'react'
import type { TSlide } from '../../../utils/types'
import { Container } from '../../container/Container'
import style from './Testimonials.module.css'
import { slidesDATA } from './sliderData'
	

	
export const Testimonials = () => {
	const [isFor , setIsFor] = useState('Individuals')
	const [currentSlide , setCurrentSlide] = useState<number>(1);
	const slider = slidesDATA.filter(e => e.for == isFor);

	function upCurrentIndexLength(){
		if(currentSlide >= slider.length - 1){
			setCurrentSlide(1)
		}else {
			setCurrentSlide(currentSlide + 1)
		}
	}
	function downCurrentIndexLength(){
		if(currentSlide - 1 <= 0){
			setCurrentSlide(slider.length - 2)
		}else {
			setCurrentSlide(currentSlide - 1)
		}
	}
	return <section className={style.testimonials}>
		<Container>
			<div className={style.testimonials__content}>
					<div className={style.testimonials__content_row}>
						<div className={style.testimonials__content_text}>
							<h2>Out<span>Testimonials</span></h2>
							<p>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
						</div>
						<div className={style.slider_tab}>
							<button onClick={() => {
								setCurrentSlide(1)
								setIsFor('Individuals')
							} }
		 						className={isFor == 'Individuals' ? '' : 'disable' }>
									For Individuals
							</button>
							<button
							 onClick={() => {
								setCurrentSlide(1)
								setIsFor('Businesses')
							 }}
		 						className={isFor == 'Businesses' ? '' : 'disable' }>
									For Businesses
							</button>
						</div>
					</div>
					<div className={style.slider}>
						<div className={style.slider_navigation}>
									<button onClick={downCurrentIndexLength}>
											<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M19.2083 10H1.5M1.5 10L10 1.5M1.5 10L10 18.5" stroke="#CAFF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</button>
									<button onClick={upCurrentIndexLength}>
										<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M19.2083 10H1.5M1.5 10L10 1.5M1.5 10L10 18.5" stroke="#CAFF33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</button>
						</div>
						<div className={style.slider__wrapper}>
							{slider.map((e,i) => {
									return <Slider   key={i} active={currentSlide == i ? true : false} slides={e}/>
							}).slice(
									currentSlide == slider.length - 1 ? currentSlide - 2
		 									: currentSlide -1 
		 							, currentSlide == slider.length - 1 ? currentSlide + 1 
		 									: currentSlide +2)}
						</div>
					</div>
			</div>
		</Container>
	</section>
}


function Slider({slides , active  } : {slides : TSlide , active : boolean  }){
	return <div  style={{
		opacity : active ? 1 : 0.3 
		}}className={style.slide}>
		<div className={style.icon}>
			<svg width="52" height="41" viewBox="0 0 52 41" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.269 37.8235C17.269 39.2042 16.1498 40.3235 14.769 40.3235H3.50049C2.11978 40.3235 1.00049 39.2042 1.00049 37.8235V28.7161C1.00049 25.4601 1.59543 22.0841 2.77686 18.5911L2.77783 18.5881C3.99342 15.0631 5.63817 11.74 7.71143 8.61938V8.61743C9.50977 5.92524 11.4946 3.58802 13.6655 1.60864C14.4988 0.84919 15.728 0.800628 16.6431 1.4104L22.6694 5.42603C23.8098 6.18592 24.1142 7.70838 23.4194 8.86548C21.8007 11.5607 20.409 14.3541 19.2476 17.2463L19.2485 17.2473C17.8966 20.6653 17.2342 24.4484 17.269 28.6028V37.8235ZM44.1489 37.8235C44.1489 39.2042 43.0296 40.3235 41.6489 40.3235H30.3804C28.9997 40.3235 27.8804 39.2042 27.8804 37.8235V28.7161C27.8804 25.4601 28.4743 22.0841 29.6558 18.5911L29.6567 18.5881C30.8723 15.0631 32.5171 11.74 34.5903 8.61938L34.5913 8.61743C36.3896 5.92532 38.3736 3.58798 40.5444 1.60864C41.3777 0.848925 42.6078 0.800556 43.5229 1.4104L49.5493 5.42603C50.6896 6.18589 50.994 7.7084 50.2993 8.86548C48.6806 11.5607 47.2889 14.3541 46.1274 17.2463L46.1284 17.2473C44.7764 20.6653 44.1141 24.4484 44.1489 28.6028V37.8235Z" fill="url(#paint0_linear_11_89097)" stroke="#CAFF33"/>
				<defs>
				<linearGradient id="paint0_linear_11_89097" x1="26.2064" y1="1.00024" x2="26.2064" y2="39.8238" gradientUnits="userSpaceOnUse">
				<stop stopColor="#CAFF33"/>
				<stop offset="1" stopColor="#191919"/>
				</linearGradient>
				</defs>
			</svg>
	</div>
	<div className={style.slide__text}>
			<p>{slides.text}</p>
			<h3>{slides.person} <span>{slides.for}</span></h3>
	</div>
</div>
}


