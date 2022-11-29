/*
 * Created Date: 29-11-2022, 2:06:12 pm
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

import { missionService } from '@App/Admin/services/missionService'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const useMissionDetail = props => {
	const { id } = useParams()
	const isEdit = id !== 'new'

	const requestMission = useRequest(missionService.find, {
		manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
	})

	const { data: mission, run: getMission, loading: loadingMission } = requestMission

	useEffect(() => {
		if (isEdit) {
			getMission(id)
		}
	}, [])

	return { isEdit, mission: mission?.mission, loadingMission, id }
}
