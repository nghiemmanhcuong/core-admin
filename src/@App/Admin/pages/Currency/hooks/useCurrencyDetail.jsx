/*
 * Created Date: 29-11-2022, 10:32:00 pm
 * Author: Hai Tran
 * Email: you@you.you
 * -----
 * Last Modified: Tue Nov 29 2022
 * Modified By: Hai Tran
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { currencyService } from '@App/Admin/services/currencyService'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const useCurrencyDetail = props => {
	const { id } = useParams()
	const isEdit = id !== 'new'

	const requestCurrency = useRequest(currencyService.find, {
		manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
	})

	const { data: currency, run: getCurrency, loading: loadingCurrency } = requestCurrency

	useEffect(() => {
		if (isEdit) {
			getCurrency(id)
		}
	}, [])

	return { isEdit, currency: currency?.app_currency, loadingCurrency, id }
}
