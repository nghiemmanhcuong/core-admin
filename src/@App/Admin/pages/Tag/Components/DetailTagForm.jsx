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
import React, { useMemo, useState } from 'react'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
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
	FormGroup
} from '@mui/material'
import AdminInput from '@App/Admin/components/Input/AdminInput'

const DetailTagForm = props => {
	const { t, spotTableHandler } = useAdminPageContext()
	const [tabIndex, setTabIndex] = useState(0)
	const handleTabChange = (event, newTabIndex) => {
		setTabIndex(newTabIndex)
	}

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

	const tagType = [
		{
			value: 1,
			label: 'イベント'
		},
		{
			value: 2,
			label: 'コース'
		},
		{
			value: 3,
			label: 'スポット'
		}
	]

	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			verification_code: ''
		},
		resolver: yupResolver(
			Yup.object({
				verification_code: Yup.string().required()
			})
		)
	})

	return (
		<Box>
			<Box className="max-w-lg  mx-auto">
				<AdminInput
					label={t('title.id')}
					control={control}
					name="id"
					placeholder="Default input"
					size="small"
					classNameField="bg-grey-300"
					readOnly
				/>
				<AdminInput
					label={t('title.name')}
					control={control}
					name="name"
					placeholder="Default input"
					size="small"
					required
				/>
				<Box className="my-12 flex">
					<Box className="w-full sm:w-1/3 mt-12 text-primary mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('title.tag_type')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 border-grey-300 border-1">
						<CoreRadioGroup control={control} name="radio1" row options={tagType} className="ml-20" />
					</Box>
				</Box>
				<AdminInput
					label={t('title.description')}
					control={control}
					name="description"
					size="small"
					minRows={5}
					multiline
				/>
				<AdminInput
					label={t('title.number_tag')}
					control={control}
					name="number_tag"
					placeholder="Default input"
					size="small"
					required
				/>
				<Box className="my-12 flex">
					<Box className="w-full sm:w-1/3 mt-12 text-primary mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
							<Typography className="w-72" /> {t('title.popular_tag')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 border-grey-300 border-1">
						<CoreCheckbox
							control={control}
							name="checkbox1"
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
					<Box className="w-full flex sm:w-2/3 border-grey-300 border-1">
						<CoreCheckbox control={control} name="hide" row label={t('title.hide')} className="ml-20" />
						<CoreCheckbox control={control} name="show" row label={t('title.show')} className="ml-20" />
					</Box>
				</Box>
				<AdminInput
					label={t('title.tag_creator')}
					control={control}
					name="tag_creator"
					placeholder="Default input"
					size="small"
					classNameField="bg-grey-300"
					readOnly
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full mt-12 mb-8 sm:mb-0 text-end">
						<Button variant="contained" color="error" className="mr-10" size="small">
							削除
						</Button>
						<Button variant="contained" color="success" className="bg-blue" size="small">
							登録
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(DetailTagForm)
