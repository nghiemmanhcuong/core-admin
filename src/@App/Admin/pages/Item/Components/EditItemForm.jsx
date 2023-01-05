/*
 * Created Date: 22-10-2022, 10:26:54 pm
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

import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { currencyService } from '@App/Admin/services/currencyService'
import { itemService } from '@App/Admin/services/itemService'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { errorMsg, successMsg } from '@Core/helper/Message'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Typography } from '@mui/material'
import clsx from 'clsx'
import moment from 'moment'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const EditItemForm = props => {
	const navigate = useNavigate()
	const { isEdit, t, currencies } = useAdminPageContext()
	const { itemData, itemId } = props
	const [changeImage, setChangeImage] = useState(false)

	const callbackChangeImage = childData => {
		setChangeImage(childData)
	}

	console.log(changeImage)

	const {
		control,
		handleSubmit,
		watch,
		formState: { isSubmitting, isDirty }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: itemData?.id ?? null,
			name: itemData?.name ?? '',
			app_currency_id: itemData?.app_currency_id ?? null,
			currency_of_consumption: itemData?.currency_of_consumption ?? null,
			stock: itemData?.stock ?? 0,
			image: itemData?.image ?? '',
			summary: itemData?.summary ?? '',
			available_start: itemData?.available_start ? new Date(itemData?.available_start) : '',
			available_end: itemData?.available_end ? new Date(itemData?.available_end) : '',
			exchange_method: itemData?.exchange_method ?? '',
			exchange_area: itemData?.exchange_area ?? null,
			exchange_place: itemData?.exchange_place ?? '',
			exchange_address: itemData?.exchange_address ?? '',
			exchange_place_google_map_url: itemData?.exchange_place_google_map_url ?? '',
			exchange_place_location_info_latitude: itemData?.exchange_place_location_info_latitude ?? '',
			exchange_place_location_info_longitude: itemData?.exchange_place_location_info_longitude ?? '',
			caution: itemData?.caution ?? '',
			author: itemData?.author ?? '作成者',
			display: itemData?.display ?? null
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required().trim().min(1),
				app_currency_id: Yup.number().nullable().required(),
				currency_of_consumption: Yup.number().required(),
				exchange_method: Yup.string().required(),
				exchange_place: Yup.string().required()
			})
		)
	})

	console.log('============= itemData', itemData)
	console.log('============= watch()', watch())

	const onSubmit = handleSubmit(async data => {
		try {
			const formData = new FormData()
			Object.keys(data).forEach(key => {
				if (key === 'image' && !changeImage) {
					return
				}
				if (key === 'exchange_area' && typeof data.exchange_area !== 'number') {
					return
				}
				if (data[key]) {
					if (key === 'available_start') {
						return formData.append('available_start', moment(data?.available_start).format('YYYY-MM-DD'))
					}
					if (key === 'available_end') {
						return formData.append('available_start', moment(data?.available_end).format('YYYY-MM-DD'))
					}
					if (key === 'exchange_place_location_info_latitude') {
						return formData.append(
							'exchange_place_location_info_latitude',
							`${data?.exchange_place_location_info_latitude}`
						)
					}
					if (key === 'exchange_place_location_info_longitude') {
						return formData.append(
							'exchange_place_location_info_longitude',
							`${data?.exchange_place_location_info_longitude}`
						)
					}
					return formData.append(`${key}`, data[key])
				}
			})
			if (isEdit) {
				formData.append('_method', 'PUT')
				await itemService.updateItem(formData, itemId)
			} else {
				await itemService.save(formData)
			}

			navigate(ROUTER_ADMIN.item.list)
			// successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
			successMsg(t('common:message.create_success'))
		} catch (error) {
			errorMsg(error)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
					<AdminInput
						label={t('edit.form.label.id')}
						control={control}
						name="id"
						placeholder="デフォルト入力"
						size="small"
						readOnly
						classNameField="bg-grey-300"
						className="mb-16 sm:mb-20"
					/>
					<AdminInput
						label={t('edit.form.label.name')}
						control={control}
						name="name"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
						required
					/>
					<AdminInputUpload
						label={t('edit.form.label.image')}
						parentCallback={callbackChangeImage}
						control={control}
						name="image"
						size="small"
						className="w-full sm:w-2/3 mb-16 sm:mb-20"
						helperText
					/>

					<AdminInput
						label="消費通貨量"
						control={control}
						name="currency_of_consumption"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
						required
					/>
					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								アプリ通貨
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<CoreAutocomplete
								control={control}
								name="app_currency_id"
								size="small"
								placeholder="選択する"
								options={currencies?.app_currency}
								valuePath="id"
								labelPath="name"
								returnValueType="enum"
								className="mb-16 w-full sm:mb-20"
							/>
						</Box>
					</Box>

					<AdminInput
						label="在庫数"
						control={control}
						name="stock"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					/>
					<AdminInput
						label="詳細"
						control={control}
						name="summary"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center mb-4">
								<Typography className={clsx('text-black py-4 px-16 rounded-4 w-60  mx-8', 'bg-white')}>
									{''}
								</Typography>{' '}
								{t('edit.form.label.time')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<CoreDatePicker
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="選択する"
								name="available_start"
								className="w-full"
							/>
							<Typography variant="h3" color="primary" className="mx-8 self-center">
								{t('edit.form.label.to')}
							</Typography>
							<CoreDatePicker
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="選択する"
								name="available_end"
								className="w-full"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center">
								<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
								引換方法
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<CoreAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="選択する"
								name="exchange_method"
								className="w-full sm:w-1/3"
								valuePath="id"
								labelPath="label"
								returnValueType="enum"
								options={[
									{ id: 'web', label: 'WEB引換' },
									{ id: 'store', label: '店頭引換' }
								]}
							/>
						</Box>
					</Box>
					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center mb-4">
								<Typography className={clsx('text-black py-4 px-16 rounded-4 w-60  mx-8', 'bg-white')}>
									{''}
								</Typography>{' '}
								{t('edit.form.label.area')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<CoreAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="選択する"
								name="exchange_area"
								valuePath="value"
								labelPath="label"
								className="w-full sm:w-1/3"
								options={[
									{ value: 1, label: '北海道' },
									{ value: 2, label: '青森県' },
									{ value: 3, label: '岩手県' },
									{ value: 4, label: '宮城県' },
									{ value: 5, label: '秋田県' },
									{ value: 6, label: '山形県' },
									{ value: 7, label: '福島県' },
									{ value: 8, label: '茨城県' },
									{ value: 9, label: '栃木県' },
									{ value: 10, label: '群馬県' },
									{ value: 11, label: '埼玉県' },
									{ value: 12, label: '千葉県' },
									{ value: 13, label: '東京都' },
									{ value: 14, label: '神奈川県' },
									{ value: 15, label: '新潟県' },
									{ value: 16, label: '富山県' },
									{ value: 17, label: '石川県' },
									{ value: 18, label: '福井県' },
									{ value: 19, label: '山梨県' },
									{ value: 20, label: '長野県' },
									{ value: 21, label: '岐阜県' },
									{ value: 22, label: '静岡県' },
									{ value: 23, label: '愛知県' },
									{ value: 24, label: '三重県' },
									{ value: 25, label: '滋賀県' },
									{ value: 26, label: '京都府' },
									{ value: 27, label: '大阪府' },
									{ value: 28, label: '兵庫県' },
									{ value: 29, label: '奈良県' },
									{ value: 30, label: '和歌山県' },
									{ value: 31, label: '鳥取県' },
									{ value: 32, label: '島根県' },
									{ value: 33, label: '岡山県' },
									{ value: 34, label: '広島県' },
									{ value: 35, label: '山口県' },
									{ value: 36, label: '徳島県' },
									{ value: 37, label: '香川県' },
									{ value: 38, label: '愛媛県' },
									{ value: 39, label: '高知県' },
									{ value: 40, label: '福岡県' },
									{ value: 41, label: '佐賀県' },
									{ value: 42, label: '長崎県' },
									{ value: 43, label: '熊本県' },
									{ value: 44, label: '大分県' },
									{ value: 45, label: '宮崎県' },
									{ value: 46, label: '鹿児島県' },
									{ value: 47, label: '沖縄県' }
								]}
								returnValueType="enum"
							/>
						</Box>
					</Box>

					<AdminInput
						label="引換場所"
						control={control}
						name="exchange_place"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
						required
					/>

					<AdminInput
						label={t('edit.form.label.address_location')}
						control={control}
						name="exchange_address"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					/>

					<AdminInput
						label="引換場所GoogleMapURL"
						control={control}
						name="exchange_place_google_map_url"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					// required
					/>
					<AdminInput
						label="引換場所位置情報（緯度）"
						control={control}
						name="exchange_place_location_info_latitude"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					// required
					/>
					<AdminInput
						label="引換場所位置情報（経度)"
						control={control}
						name="exchange_place_location_info_longitude"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					// required
					/>
					<AdminInput
						label="利用注意事項"
						control={control}
						name="caution"
						placeholder="デフォルト入力"
						className="mb-16 sm:mb-20"
						size="small"
					// required
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center mb-4">
								<Typography className={clsx('text-black py-4 px-16 rounded-4 w-60  mx-8', 'bg-white')}>
									{''}
								</Typography>{' '}
								{t('edit.form.label.situation')}
							</Typography>
						</Box>
						<Box className="flex w-full sm:w-2/3 pl-[15px] border-grey-400 border-1 rounded-4">
							<CoreRadioGroup
								control={control}
								name="display"
								options={[
									{ key: '0', value: 0, label: t('edit.form.check_box.label.representation') },
									{ key: '1', value: 1, label: t('edit.form.check_box.label.express') }
								]}
								row
								className="flex-row"
							/>
						</Box>
					</Box>

					<Box className="flex w-full mb-20 items-center">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className="flex items-center mb-4">
								<Typography className={clsx('text-black py-4 px-16 rounded-4 w-60  mx-8', 'bg-white')}>
									{''}
								</Typography>{' '}
								{t('edit.form.label.creator')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap">
							<AdminInput
								control={control}
								name="author"
								size="small"
								className="w-full mr-12"
								classNameField="bg-grey-300"
								readOnly
							/>
							<Button
								onClick={() => navigate(ROUTER_ADMIN.item.list)}
								variant="contained"
								color="error"
								className="mr-10 h-32"
								size="small"
							>
								削除
							</Button>
							<LoadingButton
								loading={isSubmitting}
								disabled={!isDirty}
								variant="contained"
								className="bg-blue text-white h-32"
								size="small"
								type="submit"
							>
								登録
							</LoadingButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

// EditItemForm.defaultProps = {}

// EditItemForm.propTypes = {}

export default React.memo(EditItemForm)
