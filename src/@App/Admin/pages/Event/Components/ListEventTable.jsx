import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import EventFilter from './EventFilter'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmDialog from '@Core/components/Dialog/ConfirmDialog'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'

const ListEventTable = props => {
	const { t, eventTableHandler } = useAdminPageContext()
	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: 'No',
				className: 'w-[5%]'
			}),
			columnHelper.accessor('name', {
				header: 'イベントタイトル'
			}),
			columnHelper.accessor('area', {
				header: '開催地'
			}),
			columnHelper.accessor('range', {
				header: '開催年月日'
			}),
			columnHelper.accessor('amount', {
				header: '受付年月日'
			}),
			columnHelper.accessor('physical', {
				header: 'タグ情報'
			}),
			columnHelper.accessor('author', {
				header: '状態'
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => console.log('============= data', data)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.event + `/${data.id}`)} />
							<CoreActionDelete />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<EventFilter />
			<CoreTable isShowPagination columns={columns} {...eventTableHandler} />
		</Box>
	)
}

export default React.memo(ListEventTable)
