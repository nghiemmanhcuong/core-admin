/*
 * Created Date: 14-11-2022, 9:51:51 pm
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

class Card extends BaseService {
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '../api/resource/card'

	constructor(params) {
		super(params)
		this.setRequest()
	}
}

export const cardService = new Card()
