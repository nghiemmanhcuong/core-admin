/*
 * Created Date: 24-10-2022, 11:13:28 pm
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Tue Oct 25 2022
 * Modified By: use
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, CircularProgress } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import EditAccountForm from './components/EditAccountForm'
import ListAccountProvider from './ListAccountProvider'
import { useAccountDetail } from './hooks/useAccountDetail'

const EditAccount = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.account)
    const {isEdit, account, loadingAccount} = useAccountDetail()
    // const {state} = useLocation();
    // const { data } = state
	const navigate = useNavigate()
	return (
		<ListAccountProvider t={t}>
			<AdminContentPage
				pageTitle={t('title.detail_account')}
				// headerAction={
				// 	<Button variant="contained" color="error" onClick={() => navigate(ROUTER_ADMIN.account.list)}>
				// 		{t('common:btn.back')}
				// 	</Button>
				// }
				content={
                    loadingAccount ? (
                        <div className='mt-40 text-center'>
                            <CircularProgress />
                        </div>
                    ) : (
                        <EditAccountForm isEdit={isEdit} account={account} />
                    )
                }
			/>
		</ListAccountProvider>
	)
}

export default React.memo(EditAccount)