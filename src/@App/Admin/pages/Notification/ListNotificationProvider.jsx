/*
 * Created Date: 21-10-2022, 10:23:27 pm
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

import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { notificationService } from '@App/Admin/services/notificationService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListNotificationProvider = props => {
	const requestNotifications = useRequest(notificationService.list, {
		manual: true
	})

	const { run: getNotifications } = requestNotifications

	const notificationTableHandler = useCoreTable(requestNotifications)

	const { runAsync: handleDeleteNotification } = useRequest(notificationService.delete, {
		manual: true,
		onSuccess: res => {
			successMsg('Deleted successfully')
			notificationTableHandler.handleFetchData()
		},
		onError: err => {
			errorMsg('Delete failed')
		}
	})

	useEffect(() => {
		// notificationTableHandler.handleFetchData()
		getNotifications()
	}, [])

	const data = {
		notificationTableHandler,
		handleDeleteNotification,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

// ListNotificationProvider.defaultProps = {}

// ListNotificationProvider.propTypes = {}

export default React.memo(ListNotificationProvider)
