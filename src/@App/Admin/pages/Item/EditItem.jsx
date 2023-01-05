/*
 * Created Date: 22-10-2022, 9:50:55 pm
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
import { Box, Button, CircularProgress } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import EditItemForm from './Components/EditItemForm'
import { useItemDetail } from './hooks/useItemDetail'
import ListItemProvider from './ListItemProvider'
// import PropTypes from 'prop-types'

const EditItem = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.item)
	const { isEdit, item, loadingItem, id } = useItemDetail()

	return (
		<ListItemProvider t={t} isEdit={isEdit}>
			<AdminContentPage
				pageTitle={t('title.item_detail')}
				content={
					loadingItem ? (
						<Box className="text-center mt-40">
							<CircularProgress />
						</Box>
					) : (
						<EditItemForm itemData={item} itemId={id} />
					)
				}
			/>
		</ListItemProvider>
	)
}

// EditItem.defaultProps = {}

// EditItem.propTypes = {}

export default React.memo(EditItem)
