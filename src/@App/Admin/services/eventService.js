import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'
import { eventFactory } from './factory/eventFactory'

class Event extends BaseService {
	// BASE_URL = '/'
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '../api/resource/event'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(eventFactory)
		// this.setMockAdapter()
	}

	getEventReview = params => {
		const endpoint = '../api/resource/event/review'
		return this.request.get(endpoint, { params })
	}

	deleteEventReview = id => {
		const endpoint = `../api/resource/event/review/${id}`
		return this.request.delete(endpoint)
	}

	detailEvent = id => {
		const endpoint = `../api/resource/event/${id}`
		return this.request.get(endpoint)
	}
}

export const eventService = new Event()
