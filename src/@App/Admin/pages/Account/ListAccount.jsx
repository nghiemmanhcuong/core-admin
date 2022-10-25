/*
 * Created Date: 24-10-2022, 11:12:17 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: use
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
import { Box, Button } from '@mui/material'
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
				content={
					<>
						<ListAccountTable />
						<Box className='text-right mt-80 pr-20'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.account.list + '/new')}
								className='text-16 py-4'
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
			}
			/>
		</ListAccountProvider>
	)
}

export default React.memo(ListAccount)