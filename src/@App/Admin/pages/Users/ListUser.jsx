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
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListUserProvider from './ListUserProvider'
import ListUserTable from './Components/ListUserTable'
import { Button } from '@mui/material'

const ListUser = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.user)

	return (
		<ListUserProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.list_user')}
				headerAction={
					<Button
						variant="contained"
						color="primary"
						onClick={() => console.log('============= navigate page add new')}
					>
						{t('common:btn.new')}
					</Button>
				}
				content={<ListUserTable />}
			/>
		</ListUserProvider>
	)
}

export default React.memo(ListUser)
