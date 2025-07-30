import { createContext } from 'react'

interface UserContextType {
  isLogged: boolean;
  isRegister: boolean;
}

interface UpdateUserContextType {
  (user: UserContextType): void;
}

export const UserContext = createContext<UserContextType>({
  isLogged: false,
  isRegister: false,
});

export const UpdateUserContext = createContext<UpdateUserContextType>(() => {});