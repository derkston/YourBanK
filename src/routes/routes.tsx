import { User } from '../components/ui/user/User'
import { About } from '../pages/About/About'
import { Account } from '../pages/Account/Account'
import { Careers } from '../pages/Careers/Careers'
import { Home } from '../pages/Home/Home'
import { Security } from '../pages/Security/Security'

export const PUBLIC_ROUTE = [
	{
		path : '/',
		element : Home ,
		pathName : 'Home'
	},
	{
		path : '/careers',
		element : Careers ,
		pathName : 'Careers'
	},
	{
		path : '/about',
		element : About ,
		pathName : 'About'
	},
	{
		path : '/security',
		element : Security ,
		pathName : 'Security'
	},
	{
		path : '/account',
		element : Account ,
		pathName : 'Account',
	},
]
export const PRIVATE_ROUTE = [
	{
		path : '/account:user',
		element : User ,
		pathName : 'User'
	}
]