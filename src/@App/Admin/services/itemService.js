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

import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'
import { itemFactory } from './factory/itemFactory'

class Item extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/exchangeTicket'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(itemFactory)
		// this.setMockAdapter()
	}

	updateItem = (data = {}, id) => {
		const api = `${this.BASE_ENDPOINT}/${id}`
		return this.request.post(api, data)
	}
}

export const itemService = new Item()
