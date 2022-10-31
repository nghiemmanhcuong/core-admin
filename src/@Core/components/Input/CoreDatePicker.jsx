/*
 * Created Date: 12-10-2022, 10:11:22 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By: use
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { FormHelperText, Icon, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { forwardRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useController } from 'react-hook-form'
// import PropTypes from 'prop-types'

const CoreDatePicker = ({
	className = '',
	label = '',
	control,
	name = '',
	defaultValue,
	rules,
	required = false,
	helperText,
	placeholder = '',
	size = ''
}) => {
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error }
	} = useController({
		control,
		name,
		defaultValue,
		rules
	})

	const CustomInput = forwardRef(({ value, onClick }, ref) => (
		<TextField
			fullWidth
			variant="outlined"
			value={value}
			onClick={onClick}
			InputProps={{
				endAdornment: <Icon>calendar_month</Icon>
			}}
			ref={ref}
			error={!!error}
			inputProps={{
				readOnly: true
			}}
			size={size}
			placeholder={placeholder}
		/>
	))

	const renderLabel = () => {
		return (
			<Typography component="div" variant="body2" className="flex items-center mb-4">
				{label} {required ? <Typography className="text-error mx-8">必須</Typography> : ''}
			</Typography>
		)
	}

	return (
		<Box
			className={className}
			sx={{
				'& .react-datepicker': {
					fontSize: '1.1rem',
					'& .react-datepicker__month': {
						margin: 1
					}
				}
			}}
		>
			{renderLabel()}
			<ReactDatePicker
				selected={value}
				onChange={date => onChange(date)}
				customInput={<CustomInput />}
				withPortal
				ref={ref}
				onCalendarClose={onBlur}
			/>
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
			{error && error.message && <FormHelperText error>{error.message}</FormHelperText>}
		</Box>
	)
}

//CoreDatePicker.defaultProps = {}

//CoreDatePicker.propTypes = {}

export default React.memo(CoreDatePicker)
