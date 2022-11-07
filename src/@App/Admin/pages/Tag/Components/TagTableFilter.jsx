import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Icon, InputAdornment, Typography, FormControlLabel, Checkbox, Card } from '@mui/material'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import FormInputSearch from '@App/Admin/components/Form/FormInputSearch'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useForm } from 'react-hook-form'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInputFile from '@Core/components/Input/CoreInputFile'
import CoreInput from '@Core/components/Input/CoreInput'

const TagTableFilter = props => {
	const { tagTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.tag)
	const handleFilter = () => {
		const params = {
			// TODO : param filter
		}
		tagTableHandler.handleFetchData(params)
	}

	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			tag_name: ''
		}
	})

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.tag_name')}
					</Box>
					<TextField size="small" className="w-2/3" fullWidth variant="outlined" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.tag_type')}
					</Box>
					<CoreInput
						control={control}
						name="tag_name"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
					/>
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.popular_tag')}
					</Box>
					<Card variant="outlined" className="w-2/3 h-full">
						<Box className="col-span-1 -my-3 ml-8">
							<CoreCheckbox control={control} name="12345" label={t('title.only_popular_tag')} />
						</Box>
					</Card>
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
					{/* <FormControlLabel control={<Checkbox />} label={t('value.express')} className="ml-[5px]" /> */}
					<Box className="border-grey-400 border-1 rounded-4">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
							<Box className="col-span-1 -my-3 ml-8">
								<CoreCheckbox control={control} name="express" label={t('value.express')} />
							</Box>
							<Box className="col-span-1 -my-3">
								<CoreCheckbox
									control={control}
									name="non_representation"
									label={t('value.non_representation')}
								/>
							</Box>
						</Box>
					</Box>
					<Button variant="contained" color="primary" className="ml-auto" onClick={handleFilter}>
						{t('btn.search')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

//SpotTableFilter.defaultProps = {}

//SpotTableFilter.propTypes = {}

export default React.memo(TagTableFilter)
