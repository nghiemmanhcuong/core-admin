/*
 * Created Date: 10-10-2022, 11:20:18 pm
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
import React from 'react'
// import PropTypes from 'prop-types'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import defaultTheme from '../../@Core/components/CoreAppTheme/defaultTheme'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const AdminCms = props => {}

//Admin.defaultProps = {}

//Admin.propTypes = {}

export default React.memo(AdminCms)
