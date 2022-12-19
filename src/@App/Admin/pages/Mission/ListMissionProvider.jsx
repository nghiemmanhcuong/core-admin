/*
 * Created Date: 12-10-2022, 3:17:29 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
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
import { currencyService } from '@App/Admin/services/currencyService'
import { missionService } from '@App/Admin/services/missionService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListMissionProvider = props => {
	const requestMissions = useRequest(missionService.list, {
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
	const { data: currencies, run: fetchCurrencies } = useRequest(currencyService.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})

	const { runAsync: handleDeleteMission } = useRequest(missionService.delete, {
		manual: true,
		onSuccess: res => {
			missionTableHandler.handleFetchData()
			// getMissions()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const { run: getMissions, mutate } = requestMissions

	const missionTableHandler = useCoreTable(requestMissions)

	useEffect(() => {
		// missionTableHandler.handleFetchData()
		getMissions()
		fetchCurrencies({ per_page: 1000 })
	}, [])

	const data = {
		...props,
		missionTableHandler,
		handleDeleteMission,
		currencies
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListMissionProvider)
