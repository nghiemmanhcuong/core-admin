/*
 * Created Date: 06-11-2022, 11:39:06 pm
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

import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import CoreDialog from '@Core/components/Dialog/CoreDialog'
import { CircularProgress, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const DetailAccountDialog = props => {
	const { open, handleCloseDetailAccount, accountData, loadingAccount } = props
	const { t } = useTranslation(TRANSLATE_ADMIN.account)
	console.log('============= accountData', accountData)

	const renderDialogContent = () => {
		if (loadingAccount) {
			return (
				<Box className="text-center">
					<CircularProgress />
				</Box>
			)
		}
		return (
			<Table
				className="w-full"
				sx={{
					'& td': {
						borderWidth: 1,
						borderColor: '#CCC',
						py: 1,
						'&.attr-key': {
							borderRight: 'none'
						},
						'&.attr-value': {
							borderLeft: 'none',
							fontWeight: 600
						}
					}
				}}
			>
				<colgroup>
					<col className="w-1/4" />
					<col className="w-1/4" />
					<col className="w-1/4" />
					<col className="w-1/4" />
				</colgroup>
				<TableBody className="border-1">
					<TableRow>
						<TableCell className="attr-key">{t('label.name')}</TableCell>
						<TableCell className="attr-value">{accountData?.name}</TableCell>
						<TableCell className="attr-key">{t('label.mail')}</TableCell>
						<TableCell className="attr-value">{accountData?.mail}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="attr-key">{t('label.role')}</TableCell>
						<TableCell className="attr-value">{accountData?.role}</TableCell>
						<TableCell className="attr-key">{t('label.roll')}</TableCell>
						<TableCell className="attr-value">{accountData?.roll}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		)
	}

	return (
		<CoreDialog
			open={open}
			handleClose={handleCloseDetailAccount}
			dialogTitle={accountData?.name}
			maxWidth="md"
			dialogContent={open && renderDialogContent()}
		/>
	)
}

// DetailAccountDialog.defaultProps = {}

// DetailAccountDialog.propTypes = {}

export default React.memo(DetailAccountDialog)
