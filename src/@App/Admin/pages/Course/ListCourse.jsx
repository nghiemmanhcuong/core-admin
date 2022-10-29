import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListCourseProvider from './ListCourseProvider'
import ListCourseTable from './Components/ListCourseTable'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListCourse = props => {
    const { t } = useTranslation(TRANSLATE_ADMIN.course)
	const navigate = useNavigate()
	return (
		<ListCourseProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.course')}
			
				content={
					<>
						<ListCourseTable />
			
						<Box className='my-40 mr-40 text-right'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.course + '/new')}
								className='bg-blue text-18 w-160 '
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
				}
			/>
		</ListCourseProvider>
	)
}



export default React.memo(ListCourse)