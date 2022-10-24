/*
 * Created Date: 25-10-2022, 12:43:13 am
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { accountSerivce } from '@App/Admin/services/accountService'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import PropTypes from 'prop-types'

export const useAccountDetail = (props) => {
    const {id} = useParams()
    const isEdit = id !== 'new'
    const requestAccount = useRequest(accountSerivce.find, {
        manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
    })

    const {data: account, run: getAccount, loading: loadingAccount} = requestAccount

    useEffect(() => {
        if (isEdit) {
            getAccount(id)
        }
    }, [])

 return {isEdit, account: account?.account, loadingAccount}
}

