import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'
import { currencyFactory } from './factory/currencyFactory'

class Currency extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/appCurrency'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(currencyFactory)
		// this.setMockAdapter()
	}

	updateCurrency = (data = {}, id) => {
		const api = `${this.BASE_ENDPOINT}/${id}`
		return this.request.post(api, data)
	}
}

export const currencyService = new Currency()
