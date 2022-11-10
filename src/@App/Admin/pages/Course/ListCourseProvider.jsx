import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { courseService } from '@App/Admin/services/courseService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ListCourseProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	const requestCourses = useRequest(courseService.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})

	const { run: getCourses } = requestCourses

	const courseTableHandler = useCoreTable(requestCourses)

	useEffect(() => {
		// courseTableHandler.handleFetchData()
		getCourses()
	}, [])

	const data = {
		courseTableHandler,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListCourseProvider)
