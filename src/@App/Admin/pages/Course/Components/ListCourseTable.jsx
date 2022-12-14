import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import CourseFilter from './CourseFilter'
import { Link, useNavigate } from 'react-router-dom'
import ConfirmDialog from '@Core/components/Dialog/ConfirmDialog'
import { ROUTER_ADMIN } from '@App/Admin/configs/constants'

const ListCourseTable = props => {
	const { t, courseTableHandler, handleDeleteCourse } = useAdminPageContext()
	const navigate = useNavigate()

	const columns = useMemo(() => {
		return [
			columnHelper.accessor('id', {
				cell: info => info.getValue(),
				header: t('label.no'),
				className: 'w-[5%]'
			}),
			columnHelper.accessor('course_name', {
				header: t('label.name')
			}),
			// columnHelper.accessor('area', {
			// 	header: t('label.area')
			// }),
			columnHelper.accessor('course_distance', {
				header: t('label.range')
			}),
			columnHelper.accessor('elevation', {
				header: t('label.amount')
			}),
			columnHelper.accessor('strength', {
				header: t('label.physical')
			}),
			columnHelper.accessor('author', {
				header: t('label.author')
			}),
			columnHelper.accessor('action', {
				header: t('label.action'),
				className: 'w-[15%]',
				cell: ({ row }) => {
					const data = row.original

					return (
						<div className="flex">
							{/* <CoreActionView onClick={() => console.log('============= data', data)} /> */}

							<CoreActionEdit onClick={() => navigate(ROUTER_ADMIN.course + `/${data?.id}`)} />

							<CoreActionDelete onConfirmDelete={() => handleDeleteCourse(data?.id)} />
						</div>
					)
				}
			})
		]
	})

	return (
		<Box>
			<CourseFilter />
			<CoreTable isShowPagination columns={columns} {...courseTableHandler} data={courseTableHandler.courses} />
		</Box>
	)
}

export default React.memo(ListCourseTable)
