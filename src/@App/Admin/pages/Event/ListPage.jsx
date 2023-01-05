import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListEventProvider from './ListEventProvider'
import ListEventTable from './Components/ListEventTable'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListCourse = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.event)
	const navigate = useNavigate()
	return (
		<ListEventProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.event')}
				content={
					<>
						<ListEventTable />
						<Box className='my-40 mr-20 text-right'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.event.list + '/new')}
								className="bg-blue h-32"
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
				}
			/>
		</ListEventProvider>
	)
}

export default React.memo(ListCourse)
