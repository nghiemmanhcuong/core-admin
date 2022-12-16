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

import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'

class Maintaince extends BaseService {
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/resource/csvDownload'

	constructor(params) {
		super(params)
		this.setRequest()
	}
}

export const maintainceService = new Maintaince()
