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
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { currencyService } from '@App/Admin/services/currencyService'
import { itemService } from '@App/Admin/services/itemService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ListItemProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.item)
	const requestItems = useRequest(itemService.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})
	const { data: currencies, run: fetchCurrencies } = useRequest(currencyService.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})

	const { run: getItems } = requestItems

	const itemTableHandler = useCoreTable(requestItems)

	const { runAsync: handleDeleteItem } = useRequest(itemService.delete, {
		manual: true,
		onSuccess: res => {
			itemTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	useEffect(() => {
		// itemTableHandler.handleFetchData()
		getItems()
		fetchCurrencies({ per_page: 99999 })
	}, [])

	const data = {
		itemTableHandler,
		handleDeleteItem,
		currencies,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

// ListItemProvider.defaultProps = {}

// ListItemProvider.propTypes = {}

export default React.memo(ListItemProvider)
