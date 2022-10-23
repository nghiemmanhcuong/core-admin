/*
 * Created Date: 23-10-2022, 2:35:10 pm
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

const { default: BaseService } = require('@Core/api/BaseService')

class Maintaince extends BaseService {
	BASE_URL = '/'

	BASE_ENDPOINT = '/api/v1/admin/maintaince'

	constructor(params) {
		super(params)
		this.setRequest()
	}
}

export const maintainceService = new Maintaince()
