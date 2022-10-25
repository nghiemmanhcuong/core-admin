/*
 * Created Date: 25-10-2022, 10:04:37 pm
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

import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { surroundingService } from '@App/Admin/services/surroundingService'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useSurroundingForm = props => {
	const { isEdit, surroundingInfo } = props
	const navigate = useNavigate()

	console.log('============= surroundingInfo', surroundingInfo)
	const methodForm = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: surroundingInfo?.id ?? null,
			name: surroundingInfo?.name ?? '',
			type: '1',
			address: surroundingInfo?.address ?? '',
			location_info_latitude: surroundingInfo?.location_info_latitude ?? '',
			location_info_longitude: surroundingInfo?.location_info_longitude ?? '',
			url: surroundingInfo?.url ?? '',
			tel: surroundingInfo?.tel ?? '',
			image: ''
		}
	})

	const onSubmit = methodForm.handleSubmit(
		async data => {
			try {
				console.log('============= data', data)
				const newData = {
					...data,
					type: +data?.type,
					image: data?.image?.name,
					image_info: data?.image
				}
				console.log('============= newData', newData)

				await surroundingService.save(newData)
				navigate(ROUTER_ADMIN.surrounding.list)
				successMsg(isEdit ? 'Edit successfully' : 'Create successfully')
			} catch (error) {
				errorMsg(error)
			}
		},
		err => console.log('============= err', err)
	)

	return { methodForm, onSubmit }
}
