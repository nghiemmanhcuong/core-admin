/*
 * Created Date: 18-12-2022, 3:43:11 pm
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
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { eventEntryService } from '@App/Admin/services/eventEntryService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const EventEntryProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.event)
	const requestEventEntry = useRequest(eventEntryService.list, {
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

	const { runAsync: handleDeleteEventEntry } = useRequest(eventEntryService.delete, {
		manual: true,
		onSuccess: res => {
			eventEntryTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	const { run: getEventEntry, mutate } = requestEventEntry
	const eventEntryTableHandler = useCoreTable(requestEventEntry)

	useEffect(() => {
		// eventEntryTableHandler.handleFetchData()
		getEventEntry()
	}, [])

	const data = {
		eventEntryTableHandler,
		handleDeleteEventEntry,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

// EventEntryProvider.defaultProps = {}

// EventEntryProvider.propTypes = {}

export default React.memo(EventEntryProvider)
