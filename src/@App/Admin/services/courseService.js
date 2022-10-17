import BaseService from '@Core/api/BaseService'
import { courseFactory } from './factory/courseFactory'

class Course extends BaseService {
	BASE_URL = '/'

	BASE_ENDPOINT = '/api/v1/admin/spot'

	constructor(params) {
		super(params)
		this.setRequest()
		this.createFactory(courseFactory)
		this.setMockAdapter()
	}
}

export const courseService = new Course()
