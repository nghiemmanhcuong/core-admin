/*
 * Created Date: 07-10-2022, 10:41:54 am
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { createBrowserRouter } from 'react-router-dom'

import AdminCmsLayout from './Admin/components/Layout/AdminCmsLayout'
import { routerAdminConfig } from './Admin/configs/routerConfig'
import DefaultLayout from './Travelo/components/Layout/DefaultLayout'
import { routerTraveloConfig } from './Travelo/configs/routerConfig'
import Page404 from './Travelo/pages/Error/Page404'

export const appRouterConfig = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		errorElement: <Page404 />,
		children: [...routerTraveloConfig]
	},
	{
		path: '/admin',
		element: <AdminCmsLayout />,
		children: [...routerAdminConfig]
	}
])

const fuseDark = {
	50: '#e5e6e8',
	100: '#bec1c5',
	200: '#92979f',
	300: '#666d78',
	400: '#464e5b',
	500: '#252f3e',
	600: '#212a38',
	700: '#1b2330',
	800: '#161d28',
	900: '#0d121b',
	A100: '#5d8eff',
	A200: '#2a6aff',
	A400: '#004af6',
	A700: '#0042dd',
	contrastDefaultColor: 'light'
}
