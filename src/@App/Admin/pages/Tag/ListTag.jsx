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
import { Box } from '@mui/system'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListTagProvider from './ListTagProvider'
import ListTagTable from './Components/ListTagTable'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ListTag = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.tag)
	const navigate = useNavigate()
	useEffect(() => {
		document.title = 'Tag'
	}, [])
	return (
		<ListTagProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.list_tag')}
				content={
					<>
						<ListTagTable />
						<Box className='my-40 mr-20 text-right'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.tag.list + '/create' + '/new')}
								className="bg-blue h-32"
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
				}
			/>
		</ListTagProvider>
	)
}

export default React.memo(ListTag)
