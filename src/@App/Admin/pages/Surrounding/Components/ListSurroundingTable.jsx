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
import SurroundingTableFilter from './SurroundingTableFilter'
import { TextField, Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'

const ListSurroundingTable = props => {
	const { t, surroundingTableHandler, handleDeleteSurrounding } = useAdminPageContext()
	const navigate = useNavigate()
	const location = useLocation()

	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('name', {
				header: t('label.name')
			}),
			columnHelper.accessor('address', {
				header: t('label.area')
			}),
			columnHelper.accessor('type', {
				header: t('label.type')
			}),
			columnHelper.accessor('position', {
				header: t('label.lat_long'),
				cell: ({ row }) => {
					return `${row?.original?.location_info_latitude} ・ ${row?.original?.location_info_longitude}`
				}
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				// size: 200,
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							{/* <CoreActionView onClick={() => navigate(ROUTER_ADMIN.spot.edit)} /> */}
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.surrounding.list + `/${data.id}`, { state: data })}
							/>
							<CoreActionDelete onConfirmDelete={() => handleDeleteSurrounding(data.id)} />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<SurroundingTableFilter />
			<CoreTable
				isShowPagination
				columns={columns}
				{...surroundingTableHandler}
				data={surroundingTableHandler?.surrounding_info}
			/>
			<Box className="flex justify-end">
				{/* <Typography variant="h3" color="primary" className='px-40' sx={{ border: '1px solid #cccc' }}>
					{t('edit.form.label.situation')}
				</Typography> */}
				<TextField type="file" />
				<Button variant="contained" color="primary" className="ml-[2px]">
					{t('btn.upload')}
				</Button>
			</Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(ListSurroundingTable)
