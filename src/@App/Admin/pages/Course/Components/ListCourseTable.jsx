import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import CourseFilter from './CourseFilter'
import {Link} from 'react-router-dom';
import ConfirmDialog from "@Core/components/Dialog/ConfirmDialog"

const ListCourseTable = props => {
	const { t, courseTableHandler } = useAdminPageContext()
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
							<Link to={`/admin/course-detail/${data.id}`} >
								<CoreActionEdit onClick={() => console.log('============= data', data)} />
							</Link>
							<ConfirmDialog title="course" content="Delete course" action={<CoreActionDelete/>} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<CourseFilter />
            <CoreTable isShowPagination columns={columns} {...courseTableHandler}/>
		</Box>
	)
}



export default React.memo(ListCourseTable)
