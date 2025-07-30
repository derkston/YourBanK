import { useContext, useRef } from 'react'
import { useUser } from '../../../hooks/useUser'
import { UpdateUserContext } from '../../context/AppContext'
import style from './Register.module.css'
export const Register = () => {
	const update = useContext(UpdateUserContext)
	const {user  } = useUser();
	const {email} = user
	const formRef = useRef<HTMLFormElement>();
	
	function handleForm(e : Event){
		e.preventDefault();
		const formInputs = formRef.current.children;
		const inputEmail = formRef.current.children[2].children[0];
		if(email != inputEmail.value ){
			for( let i = 0 ; i < formInputs.length - 1 ; i++){
			const formInputName  = formInputs[i].children[0].name;
			const formInputValue = formInputs[i].children[0].value;
			user[formInputName] = formInputValue
			}
			localStorage.setItem('user' , JSON.stringify({...user , isLogged :true , isRegister : true}))
			update({isLogged : true , isRegister : true})
		}else  {
			return alert('Такой аккаунт уже существует')
		}
	}
	
	return <div className={style.register}>
			<h2><span>Зарегистрироваться</span></h2>
			<p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
			<form ref={formRef} className={style.register__form}>
				<div className="input__wrapper">
						<input required id='first_name' name='first_name'type="text" />
						<label htmlFor="first_name">Введите имя*</label>
				</div>
				<div className="input__wrapper">
						<input required id='last_name' name='last_name'type="text" />
						<label htmlFor="last_name">Введите фамилию*</label>
				</div>
				<div className="input__wrapper">
						<input required id='email' name='email'type="email" />
						<label htmlFor="email">Введите email*</label>
				</div>
				<div className="input__wrapper">
						<input required id='password' name='password' type="password" />
						<label htmlFor="password">Введите пароль*</label>
				</div>
				<button onClick={(e) => handleForm(e)}>Отправить</button>
			</form>
	</div>
}
