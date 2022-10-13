/*
 * Created Date: 12-10-2022, 3:11:07 pm
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

import BaseFactory from '@Core/api/Factory'

export const spotFactory = new BaseFactory()
	.setFactoryModel({
		id: i => {
			return i
		},
		name: i => {
			return `Spot ${i}`
		},
		code: i => {
			return 'Code ' + i
		},
		address: i => {
			return 'Address ' + i
		},
		phone: i => {
			return 'Phone-' + i
		},
		point: i => {
			return 'Point ' + i
		}
	})
	.makeData(20)
