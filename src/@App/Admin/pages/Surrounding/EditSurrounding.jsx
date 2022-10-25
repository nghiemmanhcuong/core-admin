/*
 * Created Date: 25-10-2022, 10:02:42 pm
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
import EditSurroundingForm from './Components/EditSurroundingForm'
import ListSurroundingProvider from './ListSurroundingProvider'
// import PropTypes from 'prop-types'

const EditSurrounding = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.surrounding)
	const navigate = useNavigate()
	const location = useLocation()
	const { id } = useParams()
	const isEdit = id !== 'new'

	return (
		<ListSurroundingProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.edit_surrounding')}
				headerAction={
					<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.surrounding.list)}>
						{t('common:btn.back')}
					</Button>
				}
				content={<EditSurroundingForm isEdit={isEdit} surroundingInfo={location?.state} />}
			/>
		</ListSurroundingProvider>
	)
}

// EditSurrounding.defaultProps = {}

// EditSurrounding.propTypes = {}

export default React.memo(EditSurrounding)
