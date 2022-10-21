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
import { surroundingService } from '@App/Admin/services/surroundingService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListSurroundingProvider = props => {
	const requestSurroundings = useRequest(surroundingService.list, {
		manual: true
	})

	const surroundingTableHandler = useCoreTable(requestSurroundings)

	useEffect(() => {
		surroundingTableHandler.handleFetchData()
	}, [])

	const data = {
		surroundingTableHandler,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListSurroundingProvider)
