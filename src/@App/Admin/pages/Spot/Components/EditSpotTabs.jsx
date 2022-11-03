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
	TextField,
	Button,
	Tabs,
	Tab,
	Typography,
	Grid,
	FormControlLabel,
	Radio,
	RadioGroup,
	Checkbox,
	FormGroup
} from '@mui/material'
import AdminInput from '@App/Admin/components/Input/AdminInput'

const EditSpotTabs = props => {
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
			
			<Box sx={{ padding: 2 }}>
				
				<Box className="max-w-lg  mx-auto">
					<AdminInput
						label={t('edit.form.label.id')}
						control={control}
						name="id"
						placeholder="Default input"
						size="small"
						classNameField='bg-grey-300'
						readOnly
					/>
					<AdminInput
						label={t('edit.form.label.title')}
						control={control}
						name="title"
						placeholder="Default input"
						size="small"
						required
					/>
					
					<AdminInput
						label={t('edit.form.label.description')}
						control={control}
						name="description"
						placeholder="Default input"
						size="small"
						minRows={5}
						multiline
						required
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.situation')}
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

					<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.category')}
							</Typography>
						</Box>
						<Box className="rounded-md w-full sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
							<FormGroup row>
								<CoreCheckbox
									className="w-1/2"
									control={control}
									name="category"
									size="small"
									value={1}
									label={t('edit.form.check_box.label.men')}
								/>
								<CoreCheckbox
									className="w-1/2"
									control={control}
									name="category"
									size="small"
									value={2}
									label={t('edit.form.check_box.label.women')}
								/>
								<CoreCheckbox
									control={control}
									className="w-1/2"
									name="category"
									size="small"
									value={3}
									label={t('edit.form.check_box.label.50s')}
								/>
								<CoreCheckbox
									control={control}
									className="w-1/2"
									name="category"
									size="small"
									value={4}
									label={t('edit.form.check_box.label.participants')}
								/>
							</FormGroup>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.venue')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 sm:flex">
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="venue"
								className="w-full sm:w-1/3"
							/>
							<Typography
								variant="h3"
								color="primary"
								className="self-center w-full py-10 sm:py-0 sm:w-1/3 sm:text-center"
							>
								{t('edit.form.label.type')}
							</Typography>
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="type"
								className="w-full sm:w-1/3"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.period')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="period"
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
								name="period_to"
								className="w-full"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.entry_period')}
							</Typography> 
						</Box>
						<Box className="w-full sm:w-2/3 flex">
							<FormAutocomplete
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="entry_period"
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
								name="entry_period_to"
								className="w-full"
							/>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.entry_fee')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-wrap">
							<CoreInput
								control={control}
								name="entry_fee"
								fullWidth
								size="small"
								className="w-full sm:w-1/3"
							/>
							<Typography
								variant="h3"
								color="primary"
								className="w-full py-10 sm:py-0 sm:w-1/3 self-center sm:text-center"
							>
								{t('edit.form.label.payment')}
							</Typography>
							<Box className="w-full rounded-md pl-10 sm:w-1/3" sx={{ border: '1px solid #cccc' }}>
								<CoreRadioGroup
									className="flex-row"
									control={control}
									name="description"
									fullWidth
									options={[
										{
											value: 1,
											label: t('edit.form.check_box.label.card')
										},
										{
											value: 2,
											label: t('edit.form.check_box.label.qr')
										}
									]}
									row="true"
								/>
							</Box>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.entry_option')}
							</Typography>
						</Box>
						<Box
							className="w-full rounded-md pl-10 sm:w-2/3 flex flex-wrap py-10"
							sx={{ border: '1px solid #cccc' }}
						>
							<Box className="w-full flex flex-wrap py-10">
								<CoreCheckbox
									control={control}
									name="bicycle"
									size="small"
									label={t('edit.form.check_box.label.bicycle_rental')}
									className="w-2/4"
								/>
								<CoreInput control={control} name="bicycle_circle" size="small" className="w-1/3" />
								<Typography variant="h3" className="self-center ml-5">
									{t('edit.form.label.circle')}
								</Typography>
							</Box>

							<Box className="w-full flex flex-wrap py-10">
								<CoreCheckbox
									control={control}
									name="xxx"
									size="small"
									className="w-2/4"
									label="XXXXXXX"
								/>
								<CoreInput control={control} name="xxx_circle" size="small" className="w-1/3" />
								<Typography variant="h3" className="self-center ml-5">
									{t('edit.form.label.circle')}
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap items-center mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.mission')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap">
							<CoreInput control={control} name="mission" size="small" className="w-4/5" />
							<Button variant="contained" color="primary" className="ml-auto w-1/5">
								{t('edit.form.btn.selection')}
							</Button>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap items-center mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.reward')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3  flex flex-nowrap">
							<CoreInput control={control} name="reward" size="small" className="w-4/5" />
							<Button variant="contained" color="primary" className="ml-auto w-1/5">
								{t('edit.form.btn.selection')}
							</Button>
						</Box>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap items-center mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.tag')}
							</Typography>
						</Box>
						<Box className="w-full rounded-md sm:w-2/3 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
							<FormGroup row>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.spring_available')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.best_view')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.autumn')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.beginners')}
								/>
							</FormGroup>
							<FormGroup row>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.spring_available')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.best_view')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.autumn')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.beginners')}
								/>
							</FormGroup>
							<FormGroup row>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.spring_available')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.best_view')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.autumn')}
								/>
								<CoreCheckbox
									control={control}
									name="tag"
									size="small"
									className="w-1/2 sm:w-auto"
									label={t('edit.form.check_box.label.beginners')}
								/>
							</FormGroup>
						</Box>
					</Box>
					<AdminInput
						label={t('edit.form.label.precautions')}
						control={control}
						name="precautions"
						placeholder="Default input"
						size="small"
						minRows={5}
						multiline
						required
					/>
					<AdminInput
						label={t('edit.form.label.contact_name')}
						control={control}
						name="contact_name"
						placeholder="Default input"
						size="small"
						required
					/>
					
					<AdminInput
						label={t('edit.form.label.address')}
						control={control}
						name="address"
						placeholder="Default input"
						size="small"
						required
					/>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.related')}
							</Typography>
						</Box>
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							className="w-full sm:w-2/3"
							variant="outlined"
							placeholder="Choose..."
							name="related"
						/>
					</Box>

					<Box className="flex flex-wrap sm:flex-nowrap mb-20">
						<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">
							<Typography variant="h3" color="primary" className='flex items-center'>
							<Typography className="text-black py-4 px-16 rounded-4 bg-yellow mx-8">必須</Typography> {t('edit.form.label.creator')}
							</Typography>
						</Box>
						<Box className="w-full sm:w-2/3 flex flex-nowrap items-center">
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
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(EditSpotTabs)
