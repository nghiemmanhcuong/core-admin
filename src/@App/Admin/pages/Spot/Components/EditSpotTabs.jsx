/*
 * Created Date: 12-10-2022, 3:36:47 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { Button, Typography } from '@mui/material'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import CoreCheckboxGroup from '@Core/components/Input/CoreCheckboxGroup'
import { LoadingButton } from '@mui/lab'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { spotSerivce } from '@App/Admin/services/spotService'

const EditSpotTabs = props => {
	const { t, spotTableHandler } = useAdminPageContext()
	const { id } = useParams()
	const isEdit = id !== 'new'
	const navigate = useNavigate()
	const location = useLocation()

	console.log('============= location', location)

	const sex = [
		{
			value: 1,
			label: t('edit.form.check_box.label.express')
		},
		{
			value: 2,
			label: t('edit.form.check_box.label.representation')
		}
	]

	const typeOptions = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
		{ value: '6', label: '6' },
		{ value: '7', label: '7' },
		{ value: '8', label: '8' },
		{ value: '9', label: '9' },
		{ value: '10', label: '10' },
		{ value: '11', label: '11' },
		{ value: '12', label: '12' }
	]

	const tagDatas = [
		{ key: '1', value: 1, label: 'タグ1' },
		{ key: '2', value: 2, label: 'タグ2' },
		{ key: '3', value: 3, label: 'タグ3' },
		{ key: '4', value: 4, label: 'タグ4' },
		{ key: '5', value: 5, label: 'タグ5' },
		{ key: '6', value: 6, label: 'タグ6' },
		{ key: '7', value: 7, label: 'タグ7' },
		{ key: '8', value: 8, label: 'タグ8' },
		{ key: '9', value: 9, label: 'タグ9' },
		{ key: '10', value: 10, label: 'タグ10' },
		{ key: '11', value: 11, label: 'タグ11' },
		{ key: '12', value: 12, label: 'タグ12' }
	]

	const specialActionsData = [
		{ key: '1', label: 'フォト' },
		{ key: '2', label: '音楽再生' },
		{ key: '3', label: 'クイズ' },
		{ key: '4', label: '特別ポイント' }
	]

	const {
		control,
		formState: { isSubmitting, isDirty },
		handleSubmit
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: location?.state?.id ?? '',
			type: location?.state?.type ?? 1,
			name: location?.state?.name ?? '',
			detail: location?.state?.detail ?? '',
			address: location?.state?.address ?? '',
			tel: location?.state?.tel ?? '',
			url: location?.state?.url ?? '',
			google_map_url: location?.state?.google_map_url ?? '',
			location_info_latitude: location?.state?.location_info_latitude ?? '',
			location_info_longitude: location?.state?.location_info_longitude ?? '',
			image: '',
			tag: location?.state?.type ?? [],
			facility: location?.state?.type ?? []
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required()
			})
		)
	})

	const onSubmit = handleSubmit(
		async data => {
			try {
				const newFacility = []
				const newTag = []

				for (const facilityKey in data?.facility) {
					if (data?.facility[facilityKey]) {
						newFacility.push(+facilityKey)
					}
				}

				for (const tagKey in data?.tag) {
					if (data?.tag[tagKey]) {
						newTag.push(+tagKey)
					}
				}

				const newData = {
					...data,
					tag: newTag,
					facility: newFacility,
					image: data?.image?.name,
					type: +data?.type
				}

				await spotSerivce.save(newData)
				navigate(ROUTER_ADMIN.spot.list)
				successMsg(isEdit ? 'Edit success' : 'Create success')
			} catch (error) {
				errorMsg(error)
			}
		},
		err => console.log('============= err', err)
	)

	return (
		<form onSubmit={onSubmit} sx={{ padding: 2 }}>
			<Box className="max-w-lg  mx-auto">
				<AdminInput
					label={t('edit.form.label.id')}
					control={control}
					name="id"
					placeholder="Default input"
					size="small"
					classNameField="bg-grey-300"
					readOnly
				/>

				<AdminInput
					label={t('edit.form.label.name')}
					control={control}
					name="name"
					placeholder="Default input"
					size="small"
					required
				/>

				{/* <AdminInput
					label={t('edit.form.label.catchphrase')}
					control={control}
					name="catchphrase"
					placeholder="Default input"
					size="small"
					required
				/> */}

				<AdminInput
					label={t('edit.form.label.description')}
					control={control}
					name="detail"
					placeholder="Default input"
					size="small"
					minRows={5}
					multiline
					required
				/>

				<AdminInputUpload
					label="スッポト画像"
					control={control}
					name="image"
					size="small"
					className="w-full sm:w-2/3"
					helperText
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.type')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup className="flex-row" control={control} name="type" options={typeOptions} row />
					</Box>
				</Box>

				{/* <AdminInput
					label={t('edit.form.label.post_code')}
					control={control}
					name="post_code"
					placeholder="Default input"
					size="small"
					required
				/> */}

				<AdminInput
					label={t('edit.form.label.address')}
					control={control}
					name="address"
					placeholder="Default input"
					size="small"
					required
				/>

				<AdminInput
					label={t('edit.form.label.phone_number')}
					control={control}
					name="tel"
					placeholder="Default input"
					size="small"
				/>

				<AdminInput
					label={t('edit.form.label.web_url')}
					control={control}
					name="url"
					placeholder="Default input"
					size="small"
				/>

				<AdminInput
					control={control}
					label={t('edit.form.label.location_info_latitude')}
					name="location_info_latitude"
					placeholder="Default input"
					size="small"
					required
				/>

				<AdminInput
					control={control}
					label={t('edit.form.label.location_info_longitude')}
					name="location_info_longitude"
					placeholder="Default input"
					size="small"
					required
				/>

				<AdminInput
					label={t('edit.form.label.google_map_url')}
					control={control}
					name="google_map_url"
					placeholder="Default input"
					size="small"
				/>

				<CoreCheckboxGroup
					control={control}
					name="tag"
					options={tagDatas}
					legendLabel={t('edit.form.label.tag')}
					row
					required
				/>

				<CoreCheckboxGroup
					control={control}
					name="facility"
					options={specialActionsData}
					legendLabel={t('edit.form.label.special_action')}
					row
					required
				/>

				{/* <Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.situation')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup
							className="flex-row"
							control={control}
							name="description"
							options={sex}
							row="true"
						/>
					</Box>
				</Box> */}

				{/* <Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.creator')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 flex flex-nowrap">
						<CoreInput control={control} name="creator" size="small" className="w-full  sm:w-4/5" />
						<Button variant="contained" color="primary" className="ml-auto">
							{t('edit.form.btn.selection')}
						</Button>
					</Box>
				</Box> */}

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Button variant="contained" color="error" className="ml-auto">
						{t('edit.form.btn.delete')}
					</Button>
					<LoadingButton
						type="submit"
						variant="contained"
						color="primary"
						loading={isSubmitting}
						disabled={!isDirty}
						className="ml-[10px]"
					>
						{t('edit.form.btn.register')}
					</LoadingButton>
				</Box>
			</Box>
		</form>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(EditSpotTabs)
