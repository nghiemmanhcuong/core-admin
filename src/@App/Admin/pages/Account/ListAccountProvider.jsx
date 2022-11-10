/*
 * Created Date: 24-10-2022, 11:12:37 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Thu Nov 10 2022
 * Modified By: haitran
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { accountSerivce } from '@App/Admin/services/accountService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ListAccountProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.account)
	const requestAccounts = useRequest(accountSerivce.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})

	const { run: getAccounts } = requestAccounts

	const { runAsync: handleDeleteAccount } = useRequest(accountSerivce.delete, {
		manual: true,
		onSuccess: res => {
			accountTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const accountTableHandler = useCoreTable(requestAccounts)

	useEffect(() => {
		// accountTableHandler.handleFetchData()
		getAccounts()
	}, [])

	const data = {
		accountTableHandler,
		handleDeleteAccount,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListAccountProvider)
