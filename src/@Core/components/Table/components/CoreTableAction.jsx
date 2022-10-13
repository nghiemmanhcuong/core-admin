import { IconButton, Tooltip, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BiEdit, BiShow, BiTrash } from 'react-icons/bi'

/*
 * Created Date: 04-09-2022, 9:42:53 am
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
export const CoreActionEdit = ({ onClick = () => {}, disabled = false }) => {
	const { t } = useTranslation('common')
	if (disabled) {
		return (
			<IconButton disabled color="primary">
				<BiEdit />
			</IconButton>
		)
	}
	return (
		<Tooltip title={t('btn.edit')}>
			<IconButton onClick={onClick} color="primary">
				<BiEdit />
			</IconButton>
		</Tooltip>
	)
}

export const CoreActionView = ({ onClick = () => {}, title = null, placement }) => {
	const { t } = useTranslation('common')
	const theme = useTheme()
	return (
		<Tooltip title={title ?? t('btn.view')} placement={placement}>
			<IconButton style={{ color: theme.palette.success.main }} onClick={onClick}>
				<BiShow />
			</IconButton>
		</Tooltip>
	)
}

export const CoreActionDelete = ({ onClick = () => {}, disabled = false }) => {
	const { t } = useTranslation('common')
	if (disabled) {
		return (
			<IconButton onClick={onClick} color="error" disabled={disabled}>
				<BiTrash />
			</IconButton>
		)
	}
	return (
		<Tooltip title={t('btn.delete')}>
			<IconButton onClick={onClick} color="error">
				<BiTrash />
			</IconButton>
		</Tooltip>
	)
}
