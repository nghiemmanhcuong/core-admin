import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { eventService } from '@App/Admin/services/eventService'
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
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { runAsync: handleDeleteEvent } = useRequest(eventService.delete, {
		manual: true,
		onSuccess: res => {
			eventTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const { run: getEvents } = requestEvents
	const eventTableHandler = useCoreTable(requestEvents)

	useEffect(() => {
		// eventTableHandler.handleFetchData()
		getEvents()
	}, [])

	const data = {
		eventTableHandler,
		handleDeleteEvent,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListEventProvider)
