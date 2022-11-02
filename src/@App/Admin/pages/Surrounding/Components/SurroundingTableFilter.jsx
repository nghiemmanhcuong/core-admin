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

const SurroundingTableFilter = props => {
	const { surroundingTableHandler } = useAdminPageContext()
	const { t } = useTranslation(TRANSLATE_ADMIN.surrounding)
	const handleFilter = () => {
		const params = getValues()
		surroundingTableHandler.handleFetchData(params)
	}

	const { control, getValues } = useForm({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			address: '',
			type: 0
		}
	})

	const addressOptions = [
		{
			value: '神奈川県〇〇市XXX',
			label: '神奈川県〇〇市XXX'
		},
		{
			value: '〒949-7302 新潟県南魚沼市浦佐',
			label: '〒949-7302 新潟県南魚沼市浦佐'
		},
		{
			value: 'school',
			label: 'school'
		},
		{
			value: 'DKS Ạ',
			label: 'DKS Ạ'
		},
		{
			value: 'hanoi',
			label: 'hanoi'
		}
	]

	const typeOptions = [
		{ value: 1, label: 'toilet' },
		{ value: 2, label: 'convenience store' },
		{ value: 3, label: 'water refill station' }
	]

	return (
		<Box className="m-10 border-1 rounded-4 border-grey-300">
			<Box className="p-10 bg-grey-300">
				<Typography variant="h4">{t('title.filter')}</Typography>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 p-10 bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.name')}
					</Box>
					<CoreInput control={control} name="name" size="small" className="w-full sm:w-2/3" />
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					<Box className="w-1/3 p-10 bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.area')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="address"
						size="small"
						options={addressOptions}
						className="w-full sm:w-2/3"
						placeholder="Choose..."
						returnValueType="enum"
					/>
				</Box>
			</Box>
			<Box className="flex p-10  w-full">
				<Box className="flex w-1/2 items-start  ">
					<Box className="w-1/3 p-10 bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
						{t('title.type')}
					</Box>
					<CoreAutocomplete
						control={control}
						name="type"
						size="small"
						className="w-full sm:w-2/3"
						placeholder="Choose..."
						options={typeOptions}
						returnValueType="enum"
					/>
				</Box>
				<Box className="flex w-1/2 items-start mx-8 ">
					{/* <Box className="w-1/3 p-10 bg-grey-300 pt-6 mr-[-2px] border-grey-300 border-1 rounded-l-4">
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
					</Card> */}
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

export default React.memo(SurroundingTableFilter)
