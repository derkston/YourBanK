import { Container } from '../../container/Container'
import style from './PressReleases.module.css'
export const PressReleases = () => {
	return <section className={style.pressReleases}>
		<Container>
			<div className={style.pressReleases__content}>
				<h2><span>Press Releases</span></h2>
				<p>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
				<div className={style.article__list}>
						<article className={style.pressReleases__article}>
								<img src="/img/article1.png" />
								<h4>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h4>
								<div className={style.pressReleases__info}>
									<span>Location: India</span>
									<span>Date: 06/11/2024</span>
								</div>
								<p>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
						</article>
						<article className={style.pressReleases__article}>
								<img src="/img/article2.png" />
								<h4>YourBank Expands Branch Network with Opening of New Location in Chennai</h4>
								<div className={style.pressReleases__info}>
									<span>Location: India</span>
									<span>Date: 12/11/2024</span>
								</div>
								<p>YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.</p>
						</article>
						<article className={style.pressReleases__article}>
								<img src="/img/article3.png" />
								<h4>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h4>
								<div className={style.pressReleases__info}>
									<span>Location: India</span>
									<span>Date: 24/12/2024</span>
								</div>
								<p>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
						</article>
						<article className={style.pressReleases__article}>
								<img src="/img/article4.png" />
								<h4>YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h4>
								<div className={style.pressReleases__info}>
									<span>Location: India</span>
									<span>Date: 28/12/2024</span>
								</div>
								<p>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
						</article>
				</div>
			</div>
		</Container>
	</section>
}
