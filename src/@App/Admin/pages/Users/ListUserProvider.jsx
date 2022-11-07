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
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListUserProvider = props => {
	const requestSpots = useRequest(spotSerivce.list, {
		manual: true
	})

	const { run: getSpots } = requestSpots

	const spotTableHandler = useCoreTable(requestSpots)

	useEffect(() => {
		// spotTableHandler.handleFetchData()
		getSpots()
	}, [])

	const data = {
		spotTableHandler,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListUserProvider)
