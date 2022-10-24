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
	const { t, eventTableHandler, handleDeleteEvent } = useAdminPageContext()
	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('column.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('title', {
				header: t('column.title'),
				className: 'w-[20%] whitespace-normal'
			}),
			columnHelper.accessor('venue', {
				header: t('column.venue')
			}),
			columnHelper.accessor('event_start', {
				header: t('column.event_start')
			}),
			columnHelper.accessor('event_end', {
				header: t('column.event_end')
			}),
			columnHelper.accessor('tag', {
				header: t('column.tag'),
				className: 'w-[10%]',
				cell: ({ row }) => {
					return row?.original?.tag?.map((item, index) => {
						return <span className="mb-4 bg-grey-300 p-4 rounded-4 m-4">{item}</span>
					})
				}
			}),
			columnHelper.accessor('author', {
				header: t('column.author')
			}),
			columnHelper.accessor('action', {
				header: t('column.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => console.log('============= data', data)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.event + `/${data.id}`)} />
							<CoreActionDelete onConfirmDelete={() => handleDeleteEvent(data.id)} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<EventFilter />
			<CoreTable isShowPagination columns={columns} {...eventTableHandler} data={eventTableHandler?.events} />
		</Box>
	)
}

export default React.memo(ListEventTable)
