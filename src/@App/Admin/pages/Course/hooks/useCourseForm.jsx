/*
 * Created Date: 14-12-2022, 2:16:53 pm
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

import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { courseService } from '@App/Admin/services/courseService'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useUpdateEffect } from 'ahooks'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const useCourseForm = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)

	const { courseData, isEdit, courseId } = props

	console.log('============= courseData', courseData)

	const methodForm = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: courseData?.course_id ?? null,
			course_name: courseData?.course_name ?? '',
			catchphrase: courseData?.catchphrase ?? '',
			course_summary: courseData?.course_summary ?? '',
			course_image: courseData?.course_image ?? '',
			course_distance: courseData?.course_distance ?? null,
			average_gradient: courseData?.average_gradient ?? null,
			elevation: courseData?.elevation ?? null,
			// strength: 3,
			goal_approximate_time: null,
			route_url: courseData?.route_url ?? '',
			course_map_image: '',
			route_file: courseData?.route_file ?? '',
			elevation_chart_url: courseData?.elevation_chart_url ?? '',
			course_tag: [1],
			author: courseData?.author ?? '',
			spot: courseData?.spot_list ?? []
		},
		resolver: yupResolver(
			Yup.object({
				course_name: Yup.string().required(),
				catchphrase: Yup.string().required(),
				course_distance: Yup.mixed().required(),
				route_file: Yup.mixed().required(),
				spot: Yup.array().min(1)
				// strength: Yup.number().min(1).max(5)
			})
		)
	})

	const onSubmit = methodForm.handleSubmit(async data => {
		try {
			if (isEdit) {
				const formData = new FormData()
				formData.append('course_name', data?.course_name)
				formData.append('catchphrase', data?.catchphrase)
				formData.append('course_summary', data?.course_summary)
				formData.append('course_image', data?.course_image)
				formData.append('course_distance', data?.course_distance)
				formData.append('average_gradient', data?.average_gradient)
				formData.append('elevation', data?.elevation)
				formData.append('goal_approximate_time', moment(data?.goal_approximate_time).format('HH:mm:ss'))
				formData.append('route_url', data?.route_url)
				formData.append('course_map_image', data?.course_map_image)
				formData.append('route_file', data?.route_file)
				formData.append('elevation_chart_url', data?.elevation_chart_url)
				formData.append('course_tag', data?.course_tag)
				formData.append('spot', data?.spot)
				formData.append('author', data?.author)
				formData.append('_method', 'PUT')

				await courseService.updateCourse(formData, courseId)
			} else {
				const formData = new FormData()
				formData.append('course_name', data?.course_name)
				formData.append('catchphrase', data?.catchphrase)
				formData.append('course_summary', data?.course_summary)
				formData.append('course_image', data?.course_image)
				formData.append('course_distance', data?.course_distance)
				formData.append('average_gradient', data?.average_gradient)
				formData.append('elevation', data?.elevation)
				formData.append('goal_approximate_time', moment(data?.goal_approximate_time).format('HH:mm:ss'))
				formData.append('route_url', data?.route_url)
				formData.append('course_map_image', data?.course_map_image)
				formData.append('route_file', data?.route_file)
				formData.append('elevation_chart_url', data?.elevation_chart_url)
				formData.append('course_tag', data?.course_tag)
				formData.append('spot', data?.spot)
				formData.append('author', data?.author)

				await courseService.save(formData)
			}

			navigate(ROUTER_ADMIN.course)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
		} catch (error) {
			errorMsg(error)
		}
	})
	// console.log('============= isEdit', isEdit)

	// useUpdateEffect(() => {
	// 	if (isEdit) {
	// 		methodForm.reset(courseData, { keepDefaultValues: true })
	// 	}
	// }, [JSON.stringify(courseData)])

	return { methodForm, onSubmit }
}
