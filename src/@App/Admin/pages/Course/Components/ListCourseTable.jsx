import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import CourseFilter from './CourseFilter'

const ListCourseTable = props => {
	const { t, courseTableHandler } = useAdminPageContext()
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
							<CoreActionEdit onClick={() => console.log('============= data', data)} />
							<CoreActionDelete onClick={() => console.log('============= data', data)} />
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
