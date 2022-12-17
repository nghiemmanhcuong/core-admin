/*
 * Created Date: 23-10-2022, 2:37:14 pm
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

import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { eventService } from '@App/Admin/services/eventService'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const MaintainceProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)
	const { data: events, run: fetchEvents } = useRequest(eventService.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})

	useEffect(() => {
		fetchEvents()
	}, [])

	const data = {
		...props,
		events
	}
	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

// MaintainceProvider.defaultProps = {}

// MaintainceProvider.propTypes = {}

export default React.memo(MaintainceProvider)
