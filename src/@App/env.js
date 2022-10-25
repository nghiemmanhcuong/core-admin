/*
 * Created Date: 11-10-2022, 8:45:53 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: Peter
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { isLocalhost } from '@Core/helper/Url'

export const env = {
	CMS_BASE_URL: isLocalhost() ? '/' : 'https://drake.aspr.work'
}
