import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import EventFilter from './EventFilter'
import {Link} from 'react-router-dom';
import ConfirmDialog from "@Core/components/Dialog/ConfirmDialog"

const ListEventTable = props => {
	const { t, eventTableHandler } = useAdminPageContext()
	const [openDialogConfirm, setOpenDialogConfirm] = useState(false)
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no')
			}),
			columnHelper.accessor('name', {
				header: t('label.name')
			}),
			columnHelper.accessor('area', {
				header: t('label.area')
			}),
			columnHelper.accessor('range', {
				header: t('label.range')
			}),
			columnHelper.accessor('amount', {
				header: t('label.amount')
			}),
			columnHelper.accessor('physical', {
				header: t('label.physical')
			}),
			columnHelper.accessor('author', {
				header: t('label.author')
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => console.log('============= data', data)} />
							<Link to={`/admin/event-detail/${data.id}`} >
								<CoreActionEdit />
							</Link>
							<CoreActionDelete onClick={() => setOpenDialogConfirm(true)} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<EventFilter />
            <CoreTable isShowPagination columns={columns} {...eventTableHandler}/>
			<ConfirmDialog title="event" content="Delete event" aaaaaaaaa={openDialogConfirm} />
		</Box>
	)
}



export default React.memo(ListEventTable)
