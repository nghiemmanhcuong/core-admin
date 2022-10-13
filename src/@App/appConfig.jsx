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
import Login from '@App/Admin/pages/Auth/Login'

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
	},
	{
		path: '/admin/login',
		element: <Login />,
	}
])
