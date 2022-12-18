import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { currencyService } from '@App/Admin/services/currencyService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ListCurrencyProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.currency)
	const requestCurrency = useRequest(currencyService.list, {
		manual: true,
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

	const { runAsync: handleDeleteCurrency } = useRequest(currencyService.delete, {
		manual: true,
		onSuccess: res => {
			currencyTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const { run: getCurrency, mutate } = requestCurrency

	const currencyTableHandler = useCoreTable(requestCurrency)

	useEffect(() => {
		// currencyTableHandler.handleFetchData()
		getCurrency()
	}, [])

	const data = {
		...props,
		currencyTableHandler,
		handleDeleteCurrency
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

export default React.memo(ListCurrencyProvider)
