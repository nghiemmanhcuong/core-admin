import ListPage from '../pages/Event/ListPage'
import { ROUTER_ADMIN } from './constants'

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
	}
]
