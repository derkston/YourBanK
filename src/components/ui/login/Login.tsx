import { useContext, useRef } from 'react'
import { useUser } from '../../../hooks/useUser'
import { UpdateUserContext } from '../../context/AppContext'
import style from './Login.module.css'

export const Login = () => {
	const { user } = useUser();
	const updateUser = useContext(UpdateUserContext)
	const formRef = useRef<HTMLFormElement>(null);
	
	function handleForm(e: React.FormEvent) {
		e.preventDefault();
		if (!formRef.current) return;
		
		const formEmail = (formRef.current.children[0] as HTMLElement).children[0] as HTMLInputElement;
		const formPassword = (formRef.current.children[1] as HTMLElement).children[0] as HTMLInputElement;
		
		if (user?.email === formEmail.value && user?.password === formPassword.value) {
			localStorage.setItem('user', JSON.stringify({ ...user, isLogged: true }))
			updateUser({ isLogged: true, isRegister: true })
		} else {
			return alert('Не правильно введены данные')
		}
	}
	
	return <div className={style.login}>
		<h2><span>Войти</span></h2>
		<p>Welcome back! Please log in to access your account.</p>
		<form ref={formRef} className={style.login__form}>
			<div className='input__wrapper'>
				<input name='email' id='email' type="email" />
				<label htmlFor="email">Введите email</label>
			</div>
			<div className='input__wrapper'>
				<input name='password' id='password' type="password" />
				<label htmlFor="password">Введите пароль</label>
			</div>
			<button onClick={handleForm}>Отправить</button>
		</form>
	</div>
}
