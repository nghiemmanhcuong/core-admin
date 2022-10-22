/*
 * Created Date: 22-10-2022, 10:22:59 pm
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

import BaseService from '@Core/api/BaseService'
import { itemFactory } from './factory/itemFactory'

class Item extends BaseService {
	BASE_URL = '/'

	BASE_ENDPOINT = '/api/v1/admin/items'

	constructor(params) {
		super(params)
		this.setRequest()
		this.createFactory(itemFactory)
		this.setMockAdapter()
	}
}

export const itemService = new Item()
