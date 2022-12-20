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
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useEffect, useMemo, useState } from 'react'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { tagSerivce } from '@App/Admin/services/tagService'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import {
	Button,
	Card,
	CardMedia,
	Typography,
	Grid,
	FormControlLabel,
	CardContent,
	RadioGroup,
	Checkbox,
	FormGroup,
	CircularProgress
} from '@mui/material'
import AdminInput from '@App/Admin/components/Input/AdminInput'
import { errorMsg, successMsg } from '@Core/helper/Message'
import { LoadingButton } from '@mui/lab'
import { useRequest, useUpdateEffect } from 'ahooks'
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { useTagDetail } from '../hooks/useTagDetail'
import { pickBy } from 'lodash'

const DetailTagForm = props => {
	const { tag, isEdit } = props
	const navigate = useNavigate()
	const { t, spotTableHandler } = useAdminPageContext()
	const [tabIndex, setTabIndex] = useState(0)
	const handleTabChange = (event, newTabIndex) => {
		setTabIndex(newTabIndex)
	}

	console.log('============= tag', tag)

	const tagType = [
		{
			value: 'event',
			label: 'イベント'
		},
		{
			value: 'course',
			label: 'コース'
		},
		{
			value: 'spot',
			label: 'スポット'
		}
	]

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		watch,
		setValue
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: tag?.id ?? null,
			name: tag?.name ?? '',
			type: tag?.type ?? '',
			detail: tag?.detail ?? '',
			order: tag?.order ?? null,
			frequently_used: !!tag?.frequently_used ?? null,
			display: tag?.display ?? 0,
			author: 'タグ作成者',
			show: tag?.display === 1 ? true : false,
			hide: tag?.display === 0 ? true : false
		},
		resolver: yupResolver(
			Yup.object({
				// name: Yup.string().required(),
				// number_tag: Yup.string().required(),
				// verification_code: Yup.string().required()
			})
		)
	})

	useUpdateEffect(() => {
		setValue('hide', !watch('show'))
	}, [watch('show')])

	useUpdateEffect(() => {
		setValue('show', !watch('hide'))
	}, [watch('hide')])

	console.log('============= watch()', watch())

	const onSubmit = handleSubmit(async data => {
		data.display = data?.show ? 1 : 0
		data.frequently_used = data?.frequently_used ? 1 : 0
		const { hide, show, ...dataSubmit } = data

		try {
			await tagSerivce.save(dataSubmit)
			navigate(ROUTER_ADMIN.tag.list)
			successMsg(isEdit ? t('common:message.edit_success') : t('common:message.create_success'))
		} catch (error) {
			errorMsg(error?.message)
		}
	})

	return (
		<form onSubmit={onSubmit}>
			<Box className="max-w-lg  mx-auto">
				<AdminInput
					label={t('title.id')}
					control={control}
					name="id"
					placeholder="Default input"
					size="small"
					classNameField="bg-grey-300"
					className="mb-16 sm:mb-20"
					readOnly
				/>
				<AdminInput
					label={t('title.name')}
					control={control}
					name="name"
					placeholder="Default input"
					size="small"
					className="mb-16 sm:mb-20"
					required
				/>
				<Box className="my-12 flex">
					<Box className="w-full sm:w-1/3 mt-12 text-primary mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('title.tag_type')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 border-grey-400 border-1 rounded-4">
						<CoreRadioGroup control={control} name="type" row options={tagType} className="ml-20" />
					</Box>
				</Box>
				<AdminInput
					label={t('title.description')}
					control={control}
					name="detail"
					className="mb-16 sm:mb-20"
					size="small"
					minRows={5}
					multiline
				/>
				<AdminInput
					label={t('title.number_tag')}
					control={control}
					name="order"
					placeholder="Default input"
					className="mb-16 sm:mb-20"
					size="small"
					required
				/>
				<Box className="my-12 flex">
					<Box className="w-full sm:w-1/3 mt-12 text-primary mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="w-72" /> {t('title.popular_tag')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 border-grey-400 border-1 rounded-4">
						<CoreCheckbox
							control={control}
							name="frequently_used"
							row
							label={t('title.test')}
							className="ml-20"
						/>
					</Box>
				</Box>
				<Box className="my-12 flex">
					<Box className="w-full sm:w-1/3 mt-12 text-primary mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="text-black py-4 px-16 rounded-4 w-60 bg-yellow mx-8">
								必須
							</Typography>{' '}
							{t('title.hide/show')}
						</Typography>
					</Box>
					<Box className="w-full flex sm:w-2/3 border-grey-400 border-1 rounded-4">
						<CoreCheckbox control={control} name="show" row label={t('title.show')} className="ml-20" />
						<CoreCheckbox control={control} name="hide" row label={t('title.hide')} className="ml-20" />
					</Box>
				</Box>
				<AdminInput
					label={t('title.tag_creator')}
					control={control}
					name="author"
					placeholder="Default input"
					size="small"
					classNameField="bg-grey-300"
					className="mb-16 sm:mb-20"
					readOnly
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full mt-12 mb-8 sm:mb-0 text-end">
						<Button
							onClick={() => navigate(ROUTER_ADMIN.tag.list)}
							variant="contained"
							className="mr-10"
							color="error"
							size="small"
						>
							削除
						</Button>
						<LoadingButton
							type="submit"
							loading={isSubmitting}
							variant="contained"
							color="success"
							className="bg-blue"
							size="small"
						>
							登録
						</LoadingButton>
					</Box>
				</Box>
			</Box>
		</form>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(DetailTagForm)
