import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListCurrencyProvider from './ListCurrencyProvider'
import ListCurrencyTable from './Components/ListCurrencyTable'
import { Button } from '@mui/material'

const ListCourse = props => {
    const { t } = useTranslation(TRANSLATE_ADMIN.course)
	return (
		<ListCurrencyProvider t={t}>
			<AdminContentPage
				pageTitle="アプリ内通貸"
				headerAction={
					<Button
						variant="contained"
						color="primary"
						onClick={() => console.log('============= navigate page add new')}
					>
						{t('common:btn.new')}
					</Button>
				}
				content={<ListCurrencyTable />}
			/>
		</ListCurrencyProvider>
	)
}



export default React.memo(ListCourse)