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
import AdminInputUpload from '@App/Admin/components/Input/AdminInputUpload'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
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
				name: Yup.string().required().trim().min(1).matches(30)
			})
		)
	})

	return (
		<Box>
			<Box sx={{ padding: 2 }}>
				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.id')}
						</Typography>
					</Box>
					<CoreInput control={control} name="id" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.name')}
						</Typography>
					</Box>
					<CoreInput control={control} name="name" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.description')}
						</Typography>
					</Box>
					<CoreInput
						control={control}
						name="description"
						size="small"
						multiline
						className="w-full sm:w-2/3"
					/>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.image')}
						</Typography>
					</Box>
					<AdminInputUpload control={control} name="image" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
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
						<Typography
							variant="h3"
							color="primary"
							className="self-center w-full sm:py-0 sm:w-1/3 sm:text-center"
						>
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

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.location')}
						</Typography>
					</Box>
					<CoreInput control={control} name="location" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.address_location')}
						</Typography>
					</Box>
					<CoreInput control={control} name="address_location" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.inventory')}
						</Typography>
					</Box>
					<CoreInput control={control} name="inventory" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography
							variant="h3"
							color="primary"
							className="self-center w-full sm:py-0 sm:w-1/3 sm:text-center"
						>
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

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.unit')}
						</Typography>
					</Box>
					<CoreInput control={control} name="unit" size="small" className="w-full sm:w-2/3" />
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
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
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.creator')}
						</Typography>
					</Box>
					<Box className="w-full sm:w-2/3 flex flex-nowrap">
						<CoreInput control={control} name="creator" size="small" className="w-4/5" />
						<Button variant="contained" color="primary" className="ml-auto w-1/5">
							{t('edit.form.btn.selection')}
						</Button>
					</Box>
				</Box>

				<Box className="flex flex-wrap sm:flex-nowrap mb-20">
					<Button variant="contained" color="error" className="ml-auto">
						{t('edit.form.btn.delete')}
					</Button>
					<Button variant="contained" color="primary" className="ml-[10px]">
						{t('edit.form.btn.register')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

// EditItemForm.defaultProps = {}

// EditItemForm.propTypes = {}

export default React.memo(EditItemForm)
