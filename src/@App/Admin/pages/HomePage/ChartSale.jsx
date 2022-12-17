/*
 * Created Date: 23-10-2022, 11:40:14 am
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Sat Dec 17 2022
 * Modified By: Peter
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Chart } from 'react-chartjs-2'
// import PropTypes from 'prop-types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const labels = ['1', '2', '3', '4', '5', '6', '7']
const colors = ['#ff5436', '#f77900', '#f9fa93', '#00ea00', '#199111', '#00b9c1', '#0000f9', '#910887']
const colors1 = colors[Math.round(Math.random() * colors.length)]
const colors2 = colors.filter(item => item !== colors1)[
	Math.round(Math.random() * colors.filter(item => item !== colors1).length)
]
const ChartSale = props => {
	const chartRef = useRef(null)
	const [data, setData] = useState({ labels, datasets: [] })

	useEffect(() => {
		setData({
			labels,
			datasets: [
				{
					label: 'Dataset 1',
					data: [50000, 30000, 50000, 65000, 100000, 60000, 115000],
					borderColor: colors1
				},
				{
					label: 'Dataset 2',
					data: [10000, 50000, 20000, 75000, 190000, 5000, 115000],
					borderColor: colors2
				}
			]
		})
	}, [])

	return <Chart ref={chartRef} type="line" data={data} />
}

// ChartSale.defaultProps = {}

// ChartSale.propTypes = {}

export default React.memo(ChartSale)
