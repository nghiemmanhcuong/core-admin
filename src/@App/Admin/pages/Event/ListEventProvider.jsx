import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { eventService } from '@App/Admin/services/eventService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListEventProvider = props => {
	const requestEvents = useRequest(eventService.list, {
		manual: true
	})

	const eventTableHandler = useCoreTable(requestEvents)

	useEffect(() => {
		eventTableHandler.handleFetchData()
	}, [])

	const data = {
		eventTableHandler,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}


export default React.memo(ListEventProvider)