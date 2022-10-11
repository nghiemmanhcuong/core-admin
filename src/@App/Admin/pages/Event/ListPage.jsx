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
// import PropTypes from 'prop-types'

const ListPage = props => {
	const { t } = useTranslation()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: 'ID'
			}),
			columnHelper.accessor('code', {
				header: t('label.code')
			}),
			columnHelper.accessor('name', {
				header: t('label.name')
			}),

			columnHelper.accessor('alias', {
				header: t('label.alias')
			}),
			columnHelper.accessor('description', {
				header: t('label.description')
			})
		]
	}, [t])
	return <AdminContentPage pageTitle="List Event" content={<CoreTable columns={columns} />} />
}

//ListPage.defaultProps = {}

//ListPage.propTypes = {}

export default React.memo(ListPage)
