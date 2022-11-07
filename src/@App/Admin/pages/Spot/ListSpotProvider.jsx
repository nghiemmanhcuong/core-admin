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
		}
	})

	const { run: getSpots } = requestSpots

	const { runAsync: handleDeleteSpot } = useRequest(spotSerivce.delete, {
		manual: true,
		onSuccess: res => {
			successMsg('Deleted successfully')
			spotTableHandler.handleFetchData()
		},
		onError: res => {
			errorMsg('Deleted failed')
		}
	})

	const spotTableHandler = useCoreTable(requestSpots)

	useEffect(() => {
		// spotTableHandler.handleFetchData()
		getSpots()
	}, [])

	const data = {
		spotTableHandler,
		handleDeleteSpot,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListSpotProvider)
