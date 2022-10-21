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
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListSpotProvider from './ListSpotProvider'
import EditSpotTabs from './Components/EditSpotTabs'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const EditSpot = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.spot)
	const navigate = useNavigate()
	return (
		<ListSpotProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.spot')}
				headerAction={
					<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.spot.list)}>
						{t('common:btn.back')}
					</Button>
				}
				content={<EditSpotTabs />}
			/>
		</ListSpotProvider>
	)
}

export default React.memo(EditSpot)
