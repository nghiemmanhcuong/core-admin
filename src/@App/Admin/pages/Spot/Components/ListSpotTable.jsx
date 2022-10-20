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
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import SpotTableFilter from './SpotTableFilter'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'

const ListSpotTable = props => {
	const { t, spotTableHandler } = useAdminPageContext()
	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no')
			}),
			columnHelper.accessor('code', {
				header: t('label.code')
			}),
			columnHelper.accessor('name', {
				header: t('label.name')
			}),
			columnHelper.accessor('address', {
				header: t('label.address')
			}),
			columnHelper.accessor('phone', {
				header: t('label.phone')
			}),
			columnHelper.accessor('point', {
				header: t('label.point')
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => console.log('============= data', data)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.spot.list + `/${data.id}`)} />
							<CoreActionDelete onClick={() => console.log('============= data', data)} />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<SpotTableFilter />
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

export default React.memo(ListSpotTable)
