/*
 * Created Date: 06-11-2022, 11:36:37 pm
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

import { accountSerivce } from '@App/Admin/services/accountService'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { useBoolean, useRequest } from 'ahooks'
import { useCallback } from 'react'
import DetailAccountDialog from '../components/DetailAccountDialog'

export const useDetailAccountDialog = props => {
	const [open, { setTrue, setFalse }] = useBoolean(false)

	const requestDetailAccount = useRequest(accountSerivce.find, {
		manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
	})

	const { data: account, run: getAccount, loading: loadingAccount } = requestDetailAccount

	const handleOpenDetailAccount = id => {
		getAccount(id)
		setTrue()
	}

	const handleCloseDetailAccount = () => {
		setFalse()
	}

	const renderDetailAccountDialog = useCallback(() => {
		return (
			<DetailAccountDialog
				open={open}
				handleCloseDetailAccount={handleCloseDetailAccount}
				accountData={account?.account}
				loadingAccount={loadingAccount}
			/>
		)
	}, [open, account])

	return {
		handleOpenDetailAccount,
		renderDetailAccountDialog
	}
}
