/*
 * Created Date: 23-10-2022, 3:04:59 pm
 * Author: Hai Tran
 * Email: you@you.you
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

import AdminContentPage from '@App/Admin/components/Layout/AdminContentPage'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'
import MaintainceProvider from '../MaintainceProvider'
import MaintainceConfigForm from './Components/MaintainceConfigForm'
// import PropTypes from 'prop-types'

const MaintainceConfig = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)

	return (
		<MaintainceProvider>
			<AdminContentPage pageTitle={t('title.maintaince')} content={<MaintainceConfigForm />} />
		</MaintainceProvider>
	)
}

// MaintainceConfig.defaultProps = {}

// MaintainceConfig.propTypes = {}

export default React.memo(MaintainceConfig)
