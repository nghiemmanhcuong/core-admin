import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListCurrencyProvider from './ListCurrencyProvider'
import ListCurrencyTable from './Components/ListCurrencyTable'
import { Box, Button } from '@mui/material'

const ListCourse = props => {
    const { t } = useTranslation(TRANSLATE_ADMIN.course)
	return (
		<ListCurrencyProvider t={t}>
			<AdminContentPage
				pageTitle="アプリ内通貨一覧"
				content={<>
					<ListCurrencyTable />
					<Box className='my-40 mr-40 text-right'>
						<Button
							variant="contained"
							color="primary"
							onClick={() => console.log('============= navigate page add new')}
							className='bg-blue text-18 w-160 '
						>
							{t('common:btn.add')}
						</Button>

					</Box>
				</>
			}
			/>
		</ListCurrencyProvider>
	)
}



export default React.memo(ListCourse)