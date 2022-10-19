import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListEventProvider from './ListEventProvider'
import ListEventTable from './Components/ListEventTable'
import { Button } from '@mui/material'

const ListCourse = props => {
    const { t } = useTranslation(TRANSLATE_ADMIN.course)
	return (
		<ListEventProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.course')}
				headerAction={
					<Button
						variant="contained"
						color="primary"
						onClick={() => console.log('============= navigate page add new')}
					>
						{t('common:btn.new')}
					</Button>
				}
				content={<ListEventTable />}
			/>
		</ListEventProvider>
	)
}



export default React.memo(ListCourse)