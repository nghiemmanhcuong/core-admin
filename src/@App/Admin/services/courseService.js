import { env } from '@App/env'
import BaseService from '@Core/api/BaseService'
import { courseFactory } from './factory/courseFactory'

class Course extends BaseService {
	BASE_URL = env.CMS_BASE_URL

	BASE_ENDPOINT = '/api/resource/course'

	constructor(params) {
		super(params)
		this.setRequest()
		// this.createFactory(courseFactory)
		// this.setMockAdapter()
	}

	updateCourse = (data = {}, id) => {
		const api = `${this.BASE_ENDPOINT}/${id}`
		return this.request.post(api, data)
	}
}

export const courseService = new Course()
