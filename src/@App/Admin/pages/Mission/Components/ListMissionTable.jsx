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
import MissionTableFilter from './MissionTableFilter'
import { TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'

const ListMissionTable = props => {
	const { t, missionTableHandler, handleDeleteMission } = useAdminPageContext()
	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no')
			}),
			columnHelper.accessor('mission_name', {
				header: t('label.name')
			}),
			columnHelper.accessor('clear_type', {
				header: t('label.condition'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.clear_type}</span>
				}
			}),
			columnHelper.accessor('app_currency', {
				header: t('label.app_currency'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.app_currency}</span>
				}
			}),
			columnHelper.accessor('app_currency_amount', {
				header: t('label.app_currency_amount')
			}),
			columnHelper.accessor('card_name', {
				header: t('label.card_name'),
				cell: ({ row }) => {
					return <span className="font-500">{row?.original?.card_name}</span>
				}
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionEdit
								onClick={() => navigate(ROUTER_ADMIN.mission.list + `/${data.id}`, { state: data })}
							/>
							<CoreActionDelete onConfirmDelete={() => handleDeleteMission(data.id)} />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<MissionTableFilter />
			<CoreTable
				isShowPagination
				columns={columns}
				{...missionTableHandler}
				data={missionTableHandler?.missions}
			/>
			<Box className="flex justify-end">
				{/* <Typography variant="h3" color="primary" className='px-40' sx={{ border: '1px solid #cccc' }}>
					{t('edit.form.label.situation')}
				</Typography> */}
			</Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(ListMissionTable)
