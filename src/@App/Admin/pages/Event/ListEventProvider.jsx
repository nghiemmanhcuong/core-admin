import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { courseService } from '@App/Admin/services/courseService'
import { eventEntryService } from '@App/Admin/services/eventEntryService'
import { eventService } from '@App/Admin/services/eventService'
import { tagSerivce } from '@App/Admin/services/tagService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ListEventProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.event)
	const requestEvents = useRequest(eventService.list, {
		manual: true,
		onError: (res, params) => {
			if (params) {
				requestEvents.mutate({
					data: []
				})
			} else {
				errorMsg(res?.response?.data?.error_message)
			}
		}
	})

	const { runAsync: handleDeleteEvent } = useRequest(eventService.delete, {
		manual: true,
		onSuccess: res => {
			eventTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { data: tags, run: getTags } = useRequest(tagSerivce.list, {
		manual: true,
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { data: courses, run: getCourses } = useRequest(courseService.list, {
		manual: true,
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const {
		data: courseDetail,
		run: getCourseDetail,
		loading: loadingCourseDetail
	} = useRequest(courseService.find, {
		manual: true,
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { run: getEvents } = requestEvents
	const eventTableHandler = useCoreTable(requestEvents)

	useEffect(() => {
		// eventTableHandler.handleFetchData()
		getEvents()
		getTags({ per_page: 1000, display: [1], type: 'event' })
		getCourses({ per_page: 1000 })
	}, [])

	const data = {
		eventTableHandler,
		handleDeleteEvent,
		tags,
		courses,
		courseDetail,
		getCourseDetail,
		loadingCourseDetail,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListEventProvider)
