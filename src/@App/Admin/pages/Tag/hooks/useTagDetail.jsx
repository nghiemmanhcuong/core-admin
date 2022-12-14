import { missionService } from '@App/Admin/services/missionService'
import { tagSerivce } from '@App/Admin/services/tagService'
import { errorMsg } from '@Core/helper/Message'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const useTagDetail = props => {
	const { id, type } = useParams()
	const isEdit = id !== 'new'

	const requestTag = useRequest(tagSerivce.getDetailTag, {
		manual: true,
		onError: res => {
			errorMsg('Get detail failed!!!')
		}
	})

	const { data: tag, run: getTag, loading: loadingTag } = requestTag

	useEffect(() => {
		if (isEdit) {
			getTag(id, { id, type })
		}
	}, [])

	return { isEdit, tag: tag?.tag, loadingTag, id }
}
