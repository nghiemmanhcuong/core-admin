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
import { CoreActionDelete, CoreActionEdit, CoreActionView } from './CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import TagTableFilter from './TagTableFilter'
import { useNavigate } from 'react-router-dom'
import { ROUTER_ADMIN } from '../../../configs/constants'

const ListTagTable = props => {
	const navigate = useNavigate()
	const { t, tagTableHandler } = useAdminPageContext()
	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('title.no')
			}),
			columnHelper.accessor('name', {
				header: t('title.name')
			}),
			columnHelper.accessor('image', {
				header: t('title.image')
			}),
			columnHelper.accessor('action', {
				header: t('title.action'),
				cell: ({ row }) => {
					const data = row.original
					return (
						<div className="flex">
							<CoreActionView onClick={() => navigate(ROUTER_ADMIN.tag.detail)} />
							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.tag.detail)} />
							<CoreActionDelete onClick={() => console.log('============= data', data)} title="asdasd" content='asdasdasd' />
						</div>
					)
				}
			})
		]
	}, [t])

	return (
		<Box>
			<TagTableFilter />
			<CoreTable isShowPagination columns={columns} {...tagTableHandler} />
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

export default React.memo(ListTagTable)
