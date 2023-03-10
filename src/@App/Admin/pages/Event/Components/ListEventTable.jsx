import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import {
	CoreActionDelete,
	CoreActionEdit,
	CoreActionReview,
	CoreActionView
} from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import EventFilter from './EventFilter'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmDialog from '@Core/components/Dialog/ConfirmDialog'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'
import { renderTextTruncate } from '@App/Admin/hooks/useHelpRender'
import { useEventReviewDialog } from './hooks/useEventReviewDialog'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import { IconButton } from '@mui/material'
import { useEventDetailDialog } from './hooks/useEventDetailDialog'

const ListEventTable = props => {
	const { t, eventTableHandler, handleDeleteEvent } = useAdminPageContext()
	const { handleOpen, handleClose, renderEventReview } = useEventReviewDialog()
	const { handleOpenEventDetail, handleCloseEventDetail, renderEventDetail } = useEventDetailDialog()
	const navigate = useNavigate()

	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('title', {
				className: 'w-[20%] whitespace-normal',
				header: t('label.title'),
				cell: info => renderTextTruncate(info.getValue())
			}),
			columnHelper.accessor('venue', {
				header: t('label.venue'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.venue}</span>
				}
			}),
			columnHelper.accessor('event_start', {
				header: t('label.event_start'),
				cell: ({ row }) => {
					return (
						row?.original?.event_start &&
						row?.original?.event_end && (
							<span className="font-500">{`${moment(row?.original?.event_start).format(
								'YYYY/MM/DD'
							)} ~ ${moment(row?.original?.event_end).format('YYYY/MM/DD')}`}</span>
						)
					)
				}
			}),
			columnHelper.accessor('reception_start', {
				header: t('label.reception_start'),
				cell: ({ row }) => {
					return (
						row?.original?.reception_start &&
						row?.original?.reception_end && (
							<span className="font-500">{`${moment(row?.original?.reception_start).format(
								'YYYY/MM/DD'
							)} ~ ${moment(row?.original?.reception_end).format('YYYY/MM/DD')}`}</span>
						)
					)
				}
			}),
			columnHelper.accessor('tag', {
				header: t('label.tag'),
				className: 'w-[10%]',
				cell: ({ row }) => {
					return row?.original?.tag?.map((item, index) => {
						return (
							<span key={index} className="mb-4 bg-grey-300 p-4 font-500 rounded-4 m-4">
								{item}
							</span>
						)
					})
				}
			}),
			columnHelper.accessor('publish', {
				header: t('label.status'),
				cell: ({ row }) => {
					return (
						<span className="font-500">
							{row?.original?.publish === 1 ? t('label.publish') : t('label.unpublish')}
						</span>
					)
				}
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							{/* <CoreActionView onClick={() => handleOpenEventDetail(data)} /> */}
							<CoreActionReview onClick={() => handleOpen(data?.id)} />
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.event.list + `/${data.id}`, { state: data })}
							/>
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
			{renderEventReview()}
			{renderEventDetail()}
		</Box>
	)
}

export default React.memo(ListEventTable)
