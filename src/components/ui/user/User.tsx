import { useContext } from 'react'
import { useUser } from '../../../hooks/useUser'
import { UpdateUserContext } from '../../context/AppContext'

export const User = () => {
	const {user} = useUser()
	const updateUser = useContext(UpdateUserContext)
	return <button onClick={() => {
		localStorage.setItem('user' , JSON.stringify({...user , isLogged : false }))
		updateUser({isLogged : false , isRegister : true});
	}}>Выйти</button>
}
