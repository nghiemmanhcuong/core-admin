/*
 * Created Date: 23-10-2022, 2:37:40 pm
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
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import MaintainceForm from './Components/MaintainceForm'
import MaintainceProvider from './MaintainceProvider'
// import PropTypes from 'prop-types'

const Maintaince = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.maintaince)
	useEffect(() => {
		document.title = 'Achievements'
	}, [])
	return (
		<MaintainceProvider t={t}>
			<AdminContentPage pageTitle={t('title.event')} content={<MaintainceForm />} />
		</MaintainceProvider>
	)
}

// Maintaince.defaultProps = {}

// Maintaince.propTypes = {}

export default React.memo(Maintaince)
