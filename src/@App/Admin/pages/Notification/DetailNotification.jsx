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
import { notificationService } from '@App/Admin/services/notificationService'
import { Button } from '@mui/material'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import EditNotification from './Components/EditNotification'
import ListNotificationProvider from './ListNotificationProvider'
// import PropTypes from 'prop-types'

const DetailNotification = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.notification)
	// const {id} = useParams()
	// const isEdit = id !== 'new'
	// const requestNotification = useRequest(notificationService.find, {
	// 	manual: true,
	// 	onError: res => {
	// 		errorMsg('Get detail failed!!!')
	// 	}
	// })
	// const {data: notification, run: getNotification, loading: loadingNotification} = requestNotification

    // useEffect(() => {
    //     if (isEdit) {
    //         getNotification(id)
    //     }
    // }, [])

	// console.log('============= notification',notification)

	return (
		<ListNotificationProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.detail_notification')}
				content={<EditNotification />}
			/>
		</ListNotificationProvider>
	)
}

// DetailNotification.defaultProps = {}

// DetailNotification.propTypes = {}

export default React.memo(DetailNotification)
