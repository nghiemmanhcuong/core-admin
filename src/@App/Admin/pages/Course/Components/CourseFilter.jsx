import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Icon, InputAdornment, Typography, FormControlLabel, Checkbox, Card } from '@mui/material'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { useTranslation } from 'react-i18next'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreInput from '@Core/components/Input/CoreInput'

const CourseFilter = props => {
	const { courseTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
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
			display: arraySelected
		}
		courseTableHandler.handleFetchData(params)
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			course_name: '',
			district: '',
			tag: '',
			display: {}
		}
	})

	const displayOptions = [
		{ value: 0, label: t('value.non_representation') },
		{ value: 1, label: t('value.express') }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>

			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						コースタイトル
					</Box>
					<CoreInput name="course_name" control={control} size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-full sm:w-1/2 items-start mx-8">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">エリア</Box>
					<CoreInput name="district" control={control} size="small" className="w-full sm:w-2/3" />
				</Box>
			</Box>

			<Box className="flex p-8 w-full">
				<Box className="flex w-full sm:w-1/2 items-start">
					<Box className="w-full sm:w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">タグ</Box>
					<CoreInput name="tag" control={control} size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-full sm:w-1/2 items-start mx-8">
					<Box className="w-1/3 p-8 h-full bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.state')}
					</Box>
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

export default React.memo(CourseFilter)
