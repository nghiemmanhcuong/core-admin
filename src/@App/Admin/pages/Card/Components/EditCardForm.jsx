/*
 * Created Date: 14-11-2022, 10:58:18 pm
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

import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { cardService } from '@App/Admin/services/cardService'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const EditCardForm = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.card)
	const { cardData, isEdit } = useAdminPageContext()
	const navigate = useNavigate()

	const {
		control,
		watch,
		formState: { isSubmitting, isDirty },
		handleSubmit
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: cardData?.id ?? '',
			name: cardData?.name ?? '',
			app_currency_id: cardData?.app_currency_id ?? null,
			image: ''
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required().min(3),
				app_currency_id: Yup.number().nullable().required(),
				image: Yup.string().required().min(1)
			})
		)
	})

	const onSubmit = handleSubmit(async data => {
		try {
			const newData = {
				...data,
				image: data?.image?.name
			}

			await cardService.save(newData)
			navigate(ROUTER_ADMIN.card.list)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
		} catch (error) {
			errorMsg(error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="max-w-lg mx-8 sm:mx-auto">
				<AdminInput
					control={control}
					name="id"
					label={'?????????ID'}
					placeholder="?????????????????????"
					size="small"
					readOnly
					classNameField="bg-grey-300"
					className="mb-16 sm:mb-20"
				/>

				<AdminInput
					control={control}
					label={'???????????????'}
					name="name"
					placeholder="?????????????????????"
					className="mb-16 sm:mb-20"
					size="small"
					required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography
							variant="h3"
							color="primary"
							className="self-center flex items-center w-full py-10 sm:py-0"
						>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">??????</Typography>{' '}
							???????????????
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 sm:flex">
						<CoreAutocomplete
							control={control}
							size="small"
							name="app_currency_id"
							fullWidth
							variant="outlined"
							returnValueType="enum"
							placeholder="????????????"
							className="w-full"
							options={[
								{
									value: 1,
									label: 'Travelo??????????????????'
								},
								{
									value: 2,
									label: '?????????qqllqqllqqll'
								},
								{
									value: 3,
									label: '?????????3'
								},
								{
									value: 4,
									label: '??????????????????????????????????????????????????????????????????????????????????????????'
								},
								{
									value: 5,
									label: '??????????????????'
								},
								{
									value: 6,
									label: '?????????????????????????????????????????????'
								},
								{
									value: 7,
									label: '?????????coin'
								},
								{
									value: 8,
									label: '???????????????'
								},
								{
									value: 9,
									label: '????????????'
								},
								{
									value: 10,
									label: '?????????bitCoin'
								},
								{
									value: 11,
									label: '???????????????????????????'
								},
								{
									value: 12,
									label: '????????????????????????'
								}
							]}
						/>
					</Box>
				</Box>

				<AdminInputUpload
					label={'???????????????'}
					control={control}
					name="image"
					size="small"
					className="w-full sm:w-2/3 mb-16 sm:mb-20"
					helperText
					required
				/>

				<Box className="text-right">
					<Button
						variant="contained"
						color="error"
						onClick={() => navigate(ROUTER_ADMIN.card.list)}
						className="ml-auto"
					>
						{t('common:btn.delete')}
					</Button>
					<LoadingButton type="submit" variant="contained" color="primary" className="ml-[10px] bg-blue">
						{t('common:btn.new')}
					</LoadingButton>
				</Box>
			</Box>
		</form>
	)
}

// EditCardForm.defaultProps = {}

// EditCardForm.propTypes = {}

export default React.memo(EditCardForm)
