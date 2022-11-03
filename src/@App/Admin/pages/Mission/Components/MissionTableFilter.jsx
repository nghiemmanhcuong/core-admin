import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Button, Icon, Card, Typography, FormControlLabel, Checkbox } from '@mui/material'
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

const MissionTableFilter = props => {
	const { missionTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.mission)
	const handleFilter = () => {
		const params = getValues()
		missionTableHandler.handleFetchData(params)
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			status: ''
		}
	})

	const statusOptions = [
		{ value: 'Spot 1', label: 'Spot 1' },
		{ value: 'Spot 2', label: 'Spot 2' },
		{ value: 'Spot 3', label: 'Spot 3' },
		{ value: 'Spot 4', label: 'Spot 4' },
		{ value: 'Spot 5', label: 'Spot 5' }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-8 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center  ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.name')}
					</Box>
					<CoreInput control={control} name="name" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.clear_condition')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="status"
						size="small"
						className="w-full sm:w-2/3"
						placeholder="Choose..."
						options={statusOptions}
						returnValueType="enum"
					/>
				</Box>
			</Box>
			<Box className="flex p-8  w-full">
				<Box className="flex w-1/2 items-center"></Box>
				<Box className="flex w-1/2 items-center mx-8 ">
					<Box className="w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4">
						{t('title.situation')}
					</Box>
					<Card variant="outlined">
						<Box className="grid grid-flow-row-dense grid-cols-2 ml-5">
							<Box className="col-span-1 -my-3 ml-20">
								<CoreCheckbox control={control} name="checkbox1" label={t('value.express')} />
							</Box>
							<Box className="col-span-1 -my-3">
								<CoreCheckbox
									control={control}
									name="checkbox2"
									label={t('value.non_representation')}
								/>
							</Box>
						</Box>
					</Card>
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

export default React.memo(MissionTableFilter)
