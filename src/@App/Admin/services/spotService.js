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
import { spotFactory } from './factory/spotFactory'

class Spot extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '../api/resource/spot'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(spotFactory)
		// this.setMockAdapter()
	}

	csvUploadFile = async file => {
		const api = `${this.BASE_ENDPOINT}/csvUpload`
		const formData = new FormData()
		formData.append('file', file)

		return await this.request.post(api, formData, { timeout: 0 })
	}

	getSpotById = async params => {
		const api = `${this.BASE_ENDPOINT}`

		return await this.request.get(api, { params })
	}
}

export const spotSerivce = new Spot()
