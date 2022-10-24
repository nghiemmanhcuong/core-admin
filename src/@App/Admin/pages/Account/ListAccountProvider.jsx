/*
 * Created Date: 24-10-2022, 11:12:37 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Mon Oct 24 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { accountSerivce } from '@App/Admin/services/accountService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListAccountProvider = props => {
	const requestAccounts = useRequest(accountSerivce.list, {
		manual: true,
		onError: res => {
			errorMsg('Get list failed!!!')
		}
	})

	const { runAsync: handleDeleteAccount } = useRequest(accountSerivce.delete, {
		manual: true,
		onSuccess: res => {
			accountTableHandler.handleFetchData()
			successMsg('Deleted successfully!!!')
		},
		onError: res => {
			errorMsg('Deleted failed!!!')
		}
	})

	const accountTableHandler = useCoreTable(requestAccounts)

	useEffect(() => {
		accountTableHandler.handleFetchData()
	}, [])

	const data = {
		accountTableHandler,
		handleDeleteAccount,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListAccountProvider)