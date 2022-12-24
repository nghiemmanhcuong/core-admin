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
import { useNavigate } from 'react-router-dom'

export const useCourseForm = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	const navigate = useNavigate()

	const { changeCourseImage, changeCourseMapImage, changeFileUpload, tableSelected, courseData, isEdit, courseId } =
		props

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
			course_map_image: courseData?.course_map_image ?? '',
			route_file: courseData?.route_file ?? '',
			elevation_chart_url: courseData?.elevation_chart_url ?? '',
			course_tag: courseData?.course_tag ?? [],
			author: courseData?.author ?? '',
			spot: courseData?.spot_list ?? []
		},
		resolver: yupResolver(
			Yup.object({
				course_name: Yup.string().required(),
				catchphrase: Yup.string().required(),
				course_distance: Yup.mixed().required(),
				route_file: Yup.string().required(),
				spot: Yup.array().min(1)
				// strength: Yup.number().min(1).max(5)
			})
		)
	})

	const onSubmit = methodForm.handleSubmit(async data => {
		try {
			const formData = new FormData()
			formData.append('course_name', data?.course_name)
			formData.append('catchphrase', data?.catchphrase)
			formData.append('course_summary', data?.course_summary)
			if (changeCourseImage) {
				formData.append('course_image', data?.course_image)
			}
			if (data.course_distance) {
				formData.append('course_distance', data?.course_distance)
			}
			if (data.average_gradient) {
				formData.append('average_gradient', data?.average_gradient)
			}
			if (data.elevation) {
				formData.append('elevation', data?.elevation)
			}
			if (data.goal_approximate_time) {
				formData.append('goal_approximate_time', moment(data.goal_approximate_time).format('HH:mm:ss'))
			}
			if (data.route_url) {
				formData.append('route_url', data?.route_url)
			}
			if (changeCourseMapImage) {
				formData.append('course_map_image', data?.course_map_image)
			}
			if (changeFileUpload && data.route_file) {
				formData.append('route_file', data?.route_file)
			}
			if (data.elevation_chart_url) {
				formData.append('elevation_chart_url', data?.elevation_chart_url)
			}
			if (data.course_tag && data.course_tag.length > 0) {
				data.course_tag.forEach(item => formData.append('course_tag[]', item))
			}
			if (data.fieldsSpot && data.fieldsSpot.length > 0) {
				data.fieldsSpot.forEach(item =>
					formData.append(
						'spot[]',
						JSON.stringify({
							course_spot_id: item?.course_spot_id,
							route_number: item?.route_number,
							spot_id: item?.spot_id,
							distance_between_next_spot: item?.distance_between_next_spot ?? 0,
							time_between_next_spot: item?.time_between_next_spot ?? 0
						})
					)
				)
			}
			formData.append('author', data?.author)

			if (isEdit) {
				formData.append('_method', 'PUT')

				await courseService.updateCourse(formData, courseId)
			} else {
				await courseService.save(formData)
			}

			navigate(ROUTER_ADMIN.course)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
		} catch (error) {
			errorMsg(error?.response?.data?.error_message)
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
