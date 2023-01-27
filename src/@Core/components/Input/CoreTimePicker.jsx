/*
 * Created Date: 27-01-2023, 1:31:20 pm
 * Author: Hai Tran
 * Email: you@you.you
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2023 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { FormHelperText, Icon, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useController } from 'react-hook-form'
// import PropTypes from 'prop-types'

const CoreTimePicker = ({
	className = '',
	label = '',
	control,
	name = '',
	defaultValue,
	rules,
	required = false,
	helperText,
	placeholder = '',
	size = '',
	disabled = false,
	readOnly
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
			// onClick={onClick}
			InputProps={{
				endAdornment: (
					<>
						{value ? (
							<Icon
								onClick={() => onChange(null)}
								fontSize="small"
								className="cursor-pointer rounded-full"
							>
								close
							</Icon>
						) : null}
						<Icon className="cursor-pointer" onClick={onClick}>
							access_time
						</Icon>
					</>
				)
			}}
			ref={ref}
			error={!!error}
			inputProps={{
				readOnly: true
			}}
			size={size}
			placeholder={placeholder}
			disabled={disabled}
		/>
	))

	const renderLabel = () => {
		return (
			<Typography component="div" variant="body2" className="flex items-center mb-4">
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
			{label !== '' ? renderLabel() : null}
			<ReactDatePicker
				selected={value}
				onChange={date => onChange(date)}
				customInput={<CustomInput />}
				ref={ref}
				showTimeSelect
				showTimeSelectOnly
				timeCaption="Time"
				timeFormat="HH:mm:ss"
				dateFormat="HH:mm:ss"
				timeIntervals={5}
				disabled={disabled}
			/>
			{helperText && <FormHelperText>{helperText}</FormHelperText>}
			{error && error.message && <FormHelperText error>{error.message}</FormHelperText>}
		</Box>
	)
}

// CoreTimePicker.defaultProps = {}

// CoreTimePicker.propTypes = {}

export default React.memo(CoreTimePicker)
