/*
 * Created Date: 21-10-2022, 10:26:49 pm
 * Author: Hai Tran
 * Email: you@you.you
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

import BaseFactory from '@Core/api/Factory'

export const notificationFactory = new BaseFactory()
	.setFactoryModel({
		id: i => {
			return i
		},
		title: i => {
			return `Notification ${i}`
		},
		type: i => {
			return `Type ${i}`
		},
		from_date: i => {
			return `From ${i}`
		},
		to_date: i => {
			return `To ${i}`
		}
	})
	.makeData(20)
