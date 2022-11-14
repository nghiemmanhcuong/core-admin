/*
 * Created Date: 11-10-2022, 12:21:48 am
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

const basePath = '/admin'

export const TRANSLATE_ADMIN = {
	spot: basePath + '/spot',
	course: basePath + '/course',
	user: basePath + '/user',
	tag: basePath + '/tag',
	surrounding: basePath + '/surrounding',
	mission: basePath + '/mission',
	notification: basePath + '/notification',
	item: basePath + '/item',
	maintaince: basePath + '/maintaince',
	event: basePath + '/event',
	account: basePath + '/account',
	currency: basePath + '/currency',
	card: basePath + '/card'
}

export const ROUTER_ADMIN = {
	auth: {
		login: basePath + '/login'
	},
	event: {
		list: basePath + '/event',
		detail: basePath + '/event/:id'
	},
	spot: {
		list: basePath + '/spot',
		edit: basePath + '/spot/:id'
	},
	course: basePath + '/course',
	courseDetail: basePath + '/course/:id',
	user: {
		list: basePath + '/users',
		edit: basePath + '/users/detail'
	},
	currency: {
		list: basePath + '/currency',
		edit: basePath + '/currency/:id'
	},
	tag: {
		list: basePath + '/tags',
		detail: basePath + '/tags/:id'
	},
	surrounding: {
		list: basePath + '/surrounding',
		edit: basePath + '/surrounding/:id'
	},
	mission: {
		list: basePath + '/mission',
		detail: basePath + '/mission/:id'
	},
	notification: {
		list: basePath + '/notifications',
		edit: basePath + '/notifications/:id'
	},
	item: {
		list: basePath + '/items',
		edit: basePath + '/items/:id'
	},
	maintaince: {
		list: basePath + '/maintaince',
		config: basePath + '/maintaince/config'
	},
	homePage: basePath + '/home-page',
	card: {
		list: basePath + '/card',
		edit: basePath + '/card/:id'
	},
	account: {
		list: basePath + '/account',
		edit: basePath + '/account/:id'
	},
	performance: {
		list: basePath + '/performance',
		edit: basePath + '/performance/:id'
	}
}
