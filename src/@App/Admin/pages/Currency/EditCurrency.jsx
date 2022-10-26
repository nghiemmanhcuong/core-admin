/*
 * Created Date: 26-10-2022, 11:39:58 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Wed Oct 26 2022
 * Modified By: use
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import DetailCurrency from './DetailCurrency'
import ListCurrencyProvider from './ListCurrencyProvider'
// import PropTypes from 'prop-types'

const EditCurrency = (props) => {
    const { t } = useTranslation(TRANSLATE_ADMIN.currency)
	const navigate = useNavigate()

	return (
		<ListCurrencyProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.currency_detail')}
				headerAction={
					<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.currency.list)}>
						{t('common:btn.back')}
					</Button>
				}
				content={<DetailCurrency />}
			/>
		</ListCurrencyProvider>
	)
}

// EditCurrency.defaultProps = {}

// EditCurrency.propTypes = {}

export default React.memo(EditCurrency)