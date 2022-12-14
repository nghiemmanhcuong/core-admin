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
import AdminContentPage from '../../components/Layout/AdminContentPage'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import ListTagProvider from './ListTagProvider'
import DetailTagForm from './Components/DetailTagForm'
import { useTagDetail } from './hooks/useTagDetail'
import { Box, CircularProgress } from '@mui/material'

const DetailTag = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.tag)
	const { isEdit, tag, loadingTag, id } = useTagDetail()

	return loadingTag ? (
		<Box className="text-center mt-40">
			<CircularProgress />
		</Box>
	) : (
		<ListTagProvider t={t}>
			<AdminContentPage pageTitle={t('title.tag')} content={<DetailTagForm tag={tag} isEdit={isEdit} />} />
		</ListTagProvider>
	)
}

export default React.memo(DetailTag)
