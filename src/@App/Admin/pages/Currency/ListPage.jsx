import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import AdminContentPage from '../../components/Layout/AdminContentPage'
// import TableFilter from './Components/SpotTableFilter'
// import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListCurrencyProvider from './ListCurrencyProvider'
import ListCurrencyTable from './Components/ListCurrencyTable'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListCurrency = props => {
    const { t } = useTranslation(TRANSLATE_ADMIN.course)
	const navigate = useNavigate()

	return (
		<ListCurrencyProvider t={t}>
			<AdminContentPage
				pageTitle="アプリ内通貨一覧"
				content={<>
					<ListCurrencyTable />
					<Box className='my-40 mr-20 text-right'>
						<Button
							variant="contained"
							color="primary"
							onClick={() => navigate(ROUTER_ADMIN.currency.list + '/new')}
							className='bg-blue'
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



export default React.memo(ListCurrency)