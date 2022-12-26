/*
 * Created Date: 23-10-2022, 2:38:14 pm
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
import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { maintainceService } from '@App/Admin/services/maintainceService'
import CoreAutocomplete from '@Core/components/Input/CoreAutocomplete'
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreDatePicker from '@Core/components/Input/CoreDatePicker'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { errorMsg } from '@Core/helper/Message'
import { Button, Typography, FormHelperText } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment/moment'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMaintainceOptions } from '../hooks/useMaintainceOptions'
import { LoadingButton } from '@mui/lab'
// import PropTypes from 'prop-types'

const MaintainceForm = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)
	const { events } = useAdminPageContext()
	const [progressDownload, setProgressDownload] = useState(false)
	const {
		periodOptions,
		reportDisplayOptions,
		exportAppOption,
		eventPageDataOptions,
		entryPaymentDataOptions,
		playDataOptions,
		currencyUsageDataOption
	} = useMaintainceOptions()

	const {
		control,
		getValues,
		watch,
		setError,
		clearErrors,
		formState: { errors }
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			collect_duration: 'all',
			report_display: 'daily',
			export_event: {},
			export_app: {}
		}
	})

	const handleDownload = async () => {
		try {
			await setProgressDownload(true)
			const data = getValues()
			const exportEvent = getValues('export_event')
			const exportEventSelected = []
			const exportApp = getValues('export_app')
			const exportAppSelected = []

			//eslint-disable-next-line
			for (const value in exportEvent) {
				if (exportEvent[value]) {
					exportEventSelected.push(value)
				}
			}
			//eslint-disable-next-line
			for (const value in exportApp) {
				if (exportApp[value]) {
					exportAppSelected.push(value)
				}
			}

			if (!exportAppSelected || (exportAppSelected && exportAppSelected.length <= 0)) {
				setError('export_app', { type: 'manual', message: 'Export app is required' })
				await setProgressDownload(false)
				return
			}

			const params = {
				...data,
				export_event: exportEventSelected,
				export_app: exportAppSelected,
				export_format: 'CSV',
				collect_duration_from: moment(data?.collect_duration_from).format('YYYY-MM'),
				collect_duration_until: moment(data?.collect_duration_until).format('YYYY-MM')
			}

			if (!params.event_id) {
				delete params['event_id']
			}
			if (params.export_app && params.export_app.length <= 0) {
				delete params['export_app']
			}
			if (params.export_event && params.export_event.length <= 0) {
				delete params['export_event']
			}

			const qs =
				'?' +
				Object.keys(params)
					.map(key => {
						if (key === 'export_app' || key === 'export_event') {
							if (params[key] && params[key].length > 0) {
								return params[key]
									.map(subVal => {
										return `${key}%5B%5D=${encodeURIComponent(subVal)}`
									})
									.join('&')
							}
						}
						return `${key}=${encodeURIComponent(params[key])}`
					})
					.join('&')
			await maintainceService.handleDownload(params)

			var a = document.createElement('a')
			a.href = window.origin + '/api/resource/csvDownload' + qs
			a.click()
			clearErrors('export_app')
			await setProgressDownload(false)
		} catch (error) {
			await setProgressDownload(false)
			errorMsg(error?.response?.data?.error_message)
		}
	}

	return (
		<Box className="max-w-lg mx-auto">
			<Box className="flex flex-wrap" sx={{ padding: 2 }}>
				<Box className="flex w-full flex-wrap sm:flex-nowrap mb-16 mx-8 sm:mb-20">
					<Box className="w-full sm:w-1/4 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.period')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full flex sm:w-3/4 py-8 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup
							control={control}
							name="collect_duration"
							className="w-full sm:w-1/3"
							options={periodOptions}
							row
						/>
						<Box className="flex w-full my-auto sm:w-2/3">
							<CoreDatePicker
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="collect_duration_from"
								className="w-full"
								showMonthYearPicker
							/>
							<Typography variant="h3" color="primary" className="mx-8 self-center">
								{t('edit.form.label.to')}
							</Typography>
							<CoreDatePicker
								control={control}
								size="small"
								fullWidth
								variant="outlined"
								placeholder="Choose..."
								name="collect_duration_until"
								className="w-full mr-8"
								showMonthYearPicker
							/>
						</Box>
					</Box>
				</Box>

				<Box className="flex flex-wrap w-full sm:flex-nowrap mb-16 mx-8 sm:mb-20">
					<Box className="w-full sm:w-1/4 mt-12 mb-8 sm:mb-0">
						<Typography variant="h3" color="primary">
							{t('edit.form.label.report_display')}
						</Typography>
					</Box>
					<Box className="rounded-md w-full sm:w-3/4 pl-[15px]" sx={{ border: '1px solid #cccc' }}>
						<CoreRadioGroup
							className="flex-row"
							control={control}
							name="report_display"
							options={reportDisplayOptions}
							row="true"
						/>
					</Box>
				</Box>

				<Box className="m-10 border-1 w-full rounded-4 border-grey-300 min-h-full bg-grey-100">
					<Box className="p-10 flex w-full bg-grey-300">
						<Typography variant="h4" className="w-full sm:w-1/5 pl-12 my-auto">
							{t('edit.form.label.event_selection')}
						</Typography>
						<CoreAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="event_id"
							className="w-full sm:w-4/5 bg-white"
							options={events?.events}
							valuePath="id"
							labelPath="title"
							returnValueType="enum"
						/>
					</Box>

					<Box className="flex flex-wrap w-full p-16">
						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full sm:py-0">
									{t('edit.form.label.event_page_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 min-h-[180px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								{eventPageDataOptions?.map(item => (
									<CoreCheckbox
										control={control}
										className="col-span-1 -my-3 ml-20"
										name={`export_event.${item?.value}`}
										label={item?.label}
										disabled
									/>
								))}
							</Box>
						</Box>

						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full pl-12 sm:py-0">
									{t('edit.form.label.entry_settlement_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 ml-16 min-h-[180px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								{entryPaymentDataOptions?.map(item => (
									<CoreCheckbox
										control={control}
										className="col-span-1 -my-3 ml-20"
										name={`export_event.${item?.value}`}
										label={item?.label}
										disabled
									/>
								))}
							</Box>
						</Box>

						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full sm:py-0">
									{t('edit.form.label.play_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 min-h-[140px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								{playDataOptions?.map(item => (
									<CoreCheckbox
										control={control}
										className="col-span-1 -my-3 ml-20"
										name={`export_event.${item?.value}`}
										label={item?.label}
										disabled
									/>
								))}
							</Box>
						</Box>

						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full pl-12 sm:py-0">
									{t('edit.form.label.in_app_currency_usage_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 ml-16 min-h-[140px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								{currencyUsageDataOption?.map(item => (
									<CoreCheckbox
										control={control}
										className="col-span-1 -my-3 ml-20"
										name={`export_event.${item?.value}`}
										label={item?.label}
										disabled
									/>
								))}
							</Box>
						</Box>
					</Box>
				</Box>

				<Box className="m-10 border-1 rounded-4 border-grey-300 min-h-full bg-grey-100">
					<Box className="p-10 flex w-full bg-grey-300">
						<Typography variant="h4" className="w-full sm:w-1/5 my-auto">
							{t('edit.form.label.whole_app')}
						</Typography>
					</Box>

					<Box className="w-full mt-5 overflow-hidden px-16">
						<Box className="flex flex-wrap w-full my-12  border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
							{exportAppOption?.map(item => (
								<CoreCheckbox
									control={control}
									className="col-span-1 -my-3 ml-20"
									name={`export_app.${item?.value}`}
									label={item?.label}
									disabled={['revenue', 'breakdown_of_revenue', 'breakdown_of_user_played'].includes(
										item.value
									)}
								/>
							))}
						</Box>
						{errors.export_app && <FormHelperText error>{errors.export_app.message}</FormHelperText>}
					</Box>
				</Box>

				<LoadingButton
					variant="contained"
					color="primary"
					loading={progressDownload}
					onClick={() => handleDownload()}
					className="ml-auto bg-blue text-white"
				>
					{t('btn.csv_output')}
				</LoadingButton>
			</Box>
		</Box>
	)
}

// MaintainceForm.defaultProps = {}

// MaintainceForm.propTypes = {}

export default React.memo(MaintainceForm)
