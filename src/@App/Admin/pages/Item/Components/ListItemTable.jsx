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
				header: t('column.name'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.name}</span>
				}
			}),
			columnHelper.accessor('currency_of_consumption', {
				header: t('column.unit')
			}),
			columnHelper.accessor('available_start', {
				header: t('column.from_date')
			}),
			columnHelper.accessor('available_end', {
				header: t('column.to_date')
			}),
			columnHelper.accessor('stock', {
				header: t('column.inventory')
			}),
			columnHelper.accessor('exchange_area', {
				header: t('column.area'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.exchange_area}</span>
				}
			}),
			columnHelper.accessor('display', {
				header: t('column.status'),
				cell: ({ row }) => {
					return (
						<span className="font-500">
							{row?.original?.display === 1 ? '表示' : row?.original?.display === 0 ? '非表示' : null}
						</span>
					)
				}
			}),
			columnHelper.accessor('action', {
				header: t('column.action'),
				maxSize: 200,
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							{/* <CoreActionView onClick={() => navigate(ROUTER_ADMIN.item.edit)} /> */}
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.item.list + `/${data.id}`, { state: data })}
							/>
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
			<CoreTable
				isShowPagination
				columns={columns}
				{...itemTableHandler}
				data={itemTableHandler?.exchange_tickets}
			/>
		</Box>
	)
}

// ListItemTable.defaultProps = {}

// ListItemTable.propTypes = {}

export default React.memo(ListItemTable)
