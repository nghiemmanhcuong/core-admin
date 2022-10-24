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

import BaseService from '@Core/api/BaseService'
import { spotFactory } from './factory/spotFactory'

class Spot extends BaseService {
	BASE_URL = '/'

	BASE_ENDPOINT = '/api/resource/spot'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(spotFactory)
		// this.setMockAdapter()
	}
}

export const spotSerivce = new Spot()
