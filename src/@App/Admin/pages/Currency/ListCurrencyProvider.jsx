import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { currencyService } from '@App/Admin/services/currencyService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListCurrencyProvider = props => {
	const requestCurrency = useRequest(currencyService.list, {
		manual: true
	})

	const currencyTableHandler = useCoreTable(requestCurrency)

	useEffect(() => {
		currencyTableHandler.handleFetchData()
	}, [])

	const data = {
		currencyTableHandler,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}


export default React.memo(ListCurrencyProvider)