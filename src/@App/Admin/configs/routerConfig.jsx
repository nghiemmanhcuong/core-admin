import ListPage from '../pages/Event/ListPage'
import ListSpot from '../pages/Spot/ListSpot'
import EditSpot from '../pages/Spot/EditSpot'
import { ROUTER_ADMIN } from './constants'
import ListCourse from '../pages/Course/ListCourse'
import DetailCourse from '../pages/Course/DetailCourse'

/*
 * Created Date: 11-10-2022, 12:22:10 am
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
export const routerAdminConfig = [
	{
		path: ROUTER_ADMIN.event,
		element: <ListPage />
	},
	{
		path: ROUTER_ADMIN.spot.list,
		element: <ListSpot />
	},
	{
		path: ROUTER_ADMIN.spot.edit,
		element: <EditSpot />
	},
	{
		path: ROUTER_ADMIN.course,
		element: <ListCourse />
	},
	{
		path: ROUTER_ADMIN.courseDetail,
		element: <DetailCourse />
	}
]
