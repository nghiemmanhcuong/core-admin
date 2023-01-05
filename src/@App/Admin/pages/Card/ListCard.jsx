/*
 * Created Date: 14-11-2022, 9:43:33 pm
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
import { ROUTER_ADMIN, TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import CardProvider from './CardProvider'
import ListCardTable from './Components/ListCardTable'
// import PropTypes from 'prop-types'

const ListCard = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.card)
	const navigate = useNavigate()

	return (
		<CardProvider>
			<AdminContentPage
				pageTitle={'カード一覧'}
				content={
					<>
						<ListCardTable />
						<Box className='my-40 mr-20 text-right'>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate(ROUTER_ADMIN.card.list + '/new')}
								className="bg-blue"
							>
								{t('common:btn.add')}
							</Button>
						</Box>
					</>
				}
			/>
		</CardProvider>
	)
}

// ListCard.defaultProps = {}

// ListCard.propTypes = {}

export default React.memo(ListCard)
