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
	course: basePath + '/course'
}

export const ROUTER_ADMIN = {
	event: basePath + '/event',
	spot: {
		list: basePath + '/spot',
		edit: basePath + '/spot/:id'
	},
	course: basePath + '/course',
	courseDetail: basePath + '/course-detail'
}
