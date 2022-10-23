/*
 * Created Date: 21-10-2022, 10:26:09 pm
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
import NotificationTableFilter from './NotificationTableFilter'
// import PropTypes from 'prop-types'

const ListNotificationTable = props => {
	const navigate = useNavigate()
	const { t, notificationTableHandler, handleDeleteNotification } = useAdminPageContext()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				header: t('column.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('title', {
				header: t('column.title')
			}),
			columnHelper.accessor('type', {
				header: t('column.type')
			}),
			columnHelper.accessor('from_date', {
				header: t('column.from_date')
			}),
			columnHelper.accessor('to_date', {
				header: t('column.to_date')
			}),
			,
			columnHelper.accessor('action', {
				header: t('column.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => navigate(ROUTER_ADMIN.notification.edit)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.notification.edit)} />
							<CoreActionDelete onConfirmDelete={() => handleDeleteNotification(data.id)} />
						</div>
					)
				}
			})
		]
	}, [t])
	return (
		<Box>
			<NotificationTableFilter />
			<CoreTable isShowPagination columns={columns} {...notificationTableHandler} />
		</Box>
	)
}

// ListNotificationTable.defaultProps = {}

// ListNotificationTable.propTypes = {}

export default React.memo(ListNotificationTable)
