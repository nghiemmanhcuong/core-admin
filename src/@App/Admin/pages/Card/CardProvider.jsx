/*
 * Created Date: 14-11-2022, 9:46:41 pm
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
import { cardService } from '@App/Admin/services/cardService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const CardProvider = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.card)

	const requestCards = useRequest(cardService.list, {
		manual: true,
		onError: res => {
			errorMsg(t('common:message.fetch_list_failed'))
		}
	})

	const { runAsync: handleDeleteCard } = useRequest(cardService.delete, {
		manual: true,
		onSuccess: res => {
			cardTableHandler.handleFetchData()
			successMsg(t('common:message.delete_success'))
		},
		onError: res => {
			errorMsg(t('common:message.delete_failed'))
		}
	})

	const { run: getCards } = requestCards

	const cardTableHandler = useCoreTable(requestCards)

	useEffect(() => {
		getCards()
	}, [])

	const data = {
		cardTableHandler,
		handleDeleteCard,
		...props
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

// CardProvider.defaultProps = {}

// CardProvider.propTypes = {}

export default React.memo(CardProvider)
