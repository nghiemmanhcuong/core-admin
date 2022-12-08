import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'

class Auth extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/login'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(eventFactory)
		// this.setMockAdapter()
	}

    csrf = params => {
        const endpoint = '/api/resource/sanctum/csrf-cookie'
        return this.request.get(endpoint, {params})
    }

	login = (data) => {
		const endpoint = '/api/resource/login'
		return this.request.post(endpoint, data)
	}
	
	logout = (data) => {
		const endpoint = '/api/resource/logout'
		return this.request.post(endpoint)

	}
}

export const authService = new Auth()
