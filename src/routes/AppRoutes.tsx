
import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { UserContext } from '../components/context/AppContext'
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from './routes'



export const AppRoutes = () => {
		const isUser = useContext(UserContext);

		 return isUser.isRegister && isUser.isLogged ? (
			<Routes>
				[{PUBLIC_ROUTE
				.filter(e => e.pathName != 'Login' )
				.map(e  => <Route
				 key={e.path}
				 path={e.path}
				 element={<e.element/>}>
				</Route>)},
				{PRIVATE_ROUTE
				.map(e => <Route
				 key={e.path}
				 path={e.path}
				 element={<e.element/>}>
				 </Route>)}]
				<Route
				 path="*" 
				 element={<Navigate to="/" replace />} />
			</Routes>
		 )
		 :(
			<Routes>
				{PUBLIC_ROUTE
				.map(e => <Route 
				 key={e.path} 
				 path={e.path} 
				 element={<e.element/>}>
				 </Route>)}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		 )
		 
}
