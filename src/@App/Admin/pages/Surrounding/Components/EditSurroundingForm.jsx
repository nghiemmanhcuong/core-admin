/*
 * Created Date: 25-10-2022, 10:03:47 pm
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
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { LoadingButton } from '@mui/lab'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSurroundingForm } from '../hooks/useSurroundingForm'
// import PropTypes from 'prop-types'

const EditSurroundingForm = props => {
	const { t, surroundingTableHandler } = useAdminPageContext()
	const { methodForm, onSubmit } = useSurroundingForm(props)
	const navigate = useNavigate()

	const {
		control,
		watch,
		formState: { isSubmitting, isDirty }
	} = methodForm

	// const displayOptions = [
	// 	{
	// 		value: 1,
	// 		label: t('edit.form.check_box.label.display')
	// 	},
	// 	{
	// 		value: 2,
	// 		label: t('edit.form.check_box.label.hidden')
	// 	}
	// ]

	const typeOptions = [
		{
			value: '1',
			label: t('edit.form.check_box.label.toilet')
		},
		{
			value: '2',
			label: t('edit.form.check_box.label.restaurant')
		},
		{
			value: '3',
			label: t('edit.form.check_box.label.spa')
		}
		// {
		// 	value: 4,
		// 	label: t('edit.form.check_box.label.kitchen')
		// },
		// {
		// 	value: 5,
		// 	label: t('edit.form.check_box.label.living_room')
		// },
		// {
		// 	value: 6,
		// 	label: t('edit.form.check_box.label.hotel')
		// },
		// {
		// 	value: 7,
		// 	label: t('edit.form.check_box.label.dining_room')
		// },
		// {
		// 	value: 8,
		// 	label: t('edit.form.check_box.label.bed_room')
		// },
		// {
		// 	value: 9,
		// 	label: t('edit.form.check_box.label.bath_room')
		// }
	]

	return (
		<form onSubmit={onSubmit} className="mt-20 px-20">
			<Box className="max-w-lg mx-8 sm:mx-auto">
				<AdminInput
					control={control}
					label={t('edit.form.label.id')}
					name="id"
					placeholder="Default input"
					size="small"
					readOnly
					classNameField='bg-grey-300'
					// required
				/>
				<AdminInput
					control={control}
					label={t('edit.form.label.name')}
					name="name"
					placeholder="Default input"
					size="small"
					required
				/>
				<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
					<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary" className="flex items-center mb-4">
						<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.type')}
						
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup className="flex-row" control={control} name="type" options={typeOptions} row />
					</Box>
				</Box>
				{/* <AdminInput
					control={control}
					label={t('edit.form.label.description')}
					name="description"
					size="small"
					multiline
					minRows={5}
					// placeholder="Default input"
					// required
				/> */}
				<AdminInput
					control={control}
					label={t('edit.form.label.address')}
					name="address"
					placeholder="Default input"
					size="small"
					required
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
					control={control}
					label={t('edit.form.label.url')}
					name="url"
					placeholder="Default input"
					size="small"
					required
				/>
				<AdminInput
					control={control}
					label={t('edit.form.label.tel')}
					name="tel"
					placeholder="Default input"
					size="small"
					required
				/>
				<AdminInputUpload
					control={control}
					name="image"
					label={t('edit.form.label.image')}
					helperText="Image size : 100x100"
					required
				/>
			</Box>

			<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
				<Box className="w-full mt-12 mb-8 sm:mb-0 text-end">
					<Button
						variant="contained"
						color="error"
						className="mr-10"
						size="small"
						onClick={() => navigate(ROUTER_ADMIN.surrounding.list)}
					>
						{t('edit.form.btn.delete')}
					</Button>
					<LoadingButton
						variant="contained"
						className='bg-blue '
						size="small"
						type="submit"
						loading={isSubmitting}
					>
						{t('edit.form.btn.register')}
					</LoadingButton>
				</Box>
			</Box>
		</form>
	)
}

// EditSurroundingForm.defaultProps = {}

// EditSurroundingForm.propTypes = {}

export default React.memo(EditSurroundingForm)
