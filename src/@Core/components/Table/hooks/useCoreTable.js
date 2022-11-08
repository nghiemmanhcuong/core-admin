/*
 * Created Date: 16-08-2022, 9:49:54 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

// import { DEFAULT_PAGE_SIZE } from '@App/core/constants'

import { DEFAULT_RESPONSE } from '@Core/api/BaseService'
import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// import { useConfirm } from '../../Confirm/CoreConfirm'

let params = {
	per_page: 10
}
const useCoreTable = requestFetchData => {
	const { t } = useTranslation('common')

	const { data = DEFAULT_RESPONSE, loading, runAsync } = requestFetchData

	// const [queryUrl, setQueryUrl] = useUrlState()
	const handleFetchData = useCallback(query => {
		params = {
			...params,
			...query
		}
		return runAsync(params)
	}, [])

	return {
		...data,
		pageIndex: data?.page - 1 ?? 0, //data?.current_page ? data?.current_page - 1 : 0,
		pageSize: data?.per_page ?? 10,
		loading,
		handleFetchData
	}
}

export default useCoreTable
