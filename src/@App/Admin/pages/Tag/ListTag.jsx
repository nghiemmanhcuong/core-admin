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
import ListTagProvider from './ListTagProvider'
import ListTagTable from './Components/ListTagTable'
import { Button } from '@mui/material'

const ListTag = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.tag)

	return (
		<ListTagProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.list_tag')}
				
				content={<>
					<ListTagTable />
					<Box className='text-right my-40 mr-40'>
						<Button
							variant="contained"
							color="primary"
							onClick={() => console.log('============= navigate page add new')}
							className='px-20 w-160 bg-[#007BFF] text-18'
						>
							{t('common:btn.add')}
						</Button>
					</Box>
				</>}
			/>
		</ListTagProvider>
	)
}

export default React.memo(ListTag)
