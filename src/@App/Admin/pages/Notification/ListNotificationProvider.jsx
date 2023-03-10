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

import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { errorMsg, successMsg } from '@Core/helper/Message'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { notificationService } from '@App/Admin/services/notificationService'
import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'

// import PropTypes from 'prop-types'

const ListNotificationProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.notification)
	const requestNotifications = useRequest(notificationService.list, {
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

	const { run: getNotifications, mutate } = requestNotifications

	const notificationTableHandler = useCoreTable(requestNotifications)

	const { runAsync: handleDeleteNotification } = useRequest(notificationService.delete, {
		manual: true,
		onSuccess: res => {
			notificationTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: err => {
			errorMsg(t('common:message.delete_failed'))
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
