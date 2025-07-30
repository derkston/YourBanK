import { UpdateUserContext, UserContext } from '../components/context/AppContext'

interface User {
  isLogged: boolean;
  isRegister: boolean;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export function useUser() {
  const userLocalString = localStorage.getItem('user');
  const userLocal: User | null = userLocalString ? JSON.parse(userLocalString) : null;

  return {
    user: userLocal,
    UserContext: UserContext,
    UpdateUserContext: UpdateUserContext,
  }
}