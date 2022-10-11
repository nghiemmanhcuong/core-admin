/*
 * Created Date: 12-08-2022, 10:26:57 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import Axios from 'axios'
import { pickBy } from 'lodash'
import Qs from 'qs'
export const createInstance = (baseUrl = null, middleware = () => {}) => {
	const options = {
		baseURL: baseUrl,
		timeout: 30000,
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		},
		withCredentials: true,
		paramsSerializer(params) {
			params = pickBy(params, val => {
				return val !== null && val !== '' && val !== 'undefined'
			})
			return Qs.stringify(params)
		}
	}

	const instance = Axios.create(options)

	instance.interceptors.request.use(
		async requestConfig => {
			await Promise.all(middleware(requestConfig))
			return requestConfig
		},
		requestError => {
			// console.log(requestError)
			return Promise.reject(requestError)
		}
	)

	// Add a response interceptor
	instance.interceptors.response.use(
		response => {
			const { data } = response
			if (data.errors) {
				// hideLoadingPage()
				return Promise.reject(data)
			}
			if (data.error_msg) {
				// hideLoadingPage()
				return Promise.reject(data)
			}
			if (data?.data && !data?.total && !data?.current_page) {
				return data?.data
			}
			return data
		},
		error => {
			// hideLoadingPage()
			return Promise.reject(error)
		}
	)
	return instance
}
