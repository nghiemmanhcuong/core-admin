/*
 * Created Date: 14-11-2022, 9:43:51 pm
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

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CardProvider from './CardProvider'
import EditCardForm from './Components/EditCardForm'
// import PropTypes from 'prop-types'

const EditCard = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.card)
	const location = useLocation()
	const { id } = useParams()
	const isEdit = id !== 'new'

	return (
		<CardProvider t={t} cardData={location?.state} isEdit={isEdit}>
			<AdminContentPage
				pageTitle={t('title.item_detail')}
				content={<EditCardForm />}
			/>
		</CardProvider>
	)
}

// EditCard.defaultProps = {}

// EditCard.propTypes = {}

export default React.memo(EditCard)
