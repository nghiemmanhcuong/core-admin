/*
 * Created Date: 11-10-2022, 12:31:21 am
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

import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import TableFilter from './Components/SpotTableFilter'
import { Box } from '@mui/system'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListSpotProvider from './ListSpotProvider'
import EditSpotTabs from './Components/EditSpotTabs'
import { Button } from '@mui/material'

const EditSpot = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.spot)

	return (
		<ListSpotProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.spot')}
				content={<EditSpotTabs />}
			/>
		</ListSpotProvider>
	)
}

export default React.memo(EditSpot)
