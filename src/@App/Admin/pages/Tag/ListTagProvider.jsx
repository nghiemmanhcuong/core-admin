/*
 * Created Date: 12-10-2022, 3:17:29 pm
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

import AdminPageProvider from '@App/Admin/components/Provider/AdminPageProvider'
import { tagSerivce } from '@App/Admin/services/tagService'
import useCoreTable from '@Core/components/Table/hooks/useCoreTable'
import { useRequest } from 'ahooks'
import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'

const ListTagProvider = props => {
	const requestTags = useRequest(tagSerivce.list, {
		manual: true
	})

	const { run: getTags } = requestTags

	const tagTableHandler = useCoreTable(requestTags)

	useEffect(() => {
		// tagTableHandler.handleFetchData()
		getTags()
	}, [])

	const data = {
		...props,
		tagTableHandler
	}

	return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>
}

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListTagProvider)
