

import { BrowserRouter } from 'react-router'
import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/Header'

import { useState } from 'react'
import { useUser } from './hooks/useUser'
import { AppRoutes } from './routes/AppRoutes'
import { UserContext, UpdateUserContext } from './components/context/AppContext'

export const MOCK_USER = {
  isLogged: false,
  isRegister: false,
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

function App() {
  const { user } = useUser();
  
  if (user == null || !user.isRegister) {
    localStorage.setItem('user', JSON.stringify(MOCK_USER))
  }
  
  const [isUser, setIsUser] = useState<{ isLogged: boolean, isRegister: boolean }>({
    isLogged: user?.isLogged || false,
    isRegister: user?.isRegister || false
  })

  return (
    <>
      <UserContext.Provider value={isUser}>
        <UpdateUserContext.Provider value={(newUser: { isLogged: boolean, isRegister: boolean }) => setIsUser(newUser)}>
          <BrowserRouter>
            <Header />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </UpdateUserContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
