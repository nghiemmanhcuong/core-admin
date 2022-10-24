import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { eventService } from '@App/Admin/services/eventService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListEventProvider = props => {
	const requestEvents = useRequest(eventService.list, {
		manual: true,
		onError: res => {
			errorMsg('Get list failed!!!')
		}
	})

	const { runAsync: handleDeleteEvent } = useRequest(eventService.delete, {
		manual: true,
		onSuccess: res => {
			eventTableHandler.handleFetchData()
			successMsg('Deleted successfully!!!')
		},
		onError: res => {
			errorMsg('Deleted failed!!!')
		}
	})

	const eventTableHandler = useCoreTable(requestEvents)

	useEffect(() => {
		eventTableHandler.handleFetchData()
	}, [])

	const data = {
		eventTableHandler,
		handleDeleteEvent,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListEventProvider)
