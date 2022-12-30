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
		title: 'ホーム',
		url: ROUTER_ADMIN.homePage
	},
	{
		title: 'イベント情報管理',
		url: ROUTER_ADMIN.event.list
	},
	{
		title: 'コース情報管理',
		url: ROUTER_ADMIN.course
	},
	{
		title: 'スポット情報管理',
		url: ROUTER_ADMIN.spot.list
	},
	{
		title: '周辺情報管理',
		url: ROUTER_ADMIN.surrounding.list
	},
	{
		title: 'ミッション管理',
		url: ROUTER_ADMIN.mission.list
	},
	// {
	// 	title: 'カード管理',
	// 	url: ROUTER_ADMIN.card.list
	// },
	{
		title: 'アプリ内通貨管理',
		url: ROUTER_ADMIN.currency.list
	},
	{
		title: '引換アイテム管理',
		url: ROUTER_ADMIN.item.list
	},
	{
		title: 'お知らせ管理',
		url: ROUTER_ADMIN.notification.list
	},
	{
		title: 'アカウント管理',
		url: ROUTER_ADMIN.account.list
	},
	// {
	// 	title: 'メンテナンス管理',
	// 	url: ROUTER_ADMIN.maintaince.list
	// },
	{
		title: 'タグ管理',
		url: ROUTER_ADMIN.tag.list
	},
	{
		title: '実績管理',
		url: ROUTER_ADMIN.performance.list
	}
	// {
	// 	title: 'ユーザーリスト',
	// 	url: ROUTER_ADMIN.user.list
	// },
	// {
	// 	title: 'メンテナンス・コンフィグ',
	// 	url: ROUTER_ADMIN.maintaince.config
	// }
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
