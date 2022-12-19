/*
 * Created Date: 19-12-2022, 10:46:20 am
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { eventEntryService } from '@App/Admin/services/eventEntryService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'

export const useEventEntryDetail = props => {
	const { t, eventData, isEdit } = useAdminPageContext()

	const requestEventEntry = useRequest(eventEntryService.list, {
		manual: true,
		onError: (res, params) => {
			errorMsg(res?.response?.data?.error_message)
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

	const { run: getEventEntry } = requestEventEntry
	const eventEntryTableHandler = useCoreTable(requestEventEntry)

	useEffect(() => {
		eventEntryTableHandler.handleFetchData({
			event_id: eventData?.id,
			event_name: eventData?.title
		})
	}, [JSON.stringify(eventData)])

	return {
		eventEntryTableHandler,
		handleDeleteEventEntry
	}
}
