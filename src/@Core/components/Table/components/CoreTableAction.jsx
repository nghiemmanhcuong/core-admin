import { useConfirm } from '@Core/components/Confirm/CoreConfirm'
import { IconButton, Tooltip, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BiEdit, BiShow, BiTrash } from 'react-icons/bi'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';


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

export const CoreActionReview = ({ onClick = () => {}, disabled = false }) => {
	const { t } = useTranslation('common')
	if (disabled) {
		return (
			<IconButton disabled color="primary">
				<RateReviewOutlinedIcon />
			</IconButton>
		)
	}
	return (
		<Tooltip title={t('btn.review')}>
			<IconButton onClick={onClick} color="primary">
				<RateReviewOutlinedIcon />
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

export const CoreActionDelete = ({ onConfirmDelete = () => {}, disabled = false }) => {
	const { t } = useTranslation('common')
	const confirm = useConfirm()

	const handleClickDelete = () => {
		confirm({
			content: t('table.delete_confirm'),
			color: 'error',
			onOk: onConfirmDelete,
			zIndex: 9999
		})
	}

	if (disabled) {
		return (
			<IconButton onClick={onClick} color="error" disabled={disabled}>
				<BiTrash />
			</IconButton>
		)
	}
	return (
		<Tooltip title={t('btn.delete')}>
			<IconButton onClick={handleClickDelete} color="error">
				<BiTrash />
			</IconButton>
		</Tooltip>
	)
}
