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
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const MaintainceForm = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)
	const periodOptions = [
		{
			value: 1,
			label: t('edit.form.check_box.label.whole_period')
		},
		{
			value: 2,
			label: t('edit.form.check_box.label.specified_period')
		}
	]
	const reportDisplayOptions = [
		{
			value: 1,
			label: t('edit.form.check_box.label.daily')
		},
		{
			value: 2,
			label: t('edit.form.check_box.label.weekly')
		},
		{
			value: 3,
			label: t('edit.form.check_box.label.monthly')
		},
		{
			value: 4,
			label: t('edit.form.check_box.label.total')
		}
	]
	const { control } = useForm({
		mode: 'onTouched'
	})

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
							name="period"
							className="w-full sm:w-1/3"
							options={periodOptions}
							row
						/>
						<Box className="flex w-full my-auto sm:w-2/3">
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
								className="w-full mr-8"
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
						<FormAutocomplete
							control={control}
							size="small"
							fullWidth
							variant="outlined"
							placeholder="Choose..."
							name="exchangeable_currency"
							className="w-full sm:w-4/5 bg-white"
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
								<CoreCheckbox
									control={control}
									name="number_of_event_page_views"
									label={t('edit.form.check_box.value.number_of_event_page_views')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="number_of_favorites_added"
									label={t('edit.form.check_box.value.number_of_favorites_added')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="number_of_entry_page_transitions"
									label={t('edit.form.check_box.value.number_of_entry_page_transitions')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="user_registration_information"
									label={t('edit.form.check_box.value.user_registration_information')}
									className="ml-12"
								/>
							</Box>
						</Box>

						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full pl-12 sm:py-0">
									{t('edit.form.label.entry_settlement_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 ml-16 min-h-[180px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								<CoreCheckbox
									control={control}
									name="number_of_applications_settlements"
									label={t('edit.form.check_box.value.number_of_applications_settlements')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="application_payer_attributes"
									label={t('edit.form.check_box.value.application_payer_attributes')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="list_of_application_information"
									label={t('edit.form.check_box.value.list_of_application_information')}
									className="ml-12"
								/>
							</Box>
						</Box>

						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full sm:py-0">
									{t('edit.form.label.play_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 min-h-[140px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								<CoreCheckbox
									control={control}
									name="number_of_starts_checkins_clears"
									label={t('edit.form.check_box.value.number_of_starts_checkins_clears')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="player_attribute"
									label={t('edit.form.check_box.value.player_attribute')}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="usage_data_by_spot"
									label={t('edit.form.check_box.value.usage_data_by_spot')}
									className="ml-12"
								/>
							</Box>
						</Box>

						<Box className="sm:w-1/2 w-full my-8">
							<Box className="pt-6 ml-5 mr-[-2px]">
								<Typography variant="h3" color="primary" className="w-full pl-12 sm:py-0">
									{t('edit.form.label.in_app_currency_usage_data')}
								</Typography>
							</Box>
							<Box className="pt-6 mt-5 ml-16 min-h-[140px] border-grey-300 border-1 rounded-l-4 bg-white min-h-min">
								<CoreCheckbox
									control={control}
									name="number_of_product_exchanges_per_store_exchange_user_information"
									label={t(
										'edit.form.check_box.value.number_of_product_exchanges_per_store_exchange_user_information'
									)}
									className="ml-12"
								/>
								<CoreCheckbox
									control={control}
									name="inventory_and_limit_setting_by_product"
									label={t('edit.form.check_box.value.inventory_and_limit_setting_by_product')}
									className="ml-12"
								/>
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
							<CoreCheckbox
								control={control}
								name="total_number_of_installs"
								label={t('edit.form.check_box.value.total_number_of_installs')}
								className="w-full sm:w-1/2 pl-12"
							/>
							<CoreCheckbox
								control={control}
								name="dau"
								label={t('edit.form.check_box.value.dau')}
								className="w-full sm:w-1/2 pl-28"
							/>
							<CoreCheckbox
								control={control}
								name="user_attributes_of_all_installers"
								label={t('edit.form.check_box.value.user_attributes_of_all_installers')}
								className="w-full sm:w-1/2 pl-12"
							/>
							<CoreCheckbox
								control={control}
								name="wau"
								label={t('edit.form.check_box.value.wau')}
								className="w-full sm:w-1/2 pl-28"
							/>
							<CoreCheckbox
								control={control}
								name="overall_app_revenue"
								label={t('edit.form.check_box.value.overall_app_revenue')}
								className="w-full sm:w-1/2 pl-12"
							/>
							<CoreCheckbox
								control={control}
								name="mau"
								label={t('edit.form.check_box.value.mau')}
								className="w-full sm:w-1/2 pl-28"
							/>
							<CoreCheckbox
								control={control}
								name="revenue_composition_event_breakdown"
								label={t('edit.form.check_box.value.revenue_composition_event_breakdown')}
								className="w-full sm:w-1/2 pl-12"
							/>
							<CoreCheckbox
								control={control}
								name="breakdown_of_play_events_for_active_users"
								label={t('edit.form.check_box.value.breakdown_of_play_events_for_active_users')}
								className="w-full sm:w-1/2 pl-28"
							/>
						</Box>
					</Box>
				</Box>

				<Button variant="contained" color="primary" className="ml-auto">
					{t('btn.csv_output')}
				</Button>
			</Box>
		</Box>
	)
}

// MaintainceForm.defaultProps = {}

// MaintainceForm.propTypes = {}

export default React.memo(MaintainceForm)
