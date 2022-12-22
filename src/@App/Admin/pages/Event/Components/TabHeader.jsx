import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import 'styles/event.css'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import { useParams } from 'react-router-dom'

const TabHeader = () => {
	const [value, setValue] = React.useState('1')

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	const { id } = useParams()
	const display = id === 'new' ? 'none' : ''
	return (
		<Box sx={{ width: '100%' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange}>
						<Tab label="イベント概要" value="1" />
						<Tab label="イベントコース" value="2" sx={{ display: display }} />
						<Tab label="イベントエントリー" value="3" sx={{ display: display }} />
					</TabList>
				</Box>
				<TabPanel value="1">
					<Tab1 />
				</TabPanel>
				<TabPanel value="2">
					<Tab2 />
				</TabPanel>
				<TabPanel value="3">
					<Tab3 />
				</TabPanel>
			</TabContext>
		</Box>
	)
}
export default React.memo(TabHeader)
