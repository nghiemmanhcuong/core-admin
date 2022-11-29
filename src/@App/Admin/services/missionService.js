/*
 * Created Date: 12-10-2022, 3:09:00 pm
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

import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'
import { missionFactory } from './factory/missionFactory'

class Mission extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/mission'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(missionFactory)
		// this.setMockAdapter()
	}

	updateMission = (data = {}, id) => {
		const api = `${this.BASE_ENDPOINT}/${id}`
		return this.request.post(api, data)
	}
}

export const missionService = new Mission()
