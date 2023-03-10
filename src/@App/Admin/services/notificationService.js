/*
 * Created Date: 21-10-2022, 10:27:26 pm
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
import { notificationFactory } from './factory/notificationFactory'

class Notification extends BaseService {
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '../api/resource/information'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(notificationFactory)
		// this.setMockAdapter()
	}

	detail = id => {
		const api = `${this.BASE_ENDPOINT}/${id}`
		return this.request.get(api)
	}
}

export const notificationService = new Notification()
