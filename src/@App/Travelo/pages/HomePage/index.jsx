import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import EventInfoImage from '../../components/Event/EventInfoImage'
import EventContentPage from '../../components/Layout/EventContentPage'
import { useHomePageDialog } from './hooks/useHomePageDialog'
// import PropTypes from 'prop-types'

const HomePage = props => {
	const { handleOpen, handleClose, renderHomePageDialog } = useHomePageDialog()

	const handleClickImg = () => {
		handleOpen()
	}
	return (
		<EventContentPage
			header={null}
			content={
				<Box className="flex flex-col ">
					<Box className="flex flex-col py-20 ">
						<Box onClick={handleClickImg}>
							<EventInfoImage img="/img/event/Image.png" />
						</Box>
						<Typography className="pt-8 text-neutral" variant="subtitle2">
							2022/04/01 ~ 2022/10/31
						</Typography>
						<Typography className="py-8" variant="h4">
							サイクリストに人気の清滝峠からくろんど池へ走り
						</Typography>
						<Typography className="bg-third px-20 py-8">
							＃初心者におすすめ ＃形式最高 ＃急勾配コースあり ＃獲得標高1000m以上 ＃秋におすすめ
							＃温泉あり
						</Typography>
					</Box>
					<Box className="flex flex-col py-20 ">
						<EventInfoImage img="/img/event/Image.png" />
						<Typography className="pt-8 text-neutral" variant="subtitle2">
							2022/04/01 ~ 2022/10/31
						</Typography>
						<Typography className="py-8" variant="h4">
							サイクリストに人気の清滝峠からくろんど池へ走り
						</Typography>
						<Typography className="bg-third px-20 py-8">
							＃初心者におすすめ ＃形式最高 ＃急勾配コースあり ＃獲得標高1000m以上 ＃秋におすすめ
							＃温泉あり
						</Typography>
					</Box>
					<Box className="flex flex-col py-20 ">
						<EventInfoImage />
						<Typography className="pt-8 text-neutral" variant="subtitle2">
							2022/04/01 ~ 2022/10/31
						</Typography>
						<Typography className="py-8" variant="h4">
							サイクリストに人気の清滝峠からくろんど池へ走り
						</Typography>
						<Typography className="bg-third px-20 py-8">
							＃初心者におすすめ ＃形式最高 ＃急勾配コースあり ＃獲得標高1000m以上 ＃秋におすすめ
							＃温泉あり
						</Typography>
					</Box>
					{renderHomePageDialog()}
				</Box>
			}
		/>
	)
}

// HomePage.defaultProps = {}

// HomePage.propTypes = {}

export default React.memo(HomePage)
