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
import { tagSerivce } from '@App/Admin/services/tagService'
import { spotSerivce } from '@App/Admin/services/spotService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListSpotProvider = props => {
	const requestSpots = useRequest(spotSerivce.list, {
		manual: true,
		onSuccess: res => {
			requestSpots.mutate({ ...res, data: res?.spot ?? [] })
		},
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

	const { run: getSpots, mutate } = requestSpots

	const { runAsync: handleDeleteSpot } = useRequest(spotSerivce.delete, {
		manual: true,
		onSuccess: res => {
			successMsg(t('common:message.delete_success'))
			spotTableHandler.handleFetchData()
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const spotTableHandler = useCoreTable(requestSpots)

	const { data: tags, run: getTags } = useRequest(tagSerivce.list, {
		manual: true,
		onError: res => {
			errorMsg(res?.response?.data?.error_message)
		}
	})

	useEffect(() => {
		// spotTableHandler.handleFetchData()
		getTags({ per_page: 1000, display: [1], type: 'spot' })
		getSpots()
	}, [])

	const data = {
		spotTableHandler,
		handleDeleteSpot,
		tags,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListSpotProvider)
