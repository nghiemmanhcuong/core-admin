/*
 * Created Date: 06-11-2022, 10:09:08 am
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Sun Dec 18 2022
 * Modified By: haitran
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
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { missionService } from '@App/Admin/services/missionService'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import { useUpdateEffect } from 'ahooks'
import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const MissionForm = props => {
	const { t, missionData, isEdit, missionId, currencies } = useAdminPageContext()
	const navigate = useNavigate()
	const [changeImage, setChangeImage] = useState(false)

	const callbackFunction = childData => {
		setChangeImage(childData)
	}

	const appCurrencyConvertData = useCallback(() => {
		if (missionData?.app_currency && isEdit) {
			const appCurrency = currencies?.app_currency?.find(item => item?.name == missionData?.app_currency)
			return appCurrency?.id
		}

		return 1
	}, [missionData, currencies])

	const {
		control,
		watch,
		handleSubmit,
		setValue,
		formState: { isSubmitting, isDirty }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: missionData?.id ?? null,
			mission_name: missionData?.mission_name ?? '',
			mission_detail: missionData?.mission_detail ?? '',
			clear_type: `${missionData?.clear_type}` ?? '1',
			clear_value: missionData?.clear_value ?? null,
			mission_display: missionData?.mission_display ?? 1,
			card_name: missionData?.card_name ?? '',
			card_detail: missionData?.card_detail ?? '',
			app_currency_id: 1,
			currency: missionData?.currency ?? '',
			card_display: missionData?.card_display ?? 1,
			author: missionData?.author ?? '',
			card_image: missionData?.card_image ?? ''
		},
		resolver: yupResolver(
			Yup.object({
				mission_name: Yup.string().required(),
				mission_detail: Yup.string().required(),
				clear_type: Yup.mixed().nullable().required(),
				card_name: Yup.string().required()
				// card_detail: Yup.string().required()
				// creator_card: Yup.string().required(),
				// creator_mission: Yup.string().required(),
			})
		)
	})

	useEffect(() => {
		if (isEdit) {
			setValue('app_currency_id', appCurrencyConvertData())
		}
	}, [missionData, currencies])

	const onSubmit = handleSubmit(async data => {
		try {
			if (isEdit) {
				const formData = new FormData()
				formData.append('mission_name', data?.mission_name)
				formData.append('mission_detail', data?.mission_detail)
				formData.append('clear_type', data?.clear_type)
				formData.append('clear_value', data?.clear_value)
				formData.append('mission_display', data?.mission_display)
				formData.append('card_name', data?.card_name)
				formData.append('card_detail', data?.card_detail)
				formData.append('app_currency_id', data?.app_currency_id)
				formData.append('currency', data?.currency)
				formData.append('card_display', data?.card_display)
				if (changeImage) {
					formData.append('card_image', data?.card_image)
				}
				formData.append('author', data && data.author ? data.author : 'Mary')
				formData.append('id', missionId)
				formData.append('_method', 'PUT')

				await missionService.updateMission(formData, missionId)
			} else {
				const formData = new FormData()
				formData.append('mission_name', data?.mission_name)
				formData.append('mission_detail', data?.mission_detail)
				formData.append('clear_type', data?.clear_type)
				formData.append('clear_value', data?.clear_value)
				formData.append('mission_display', data?.mission_display)
				formData.append('card_name', data?.card_name)
				formData.append('card_detail', data?.card_detail)
				formData.append('app_currency_id', data?.app_currency_id)
				formData.append('currency', data?.currency)
				formData.append('card_display', data?.card_display)
				if (changeImage) {
					formData.append('card_image', data?.card_image)
				}
				formData.append('author', data && data.author ? data.author : 'Mary')

				await missionService.save(formData)
			}

			navigate(ROUTER_ADMIN.mission.list)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
		} catch (error) {
			errorMsg(error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					{/* <AdminInput
					label={t('edit.form.label.id')}
					control={control}
					name="id"
					placeholder="?????????????????????"
					size="small"
					classNameField="bg-grey-300"
					className="mb-16 sm:mb-20"
					readOnly
				/> */}
					<AdminInput
						label={t('edit.form.label.name')}
						control={control}
						name="mission_name"
						required
						placeholder="?????????????????????"
						className="mb-16 sm:mb-20"
						size="small"
					/>
					<AdminInput
						label={t('edit.form.label.description')}
						control={control}
						name="mission_detail"
						className="mb-16 sm:mb-20"
						minRows={5}
						multiline
						size="small"
					/>
					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">??????</Typography>
								{t('edit.form.label.clear_condition')}
							</Typography>
						</Box>
						<Box className="flex border-grey-400 border-1 rounded-4 w-full sm:w-2/3 pl-[15px]">
							<CoreRadioGroup
								control={control}
								className="my-8"
								name="clear_type"
								options={[
									{
										value: '1',
										label: (
											<Box className="flex items-center w-full">
												<Typography className="w-80">??????</Typography>
												<CoreInput
													control={control}
													name={watch('clear_type') === '1' ? 'clear_value' : ''}
													size="small"
													className="w-100 mx-20"
													disabled={watch('clear_type') !== '1'}
												/>
												<Typography className="w-80">?????????</Typography>
											</Box>
										)
									},
									{
										value: '2',
										label: (
											<Box className="flex items-center w-full">
												<Typography className="w-80">??????????????????</Typography>
												<CoreInput
													control={control}
													name={watch('clear_type') === '2' ? 'clear_value' : ''}
													size="small"
													className="w-100 mx-20"
													disabled={watch('clear_type') !== '2'}
												/>
												<Typography className="w-80">??????????????????</Typography>
											</Box>
										)
									}
								]}
							/>
						</Box>
					</Box>
					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">??????</Typography>
								{t('edit.form.label.hide/show')}
							</Typography>
						</Box>
						<Box className="flex border-grey-400 border-1 rounded-4 w-full sm:w-2/3 pl-[15px]">
							<CoreRadioGroup
								control={control}
								name="mission_display"
								options={[
									{ key: '0', value: 0, label: t('edit.form.check_box.label.representation') },
									{ key: '1', value: 1, label: t('edit.form.check_box.label.express') }
								]}
								row
								className="flex-row"
							/>
						</Box>
					</Box>

					<AdminInput
						label={t('edit.form.label.name_card')}
						control={control}
						name="card_name"
						required
						placeholder="?????????????????????"
						className="mb-16 sm:mb-20"
						size="small"
					/>
					<AdminInput
						label={t('edit.form.label.description_card')}
						control={control}
						name="card_detail"
						className="mb-16 sm:mb-20"
						minRows={5}
						multiline
						size="small"
					/>
					<AdminInputUpload
						label={t('edit.form.label.image_card')}
						parentCallback={callbackFunction}
						control={control}
						name="card_image"
						size="small"
						required
						className="w-full sm:w-2/3 mb-16 sm:mb-20"
						helperText
					/>
					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">??????</Typography>
								{t('edit.form.label.hide/show')}
							</Typography>
						</Box>
						<Box className="flex border-grey-400 border-1 rounded-4 w-full sm:w-2/3 pl-[15px]">
							<CoreRadioGroup
								control={control}
								name="card_display"
								options={[
									{ key: '0', value: 0, label: t('edit.form.check_box.label.representation') },
									{ key: '1', value: 1, label: t('edit.form.check_box.label.express') }
								]}
								row
								className="flex-row"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">??????</Typography>
								{t('edit.form.label.app_currency_id')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<CoreAutocomplete
								control={control}
								name="app_currency_id"
								size="small"
								placeholder="????????????"
								options={currencies?.app_currency}
								valuePath="id"
								labelPath="name"
								returnValueType="enum"
								className="mb-16 w-full sm:mb-20"
							/>
						</Box>
					</Box>

					<AdminInput
						label={t('edit.form.label.currency')}
						control={control}
						name="currency"
						required
						placeholder="?????????????????????"
						className="mb-16 sm:mb-20"
						size="small"
					/>
					<AdminInput
						label={t('edit.form.label.creator_mission')}
						control={control}
						name="author"
						required
						size="small"
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
						readOnly
					/>
					<Box className="text-right">
						<Button
							onClick={() => navigate(ROUTER_ADMIN.mission.list)}
							variant="contained"
							color="error"
							className="mr-10 h-32 text-13"
							size="small"
						>
							??????
						</Button>
						<LoadingButton
							loading={isSubmitting}
							disabled={!isDirty}
							variant="contained"
							className={clsx(
								"h-32 text-13 text-white",
								!isDirty ? 'bg-gray-500' : 'bg-blue'
							)}
							size="small"
							type="submit"
						>
							??????
						</LoadingButton>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

// MissionForm.defaultProps = {}

// MissionForm.propTypes = {}

export default React.memo(MissionForm)
