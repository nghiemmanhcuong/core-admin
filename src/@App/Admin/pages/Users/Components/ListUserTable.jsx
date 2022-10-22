/*
 * Created Date: 12-10-2022, 3:36:47 pm
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'

import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import UserTableFilter from './UserTableFilter'
import { useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '../../../configs/constants'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'

const ListUserTable = props => {
	const navigate = useNavigate()
	const { t, spotTableHandler } = useAdminPageContext()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('title.no')
			}),
			columnHelper.accessor('code', {
				header: t('title.email')
			}),
			columnHelper.accessor('name', {
				header: t('title.name')
			}),
			columnHelper.accessor('address', {
				header: t('title.birthday')
			}),
			columnHelper.accessor('phone', {
				header: t('title.gender')
			}),
			columnHelper.accessor('point', {
				header: t('title.place')
			}),
			columnHelper.accessor('action', {
				header: t('title.action'),
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => navigate(ROUTER_ADMIN.user.edit)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.user.edit)} />
							<CoreActionDelete />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<UserTableFilter />
			<CoreTable isShowPagination columns={columns} {...spotTableHandler} />
			{/* <Box className="flex justify-end">
				<TextField type="file"/>
				<Button variant="contained" color="primary" className="ml-[2px]" >
					{t('btn.upload')}
				</Button>
			</Box> */}
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(ListUserTable)
