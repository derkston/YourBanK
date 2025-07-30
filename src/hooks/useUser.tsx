import { UpdateUserContext, UserContext } from '../components/context/AppContext'

export function useUser(){
	const userLocal = JSON.parse(localStorage.getItem('user'));

	return (
		{
			user : userLocal,
			UserContext : UserContext , 
			UpdateUserContext : UpdateUserContext, 
		}
	)
}