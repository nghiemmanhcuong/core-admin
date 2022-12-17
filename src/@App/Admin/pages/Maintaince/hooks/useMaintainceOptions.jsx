/*
 * Created Date: 17-12-2022, 10:58:44 am
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

import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { useTranslation } from 'react-i18next'

export const useMaintainceOptions = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)
	const periodOptions = [
		{
			value: 'all',
			label: t('edit.form.check_box.label.whole_period')
		},
		{
			value: 'designation',
			label: t('edit.form.check_box.label.specified_period')
		}
	]
	const reportDisplayOptions = [
		{
			value: 'daily',
			label: t('edit.form.check_box.label.daily')
		},
		{
			value: 'weekly',
			label: t('edit.form.check_box.label.weekly')
		},
		{
			value: 'monthly',
			label: t('edit.form.check_box.label.monthly')
		},
		{
			value: 'total',
			label: t('edit.form.check_box.label.total')
		}
	]

	// const exportEventOptions = [
	// 	{
	// 		value: 'event_detail_page_pv',
	// 		label: t('edit.form.check_box.value.number_of_event_page_views')
	// 	},
	// 	{
	// 		value: 'favorite',
	// 		label: t('edit.form.check_box.value.number_of_favorites_added')
	// 	},
	// 	{
	// 		value: 'transition_entry',
	// 		label: t('edit.form.check_box.value.number_of_entry_page_transitions')
	// 	},
	// 	{
	// 		value: 'entry_user',
	// 		label: t('edit.form.check_box.value.user_registration_information')
	// 	},
	// 	{
	// 		value: 'number_of_entry',
	// 		label: t('edit.form.check_box.value.number_of_applications_settlements')
	// 	},
	// 	{
	// 		value: 'number_of_play',
	// 		label: t('edit.form.check_box.value.number_of_starts_checkins_clears')
	// 	},
	// 	{
	// 		value: 'player_info',
	// 		label: t('edit.form.check_box.value.player_attribute')
	// 	},
	// 	{
	// 		value: 'spot_utilize',
	// 		label: t('edit.form.check_box.value.usage_data_by_spot')
	// 	},
	// 	{
	// 		value: 'exchange',
	// 		label: t('edit.form.check_box.value.number_of_product_exchanges_per_store_exchange_user_information')
	// 	},
	// 	{
	// 		value: 'stock',
	// 		label: t('edit.form.check_box.value.inventory_and_limit_setting_by_product')
	// 	}
	// ]

	const eventPageDataOptions = [
		{
			value: 'event_detail_page_pv',
			label: t('edit.form.check_box.value.number_of_event_page_views')
		},
		{
			value: 'favorite',
			label: t('edit.form.check_box.value.number_of_favorites_added')
		},
		{
			value: 'transition_entry',
			label: t('edit.form.check_box.value.number_of_entry_page_transitions')
		},
		{
			value: 'entry_user',
			label: t('edit.form.check_box.value.user_registration_information')
		}
	]

	const entryPaymentDataOptions = [
		{
			value: 'number_of_entry',
			label: t('edit.form.check_box.value.number_of_applications_settlements')
		}
	]

	const playDataOptions = [
		{
			value: 'number_of_play',
			label: t('edit.form.check_box.value.number_of_starts_checkins_clears')
		},
		{
			value: 'player_info',
			label: t('edit.form.check_box.value.player_attribute')
		},
		{
			value: 'spot_utilize',
			label: t('edit.form.check_box.value.usage_data_by_spot')
		}
	]

	const currencyUsageDataOption = [
		{
			value: 'exchange',
			label: t('edit.form.check_box.value.number_of_product_exchanges_per_store_exchange_user_information')
		},
		{
			value: 'stock',
			label: t('edit.form.check_box.value.inventory_and_limit_setting_by_product')
		}
	]

	const exportAppOption = [
		{
			value: 'install',
			label: t('edit.form.check_box.value.total_number_of_installs')
		},
		{
			value: 'user',
			label: t('edit.form.check_box.value.user_attributes_of_all_installers')
		},
		{
			value: 'revenue',
			label: t('edit.form.check_box.value.overall_app_revenue')
		},
		{
			value: 'breakdown_of_revenue',
			label: t('edit.form.check_box.value.revenue_composition_event_breakdown')
		},
		{
			value: 'dau',
			label: t('edit.form.check_box.value.dau')
		},
		{
			value: 'wau',
			label: t('edit.form.check_box.value.wau')
		},
		{
			value: 'mau',
			label: t('edit.form.check_box.value.mau')
		},
		{
			value: 'breakdown_of_user_played',
			label: t('edit.form.check_box.value.breakdown_of_play_events_for_active_users')
		}
	]

	return {
		periodOptions,
		reportDisplayOptions,
		// exportEventOptions,
		exportAppOption,
		eventPageDataOptions,
		entryPaymentDataOptions,
		playDataOptions,
		currencyUsageDataOption
	}
}
