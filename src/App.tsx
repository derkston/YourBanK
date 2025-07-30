

import { BrowserRouter } from 'react-router'
import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/Header'


import { useState } from 'react'
import { useUser } from './hooks/useUser'
import { AppRoutes } from './routes/AppRoutes'

 export const MOCK_USER = {
    isLogged : false,
    isRegister : false,
    first_name : '',
    last_name : '',
    email : '',
    password : '',
  }

function App() {

  const {user , UserContext , UpdateUserContext} = useUser();
  if(user == null || !user.isRegister ){
    localStorage.setItem('user' , JSON.stringify(MOCK_USER))
  }
  const [isUser , setIsUser] = useState({isLogged : user.isLogged 
    , isRegister : user.isRegister})

 
  return (
    <>
    <UserContext value={isUser}>
      <UpdateUserContext value={(isUser : {isLogged : boolean , isRegister : boolean}) => setIsUser(isUser)}>
        <BrowserRouter>
            <Header/>
            <AppRoutes/>
            <Footer/>
        </BrowserRouter> 
      </UpdateUserContext>  
    </UserContext>
    </>
  )
}

export default App
