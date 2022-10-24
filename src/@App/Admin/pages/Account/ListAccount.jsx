/*
 * Created Date: 24-10-2022, 11:12:17 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Mon Oct 24 2022
 * Modified By: TheAnh58
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ListAccountProvider from './ListAccountProvider'
import ListAccountTable from './components/ListAccountTable'

const ListAccount = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.account)
	const navigate = useNavigate()
	return (
		<ListAccountProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.account')}
				headerAction={
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate(ROUTER_ADMIN.account.list + '/new')}
					>
						{t('common:btn.new')}
					</Button>
				}
				content={<ListAccountTable />}
			/>
		</ListAccountProvider>
	)
}

export default React.memo(ListAccount)