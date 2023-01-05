/*
 * Created Date: 26-10-2022, 11:39:58 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Thu Dec 15 2022
 * Modified By: haitran
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import DetailCurrency from './DetailCurrency'
import { useCurrencyDetail } from './hooks/useCurrencyDetail'
import ListCurrencyProvider from './ListCurrencyProvider'
// import PropTypes from 'prop-types'

const EditCurrency = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.currency)
	const { isEdit, currency, loadingCurrency, id } = useCurrencyDetail()

	return (
		<ListCurrencyProvider t={t} isEdit={isEdit}>
			<AdminContentPage
				pageTitle={t('title.currency_detail')}
				content={
					loadingCurrency ? (
						<div className="mt-40 text-center">
							<CircularProgress />
						</div>
					) : (
						<DetailCurrency currencyId={id} currencyData={currency} />
					)
				}
			/>
		</ListCurrencyProvider>
	)
}

// EditCurrency.defaultProps = {}

// EditCurrency.propTypes = {}

export default React.memo(EditCurrency)
