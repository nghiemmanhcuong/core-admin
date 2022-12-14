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
		const data = getValues()
		const valueCheckbox = getValues('display')
		const arraySelected = []

		//eslint-disable-next-line
		for (const value in valueCheckbox) {
			if (valueCheckbox[value]) {
				arraySelected.push(value)
			}
		}

		const params = {
			...data,
			frequently_used: data?.frequently_used ? 1 : 0 ?? null,
			display: arraySelected
		}
		tagTableHandler.handleFetchData(params)
	}

	const { control, getValues, watch } = useForm({
		mode: 'onTouched',
		defaultValues: {
			// id: null,
			// name: null,
			// type: null,
			// frequently_used: null,
			display: []
		}
	})

	const displayOptions = [
		{ value: 0, label: t('value.non_representation') },
		{ value: 1, label: t('value.express') }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{/* {t('title.name')} */}ID
					</Box>
					<CoreInput
						control={control}
						name="id"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.tag_name')}
					</Box>
					<CoreInput
						control={control}
						name="name"
						size="small"
						className="w-2/3"
						fullWidth
						variant="outlined"
					/>
				</Box>

				{/* <Box className="flex w-1/2 items-start mx-8">
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
				</Box> */}
			</Box>
			<Box className="flex p-8 w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.popular_tag')}
					</Box>
					<Card variant="outlined" className="w-2/3 h-full">
						<Box className="col-span-1 -my-3 ml-8">
							<CoreCheckbox
								control={control}
								name="frequently_used"
								label={t('title.only_popular_tag')}
							/>
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
							{displayOptions?.map(item => (
								<CoreCheckbox
									control={control}
									className="col-span-1 -my-3 ml-20"
									name={`display.${item?.value}`}
									label={item?.label}
								/>
							))}
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
