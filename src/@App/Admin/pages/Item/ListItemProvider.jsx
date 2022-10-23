/*
 * Created Date: 22-10-2022, 9:52:04 pm
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
import { itemService } from '@App/Admin/services/itemService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListItemProvider = props => {
	const requestItems = useRequest(itemService.list, {
		manual: true
	})

	const itemTableHandler = useCoreTable(requestItems)

	const { runAsync: handleDeleteItem } = useRequest(itemService.delete, {
		manual: true,
		onSuccess: res => {
			successMsg('Deleted successfully')
			itemTableHandler.handleFetchData()
		},
		onError: err => {
			errorMsg('Delete failed')
		}
	})

	useEffect(() => {
		itemTableHandler.handleFetchData()
	}, [])

	const data = {
		itemTableHandler,
		handleDeleteItem,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

// ListItemProvider.defaultProps = {}

// ListItemProvider.propTypes = {}

export default React.memo(ListItemProvider)
