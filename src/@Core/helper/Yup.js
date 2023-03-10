/*
 * Created Date: 10-10-2022, 10:43:11 pm
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
import * as Yup from 'yup'
import { t } from '@system/i18n'

export { yupResolver } from '@hookform/resolvers/yup'

const REGEX = {
	PASSWORD: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
	PASSWORD_V2: /^(?=.*[a-z])(?=.*[A-Z]{1,})(?=(.*[\d]){1,}).{8,}$/
}

Yup.addMethod(Yup.string, 'password', function (errorMessage = t('common:validation.password_v2')) {
	return this.matches(REGEX.PASSWORD_V2, {
		message: errorMessage,
		excludeEmptyString: true
	})
})

export default Yup
