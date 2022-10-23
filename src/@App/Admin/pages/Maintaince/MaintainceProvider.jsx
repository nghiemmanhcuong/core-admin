/*
 * Created Date: 23-10-2022, 2:37:14 pm
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

import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import React from 'react'
// import PropTypes from 'prop-types'

const MaintainceProvider = props => {
	return <AdminPageProvider>{props.children}</AdminPageProvider>
}

// MaintainceProvider.defaultProps = {}

// MaintainceProvider.propTypes = {}

export default React.memo(MaintainceProvider)
