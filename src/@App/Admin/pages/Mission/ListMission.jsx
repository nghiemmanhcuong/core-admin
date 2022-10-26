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
import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListMissionProvider from './ListMissionProvider'
import ListMissionTable from './Components/ListMissionTable'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListMission = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.mission)
	const navigate = useNavigate()
	return (
		<ListMissionProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.mission')}
				content={<>
					<ListMissionTable />
					<Box className='text-right my-40 mr-40'>
						<Button
						variant="contained"
						color="primary"
						className='bg-blue text-18 w-160'
						onClick={() => navigate(ROUTER_ADMIN.mission.list + '/new')}
						>
							{t('btn.new')}
						</Button>
					</Box>
				</>
			}
			/>
		</ListMissionProvider>
	)
}

export default React.memo(ListMission)
