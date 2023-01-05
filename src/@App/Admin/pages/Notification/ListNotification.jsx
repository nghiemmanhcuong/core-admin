/*
 * Created Date: 21-10-2022, 10:22:39 pm
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
import { Box, Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import ListNotificationTable from './Components/ListNotificationTable'
import ListNotificationProvider from './ListNotificationProvider'
// import PropTypes from 'prop-types'

const ListNotification = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.notification)
	const navigate = useNavigate()

	return (
		<ListNotificationProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.notifications')}
				content={
					<Box>
						<ListNotificationTable />
						<Box className='my-40 mr-20 text-right'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.notification.list + '/new')}
								className='bg-blue h-32'
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</Box>
			}
			/>
		</ListNotificationProvider>
	)
}

// ListNotification.defaultProps = {}

// ListNotification.propTypes = {}

export default React.memo(ListNotification)
