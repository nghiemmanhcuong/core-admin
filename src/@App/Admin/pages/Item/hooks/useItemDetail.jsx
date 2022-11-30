/*
 * Created Date: 30-11-2022, 10:38:02 pm
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

import { itemService } from '@App/Admin/services/itemService'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const useItemDetail = props => {
	const { id } = useParams()
	const isEdit = id !== 'new'

	const requestItem = useRequest(itemService.find, {
		manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
	})

	const { data: item, run: getItem, loading: loadingItem } = requestItem

	useEffect(() => {
		if (isEdit) {
			getItem(id)
		}
	}, [])

	return { isEdit, item: item?.exchange_ticket, loadingItem, id }
}
