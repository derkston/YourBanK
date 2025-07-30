import { createContext } from 'react'
import type { TUser } from '../../utils/types'

export const UserContext : React.Context<TUser> = createContext(JSON.parse(localStorage.getItem('user')))
export  const UpdateUserContext  = createContext(({isLogged , isRegister } : {isLogged : boolean , isRegister : boolean }) => {})