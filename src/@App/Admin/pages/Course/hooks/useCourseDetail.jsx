/*
 * Created Date: 14-12-2022, 12:45:47 am
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

import { courseService } from '@App/Admin/services/courseService'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const useCourseDetail = props => {
	const { id } = useParams()
	const isEdit = id !== 'new'
	const requestCourse = useRequest(courseService.find, {
		manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
	})

	const { data: course, run: getCourse, loading: loadingCourse } = requestCourse

	useEffect(() => {
		if (isEdit) {
			getCourse(id)
		}
	}, [])

	return { isEdit, course: course?.course, loadingCourse, id }
}
