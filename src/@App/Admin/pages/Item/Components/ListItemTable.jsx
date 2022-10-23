/*
 * Created Date: 22-10-2022, 10:25:43 pm
 * Author: Hai Tran
 * Email: you@you.you
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemTableFilter from './ItemTableFilter'
// import PropTypes from 'prop-types'

const ListItemTable = props => {
	const { t, itemTableHandler, handleDeleteItem } = useAdminPageContext()
	const navigate = useNavigate()

	const columns = useMemo(
		() => [
			columnHelper.accessor('id', {
				header: t('column.no')
			}),
			columnHelper.accessor('name', {
				header: t('column.name')
			}),
			columnHelper.accessor('unit', {
				header: t('column.unit')
			}),
			columnHelper.accessor('from_date', {
				header: t('column.from_date')
			}),
			columnHelper.accessor('to_date', {
				header: t('column.to_date')
			}),
			columnHelper.accessor('inventory', {
				header: t('column.inventory')
			}),
			columnHelper.accessor('area', {
				header: t('column.area')
			}),
			columnHelper.accessor('action', {
				header: t('column.action'),
				maxSize: 200,
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => navigate(ROUTER_ADMIN.item.edit)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.item.edit)} />
							<CoreActionDelete onConfirmDelete={() => handleDeleteItem(data.id)} />
						</div>
					)
				}
			})
		],
		[t]
	)

	return (
		<Box>
			<ItemTableFilter />
			<CoreTable isShowPagination columns={columns} {...itemTableHandler} />
		</Box>
	)
}

// ListItemTable.defaultProps = {}

// ListItemTable.propTypes = {}

export default React.memo(ListItemTable)
