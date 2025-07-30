import { useContext } from 'react'
import { NavLink } from 'react-router'
import { Container } from '../../container/Container'
import { UserContext } from '../../context/AppContext'
import style from './Preview.module.css'

type TPreviewContent = {
	subtitle: string,
	title: string,
	titleSpan: string
	text: string,
	images: string
}

export const Preview = ({
	subtitle,
	title,
	titleSpan,
	text,
	images,
}: TPreviewContent) => {
	const user = useContext(UserContext);
	
	return <section className={style.preview}>
		<Container>
			<div className={style.preview__content}>
				<div className={style.preview__left}>
					{subtitle != '' ? <h4 className={style.subtitle}>
						<img src="/img/icons/checkMark.svg" />
						{subtitle}
					</h4> : ''}
					{title != '' ? <h1>
						{title} <span>{titleSpan}</span>
					</h1> : ''}
					{text != '' ? <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p> : ''}
					<NavLink
						to={user.isLogged ? '/user' : '/login'}
						className='button'
					>
						Open Account
					</NavLink>
				</div>
				<img className={style.preview_img} src={images} />
			</div>
		</Container>
	</section>
}
