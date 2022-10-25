/*
 * Created Date: 24-10-2022, 11:14:24 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: Peter
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'

class Account extends BaseService {
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/account'

	constructor(params) {
		super(params)
		this.setRequest()
	}
}

export const accountSerivce = new Account()
