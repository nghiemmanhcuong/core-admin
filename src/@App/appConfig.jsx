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

import { createBrowserRouter, Navigate } from 'react-router-dom'

import AdminCmsLayout from './Admin/components/Layout/AdminCmsLayout'
import AuthCmsLayout from './Admin/components/Layout/AuthCmsLayout'
import { ROUTER_ADMIN } from './Admin/configs/constants'
import { routerAdminConfig, routerAuthConfig } from './Admin/configs/routerConfig'
import DefaultLayout from './Travelo/components/Layout/DefaultLayout'
import { routerTraveloConfig } from './Travelo/configs/routerConfig'
import Page404 from './Travelo/pages/Error/Page404'

export const appRouterConfig = createBrowserRouter([
	// {
	// 	path: '/',
	// 	element: <DefaultLayout />,
	// 	// errorElement: <Page404 />,
	// 	children: [...routerTraveloConfig]
	// },
	{
		path: 'cms',
		element: <Navigate to={ROUTER_ADMIN.homePage} />
	},
    {
		path: 'cms/admin',
		element: <AuthCmsLayout />,
		children: [
			...routerAuthConfig,
			{
				path: '*',
				element: <Page404 />
			}
		]
	},
	{
		path: 'cms/admin',
		element: <AdminCmsLayout />,
		children: [
			...routerAdminConfig,
			{
				path: '*',
				element: <Page404 />
			}
		]
	},
	{
		path: '*',
		element: <Page404 />
	}
])
