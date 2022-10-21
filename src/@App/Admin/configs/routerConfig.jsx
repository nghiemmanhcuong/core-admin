import { ROUTER_ADMIN } from './constants'
import ListCourse from '../pages/Course/ListCourse'
import DetailCourse from '../pages/Course/DetailCourse'
import React from 'react'
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

const LazyEventList = React.lazy(() => import('../pages/Event/ListPage'))
const LazySpotList = React.lazy(() => import('../pages/Spot/ListSpot'))
const LazySpotDetail = React.lazy(() => import('../pages/Spot/EditSpot'))
const LazyUserList = React.lazy(() => import('../pages/Users/ListUser'))
const LazyUserDetail = React.lazy(() => import('../pages/Users/EditUser'))
const LazyTagDetail = React.lazy(() => import('../pages/Tag/DetailTag'))
const LazyTagList = React.lazy(() => import('../pages/Tag/ListTag'))

export const routerAdminConfig = [
	{
		path: ROUTER_ADMIN.event,
		element: <LazyEventList />
	},
	{
		path: ROUTER_ADMIN.spot.list,
		element: <LazySpotList />
	},
	{
		path: ROUTER_ADMIN.spot.edit,
		element: <LazySpotDetail />
	},
	{
		path: ROUTER_ADMIN.course,
		element: <ListCourse />
	},
	{
		path: ROUTER_ADMIN.courseDetail,
		element: <DetailCourse />
	},
	{
		path: ROUTER_ADMIN.user.list,
		element: <LazyUserList />
	},
	{
		path: ROUTER_ADMIN.user.edit,
		element: <LazyUserDetail />
	},
	{
		path: ROUTER_ADMIN.tag.detail,
		element: <LazyTagDetail />
	},
	{
		path: ROUTER_ADMIN.tag.list,
		element: <LazyTagList />
	}
]
