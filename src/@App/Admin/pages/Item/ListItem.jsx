/*
 * Created Date: 22-10-2022, 9:50:36 pm
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
import { useNavigate } from 'react-router-dom'
import ListItemTable from './Components/ListItemTable'
import ListItemProvider from './ListItemProvider'
// import PropTypes from 'prop-types'

const ListItem = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.item)
	const navigate = useNavigate()

	return (
		<ListItemProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.item')}
				headerAction={
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate(ROUTER_ADMIN.item.list + '/new')}
					>
						{t('common:btn.new')}
					</Button>
				}
				content={<ListItemTable />}
			/>
		</ListItemProvider>
	)
}

// ListItem.defaultProps = {}

// ListItem.propTypes = {}

export default React.memo(ListItem)