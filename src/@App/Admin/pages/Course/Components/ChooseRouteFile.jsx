/*
 * Created Date: 14-12-2022, 12:25:41 am
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

import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { useRef } from 'react'
import { useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const ChooseRouteFile = ({
	control = {},
	name = '',
	rules,
	required = false,
	label = '',
	helperText = '',
	hideButton,
	parentCallback = () => {}
}) => {
	const { t } = useTranslation('common')
	const inputRef = useRef()
	const [file, setFile] = useState()

	const {
		field: { onChange, value },
		fieldState: { error }
	} = useController({
		control,
		name,
		rules
	})

	const handleChangeInput = useCallback(
		async event => {
			const { files } = event.target

			console.log('============= file', files[0])
			if (files[0]) {
				setFile(files[0])
				onChange(files[0])
				parentCallback(true)
				// handlePreviewFile(files[0])
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[t]
	)

	const handleAddFile = () => {
		inputRef.current.click()
	}

	const handleDeleteFile = () => {
		setFile(null)
		onChange(null)
	}

	const renderLabel = () => {
		return (
			<Typography variant="h3" color="primary" className="flex items-center">
				<Typography
					className={clsx('text-black py-4 px-16 rounded-4 w-60  mx-8', required ? 'bg-yellow' : 'bg-white')}
				>
					{required ? '必須' : ''}
				</Typography>{' '}
				{label}
			</Typography>
		)
	}

	return (
		<Box className="flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20">
			<Box className="w-full sm:w-1/3 mt-12 mb-8 sm:mb-0">{renderLabel()}</Box>
			<Box className="flex flex-wrap sm:flex-nowrap space-x-12 w-full sm:w-2/3">
				<Box className="w-full sm:w-2/3 ">
					<Box className="border-1 mb-12 sm:mb-0 border-grey-400 w-full rounded-4">
						<TextField
							fullWidth
							variant="outlined"
							value={file ? file?.name : null}
							error={!!error}
							inputProps={{
								readOnly: true
							}}
						/>
					</Box>
					{error && error.message && <FormHelperText error>{error.message}</FormHelperText>}
				</Box>
				{!hideButton && (
					<Box className="w-full sm:w-1/3 self-center">
						<Button variant="contained" color="error" size="small" onClick={handleDeleteFile}>
							{t('btn.delete')}
						</Button>
						<Button
							variant="contained"
							color="primary"
							className="bg-[#58AAFF] mx-8"
							size="small"
							onClick={handleAddFile}
						>
							{t('btn.addition')}
						</Button>
					</Box>
				)}
			</Box>
			<input className="hidden" type="file" ref={inputRef} onChange={handleChangeInput} accept="kml" />
		</Box>
	)
}

// ChooseRouteFile.defaultProps = {}

// ChooseRouteFile.propTypes = {}

export default React.memo(ChooseRouteFile)
