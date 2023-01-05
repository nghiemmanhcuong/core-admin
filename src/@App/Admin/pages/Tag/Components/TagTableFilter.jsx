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
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'

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
				arraySelected.push(+value)
			}
		}

		const params = {
			...data,
			display: arraySelected
		}

		tagTableHandler.handleFetchData(params)
	}

	const { control, getValues, watch } = useForm({
		mode: 'onTouched',
		defaultValues: {
			id: null,
			name: '',
			display: {}
		}
	})

	const displayOptions = [
		{ id: 0, label: t('value.non_representation') },
		{ id: 1, label: t('value.express') }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-start">
					<Box className="w-1/3 px-10 h-full bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						ID
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
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">タグ種別</Box>
					<CoreAutocomplete
						control={control}
						name="type"
						options={[
							{ value: 'event', label: 'イベント' },
							{ value: 'course', label: 'コース' },
							{ value: 'spot', label: 'スポット' }
						]}
						size="small"
						className="w-full sm:w-2/3"
						placeholder="選択する"
						valuePath="value"
						labelPath="label"
						returnValueType="enum"
					/>
				</Box>
			</Box>

			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start"></Box>

				<Box className="flex w-full sm:w-1/2 mx-8 items-center">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
					<Box className="border-grey-400 border-1 rounded-4">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
							{displayOptions?.map(item => (
								<CoreCheckbox
									control={control}
									className="col-span-1 -my-3 ml-20"
									name={`display.${item?.id}`}
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
