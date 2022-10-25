/*
 * Created Date: 21-10-2022, 10:22:51 pm
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
import EditNotification from './Components/EditNotification'
import ListNotificationProvider from './ListNotificationProvider'
// import PropTypes from 'prop-types'

const DetailNotification = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.notification)
	const navigate = useNavigate()

	return (
		<ListNotificationProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.detail_notification')}
				// headerAction={
				// 	<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.notification.list)}>
				// 		{t('common:btn.back')}
				// 	</Button>
				// }
				content={<EditNotification />}
			/>
		</ListNotificationProvider>
	)
}

// DetailNotification.defaultProps = {}

// DetailNotification.propTypes = {}

export default React.memo(DetailNotification)
