import { ROUTER_ADMIN } from './constants'
import ListCourse from '../pages/Course/ListCourse'
import DetailCourse from '../pages/Course/DetailCourse'
import React from 'react'
import DetailEvent from '../pages/Event/DetailEvent'
import ListCurrency from '../pages/Currency/ListPage'
import DetailCurrency from '../pages/Currency/DetailCurrency'
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

const LazyHomePage = React.lazy(() => import('../pages/HomePage'))
const LazyEventList = React.lazy(() => import('../pages/Event/ListPage'))
const LazySpotList = React.lazy(() => import('../pages/Spot/ListSpot'))
const LazySpotDetail = React.lazy(() => import('../pages/Spot/EditSpot'))
const LazyUserList = React.lazy(() => import('../pages/Users/ListUser'))
const LazyUserDetail = React.lazy(() => import('../pages/Users/EditUser'))
const LazyTagDetail = React.lazy(() => import('../pages/Tag/DetailTag'))
const LazyTagList = React.lazy(() => import('../pages/Tag/ListTag'))
const LazySurroundingList = React.lazy(() => import('../pages/Surrounding/ListSurrounding'))
const SurroundingEdit = React.lazy(() => import('../pages/Surrounding/EditSurrounding'))
const LazyMissionList = React.lazy(() => import('../pages/Mission/ListMission'))
const LazyMissionDetail = React.lazy(() => import('../pages/Mission/DetailMission'))
const NotificationList = React.lazy(() => import('../pages/Notification/ListNotification'))
const NotificationEdit = React.lazy(() => import('../pages/Notification/DetailNotification'))
const ItemList = React.lazy(() => import('../pages/Item/ListItem'))
const ItemEdit = React.lazy(() => import('../pages/Item/EditItem'))
const Maintaince = React.lazy(() => import('../pages/Maintaince/Maintaince'))
const MaintainceConfig = React.lazy(() => import('../pages/Maintaince/MaintainceConfig/MaintainceConfig'))
const LazyAccountList = React.lazy(() => import('../pages/Account/ListAccount'))
const LazyAccountDetail = React.lazy(() => import('../pages/Account/EditAccount'))
const LazyCurrencyDetail = React.lazy(() => import('../pages/Currency/EditCurrency'))
const CardList = React.lazy(() => import('../pages/Card/ListCard'))
const CardEdit = React.lazy(() => import('../pages/Card/EditCard'))

// auth
const LazyLogin = React.lazy(() => import('../pages/Auth/Login'))

export const routerAuthConfig = [
	{
		path: ROUTER_ADMIN.auth.login,
		element: <LazyLogin />
	}
]

export const routerAdminConfig = [
	{
		path: ROUTER_ADMIN.event.list,
		children: [
			{
				path: '',
				element: <LazyEventList />
			},
			{
				path: ':id',
				element: <DetailEvent />
			}
		]
	},
	{
		path: ROUTER_ADMIN.spot.list,
		children: [
			{
				path: '',
				element: <LazySpotList />
			},
			{
				path: ':id',
				element: <LazySpotDetail />
			}
		]
	},
	{
		path: ROUTER_ADMIN.course,
		// element: <ListCourse />,
		children: [
			{
				path: '',
				element: <ListCourse />
			},
			{
				path: ':id',
				element: <DetailCourse />
			}
		]
	},

	{
		path: ROUTER_ADMIN.user.list,
		// element: <LazyUserList />,
		children: [
			{
				path: '',
				element: <LazyUserList />
			},
			{
				path: ':id',
				element: <LazyUserDetail />
			}
		]
	},

	{
		path: ROUTER_ADMIN.tag.list,
		children: [
			{
				path: '',
				element: <LazyTagList />
			},
			{
				path: ':id',
				element: <LazyTagDetail />
			}
		]
	},
	{
		path: ROUTER_ADMIN.surrounding.list,
		children: [
			{
				path: '',
				element: <LazySurroundingList />
			},
			{
				path: ':id',
				element: <SurroundingEdit />
			}
		]
	},
	{
		path: ROUTER_ADMIN.currency.list,
		// element: <ListCurrency />,
		children: [
			{
				path: '',
				element: <ListCurrency />
			},
			{
				path: ':id',
				element: <LazyCurrencyDetail />
			}
		]
	},
	{
		path: ROUTER_ADMIN.mission.list,
		// element: <LazyMissionList />,
		children: [
			{
				path: '',
				element: <LazyMissionList />
			},
			{
				path: ':id',
				element: <LazyMissionDetail />
			}
		]
	},
	{
		path: ROUTER_ADMIN.notification.list,
		// element: <NotificationList />,
		children: [
			{
				path: '',
				element: <NotificationList />
			},
			{
				path: ':id',
				element: <NotificationEdit />
			}
		]
	},

	{
		path: ROUTER_ADMIN.item.list,
		// element: <ItemList />
		children: [
			{
				path: '',
				element: <ItemList />
			},
			{
				path: ':id',
				element: <ItemEdit />
			}
		]
	},

	{
		path: ROUTER_ADMIN.performance.list,
		element: <Maintaince />
	},
	{
		path: ROUTER_ADMIN.maintaince.list,
		element: <MaintainceConfig />
	},
	{
		path: ROUTER_ADMIN.homePage,
		element: <LazyHomePage />
	},
	{
		path: ROUTER_ADMIN.account.list,
		// element: <LazyAccountList />
		children: [
			{
				path: '',
				element: <LazyAccountList />
			},
			{
				path: ':id',
				element: <LazyAccountDetail />
			}
		]
	},

	{
		path: ROUTER_ADMIN.card.list,
		// element: <CardList />
		children: [
			{
				path: '',
				element: <CardList />
			},
			{
				path: ':id',
				element: <CardEdit />
			}
		]
	}
]
