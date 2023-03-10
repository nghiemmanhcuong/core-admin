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

import React, { useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import TableFilter from './Components/SpotTableFilter'
import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListSpotProvider from './ListSpotProvider'
import ListSpotTable from './Components/ListSpotTable'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListSpot = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.spot)
	const navigate = useNavigate()
	useEffect(() => {
		document.title = 'ในใใใ'
	}, [])
	return (
		<ListSpotProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.spot')}
				content={
					<>
						<ListSpotTable />
						<Box className='my-40 mr-20 text-right'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.spot.list + '/new')}
								className="bg-blue h-32"
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
				}
			/>
		</ListSpotProvider>
	)
}

export default React.memo(ListSpot)
