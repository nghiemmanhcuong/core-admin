/*
 * Created Date: 18-12-2022, 3:44:09 pm
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

class EventEntry extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/eventEntry'

	constructor(params) {
		super(params)
		this.setRequest()
	}
}

export const eventEntryService = new EventEntry()
