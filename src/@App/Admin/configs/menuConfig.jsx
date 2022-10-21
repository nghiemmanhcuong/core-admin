/*
 * Created Date: 11-10-2022, 12:22:02 am
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

import { ROUTER_ADMIN } from './constants'

export const menuAdminConfig = [
	{
		title: 'Event',
		url: ROUTER_ADMIN.event
	},
	{
		title: 'スポット情報管理',
		url: ROUTER_ADMIN.spot.list
	},
	{
		title: 'Courses',
		url: ROUTER_ADMIN.course
	},
	{
		title: 'Users',
		url: ROUTER_ADMIN.user.list
	},
	{
		title: 'Currency',
		url: ROUTER_ADMIN.currency.list
	}
]
