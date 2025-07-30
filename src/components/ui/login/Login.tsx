import { useContext, useRef } from 'react'
import { useUser } from '../../../hooks/useUser'
import { UpdateUserContext } from '../../context/AppContext'
import style from './Login.module.css'
export const Login = () => {
	const {user} = useUser();
	const updateUser = useContext(UpdateUserContext)
	const formRef = useRef<HTMLFormElement>();
	function handleForm(e){
		e.preventDefault();
		const formEmail = formRef.current.children[0].children[0].value;
		const formPassword = formRef.current.children[1].children[0].value;
		if(user.email == formEmail && user.password == formPassword){
			localStorage.setItem('user' , JSON.stringify({...user , isLogged : true}))
			updateUser({isLogged : true , isRegister : true})
		}else {
			return alert('Не правильно введены данные')
		}
	}
	return <div className={style.login}>
		<h2><span>Войти</span></h2>
		<p>Welcome back! Please log in to access your account.</p>
		<form ref={formRef} className={style.login__form}>
		<div className='input__wrapper'>
			<input name='email' id='email'  type="email" />
			<label htmlFor="email">Введите email</label>
		</div>
		<div className='input__wrapper'>
			<input  name='password' id='password' type="password" />
			<label htmlFor="password">Введите пароль</label>
		</div>
		<button onClick={(e) => handleForm(e)}>Отправить</button>
	</form>
	</div>
}
