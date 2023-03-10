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

	eventCourseDetail = id => {
		const endpoint = `../api/resource/eventCourse/${id}`
		return this.request.get(endpoint)
	}

	createEventCourse = (data) => {
		const endpoint = `../api/resource/eventCourse`
		return this.request.post(endpoint, data)
	}

	updateEventCourse = (id, data) => {
		const endpoint = `../api/resource/eventCourse/${id}`
		return this.request.put(endpoint, data)
	}
}

export const eventService = new Event()
