import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { courseService } from '@App/Admin/services/courseService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListCourseProvider = props => {
	const requestCourses = useRequest(courseService.list, {
		manual: true,
		onError: res => {
			errorMsg('Get list failed!!!')
		}
	})

	const courseTableHandler = useCoreTable(requestCourses)

	useEffect(() => {
		courseTableHandler.handleFetchData()
	}, [])

	const data = {
		courseTableHandler,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListCourseProvider)
