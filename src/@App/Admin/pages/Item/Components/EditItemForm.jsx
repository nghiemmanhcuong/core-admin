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
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
// import PropTypes from 'prop-types'

const EditItemForm = props => {
	const { t, itemTableHandler } = useAdminPageContext()
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

	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: ''
		},
		resolver: yupResolver(
			Yup.object({
				name: Yup.string().required().trim().min(1).matches(30),
				description: Yup.string().required(),
				creator: Yup.string().required(),
				location: Yup.string().required(),
				address_location: Yup.string().required(),
				inventory: Yup.string().required(),
				unit: Yup.string().required(),
				from_date: Yup.mixed().nullable().required(),
				to_date: Yup.mixed().nullable().required(),
				area: Yup.mixed().nullable().required(),
				exchangeable_currency: Yup.mixed().nullable().required(),
			})
		)
	})

	return (
		<Box>
			<Box sx={{ padding: 2 }} className="max-w-lg mx-auto">
				<AdminInput
					label={t('edit.form.label.id')}
					control={control}
					name="id"
					placeholder="Default input"
					size="small"
					readOnly
					classNameField="bg-grey-300"
				/>
				<AdminInput
					label={t('edit.form.label.name')}
					control={control}
					name="name"
					placeholder="Default input"
					size="small"
					required
				/>
				<AdminInput
					label={t('edit.form.label.description')}
					control={control}
					name="description"
					size="small"
					minRows={5}
					multiline
					required
				/>

				<AdminInputUpload
					label={t('edit.form.label.image')}
					control={control}
					name="image"
					size="small"
					className="w-full sm:w-2/3"
					helperText
					required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.time')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 flex">
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="from_date"
							className="w-full"
						/>
						<Typography variant="h3" color="primary" className="mx-8 self-center">
							{t('edit.form.label.to')}
						</Typography>
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="to_date"
							className="w-full"
						/>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.area')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 sm:flex">
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="area"
							className="w-full sm:w-1/3"
						/>
					</Box>
				</Box>

				<AdminInput
					label={t('edit.form.label.location')}
					control={control}
					name="location"
					placeholder="Default input"
					size="small"
					required
				/>

				<AdminInput
					label={t('edit.form.label.address_location')}
					control={control}
					name="address_location"
					placeholder="Default input"
					size="small"
					required
				/>

				<AdminInput
					label={t('edit.form.label.inventory')}
					control={control}
					name="inventory"
					placeholder="Default input"
					size="small"
					required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.exchangeable_currency')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 sm:flex">
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="exchangeable_currency"
							className="w-full sm:w-1/3"
						/>
					</Box>
				</Box>

				<AdminInput
					label={t('edit.form.label.unit')}
					control={control}
					name="unit"
					placeholder="Default input"
					size="small"
					required
				/>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.situation')}
						</Typography>
					</Box>
					<Box className="flex rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreCheckbox
							control={control}
							name="checkbox1"
							label={t('edit.form.check_box.label.express')}
						/>
						<CoreCheckbox
							control={control}
							name="checkbox2"
							label={t('edit.form.check_box.label.representation')}
							className="ml-20"
						/>
					</Box>
				</Box>

				<Box className="flex w-full mb-20 items-center">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center">
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography>{' '}
							{t('edit.form.label.creator')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 flex flex-nowrap">
						<CoreInput
							control={control}
							name="creator"
							size="small"
							className="w-full mr-12"
							readOnly
						/>
						<Button variant="contained" color="error" className="ml-auto">
							{t('edit.form.btn.delete')}
						</Button>
						<Button variant="contained" className="ml-[10px] bg-blue">
							{t('edit.form.btn.register')}
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

// EditItemForm.defaultProps = {}

// EditItemForm.propTypes = {}

export default React.memo(EditItemForm)
