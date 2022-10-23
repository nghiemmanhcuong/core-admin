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
		title: 'ユーザーリスト',
		url: ROUTER_ADMIN.user.list
	},
	{
		title: 'カード',
		url: ROUTER_ADMIN.tag.list
	},
	{
		title: '周辺情報管理',
		url: ROUTER_ADMIN.surrounding.list
	},
	{
		title: 'Currency',
		url: ROUTER_ADMIN.currency.list
	},
	{
		title: 'ミッション管理',
		url: ROUTER_ADMIN.mission.list
	},
	{
		title: 'お知らせ管理',
		url: ROUTER_ADMIN.notification.list	
	},
	{
		title: '引換アイテム管理',
		url: ROUTER_ADMIN.item.list
	},
	{
		title: 'メンテナンス管理',
		url: ROUTER_ADMIN.maintaince.list
	},
	{
		title: 'メンテナンス・コンフィグ',
		url: ROUTER_ADMIN.maintaince.config
	}
	// {
	// 	title: 'Level 1',
	// 	type: 'collapse',
	// 	children: [
	// 		{
	// 			title: 'Level 2',
	// 			url: '/level-2'
	// 		}
	// 	]
	// }
]
