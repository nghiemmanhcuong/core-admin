/*
 * Created Date: 22-10-2022, 10:10:19 pm
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

export const itemFactory = new BaseFactory()
	.setFactoryModel({
		id: i => {
			return i
		},
		name: i => {
			return `Name ${i}`
		},
		unit: i => {
			return `Unit ${i}`
		},
		from_date: i => {
			return `From ${i}`
		},
		to_date: i => {
			return `To ${i}`
		},
		inventory: i => {
			return `Inventory ${i}`
		},
		area: i => {
			return `Area ${i}`
		}
	})
	.makeData(20)
