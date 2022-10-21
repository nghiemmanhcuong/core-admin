import BaseService from '@Core/api/BaseService'
import { currencyFactory } from './factory/currencyFactory'

class Currency extends BaseService {
	BASE_URL = '/'

	BASE_ENDPOINT = '/api/v1/admin/currency'

	constructor(params) {
		super(params)
		this.setRequest()
		this.createFactory(currencyFactory)
		this.setMockAdapter()
	}
}

export const currencyService = new Currency()
