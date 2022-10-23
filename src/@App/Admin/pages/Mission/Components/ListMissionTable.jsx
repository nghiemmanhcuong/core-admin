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
	const { t, missionTableHandler } = useAdminPageContext()
	const navigate = useNavigate()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no')
			}),
			columnHelper.accessor('code', {
				header: t('label.name')
			}),
			columnHelper.accessor('name', {
				header: t('label.area')
			}),
			columnHelper.accessor('address', {
				header: t('label.type')
			}),
			columnHelper.accessor('phone', {
				header: t('label.lat_long')
			})
		]
	}, [t])

	return (
		<Box>
			<MissionTableFilter />
			<CoreTable isShowPagination columns={columns} {...missionTableHandler} />
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
