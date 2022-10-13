/*
 * Created Date: 12-10-2022, 4:22:01 pm
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

import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
// import PropTypes from 'prop-types'

const FormAutocomplete = ({ id, options = [], label = '', placeholder, ...resProps }) => {
	return (
		<Autocomplete
			id={id}
			options={options}
			renderInput={params => <TextField {...params} placeholder={placeholder} />}
			// placeholder={placeholder}
			{...resProps}
		/>
	)
}

//FormAutocomplete.defaultProps = {}

//FormAutocomplete.propTypes = {}

export default React.memo(FormAutocomplete)
