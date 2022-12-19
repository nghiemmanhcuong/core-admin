import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { courseService } from '@App/Admin/services/courseService'
import { spotSerivce } from '@App/Admin/services/spotService'
import { tagSerivce } from '@App/Admin/services/tagService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ListCourseProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	const requestCourses = useRequest(courseService.list, {
		manual: true,
		onError: (res, params) => {
			if (params) {
				mutate({
					data: []
				})
			} else {
				errorMsg(res?.response?.data?.error_message)
			}
		}
	})

	const { runAsync: handleDeleteCourse } = useRequest(courseService.delete, {
		manual: true,
		onSuccess: res => {
			eventTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const { data: tags, run: getTags } = useRequest(tagSerivce.list, {
		manual: true,
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { data: spots, run: getSpots } = useRequest(spotSerivce.list, {
		manual: true,
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { run: getCourses, mutate } = requestCourses
	const courseTableHandler = useCoreTable(requestCourses)

	useEffect(() => {
		// courseTableHandler.handleFetchData()
		getCourses()
		getTags({ per_page: 1000 })
		getSpots({ per_page: 1000 })
	}, [])

	const data = {
		courseTableHandler,
		handleDeleteCourse,
		tags,
		spots,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListCourseProvider)
