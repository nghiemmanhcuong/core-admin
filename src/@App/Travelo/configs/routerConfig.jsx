import React from 'react'
import Login from '../pages/Auth/Login'
import EmailNotifycationResetPassword from '../pages/Auth/ResetPassword/EmailNotifycationResetPassword'
import EmailResetPassword from '../pages/Auth/ResetPassword/EmailResetPassword'
import ResetPassword from '../pages/Auth/ResetPassword/ResetPassword'
import ListComponent from '../pages/Document/ListComponent'
import Download from '../pages/Download/Download'
import HomePage from '../pages/HomePage'
import { ROUTER_TRAVELO } from './constants'

/*
 * Created Date: 07-10-2022, 8:35:32 pm
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
export const routerTraveloConfig = [
	{
		path: ROUTER_TRAVELO.list_component,
		element: <ListComponent />
	},
	{
		path: ROUTER_TRAVELO.download,
		element: <Download />
	},
	{
		path: ROUTER_TRAVELO.home_page,
		element: <HomePage />
	},
	{
		path: ROUTER_TRAVELO.login,
		element: <Login />
	},
	{
		path: ROUTER_TRAVELO.email_reset_password,
		element: <EmailResetPassword />
	},
	{
		path: ROUTER_TRAVELO.email_notification_reset_password,
		element: <EmailNotifycationResetPassword />
	},
	{
		path: ROUTER_TRAVELO.reset_password,
		element: <ResetPassword />
	},
]
