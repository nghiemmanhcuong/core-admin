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
	surrounding: basePath + '/surrounding'
}

export const ROUTER_ADMIN = {
	auth: {
		login: basePath + '/login'
	},
	event: basePath + '/event',
	eventDetail: basePath + '/event/:id',
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
		detail: basePath + '/tags/detail'
	},
	surrounding: {
		list: basePath + '/surrounding'
	}
}
