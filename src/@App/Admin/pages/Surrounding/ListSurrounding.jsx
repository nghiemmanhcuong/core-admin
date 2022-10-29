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
import TableFilter from './Components/SurroundingTableFilter'
import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListSurroundingProvider from './ListSurroundingProvider'
import ListSpotTable from './Components/ListSurroundingTable'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListSurrounding = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.surrounding)
	const navigate = useNavigate()
	return (
		<ListSurroundingProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.surrounding')}
				content={
					<>
						<ListSpotTable />
						<Box className="text-right my-40 mr-40">
							<Button
								variant="contained"
								color="primary"
								className="bg-blue text-18 w-160"
								onClick={() => navigate(ROUTER_ADMIN.surrounding.list + '/new')}
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
				}
			/>
		</ListSurroundingProvider>
	)
}

export default React.memo(ListSurrounding)
