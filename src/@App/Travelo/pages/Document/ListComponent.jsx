/*
 * Created Date: 07-10-2022, 8:49:17 pm
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

import { Button, Card, Paper, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import DownloadInfor from '../../components/DownloadInfor'
import EventInfoImage from '../../components/Event/EventInfoImage'
import EventMission from '../../components/EventMission'
import IconBike from '../../components/Icons/IconBike'
import IconDirectionsBike from '../../components/Icons/IconBike'
import IconColle from '../../components/Icons/IconColle'
import IconSearch from '../../components/Icons/IconSearch'
import IconUnion from '../../components/Icons/IconSearch'
import IconWallet from '../../components/Icons/IconWallet'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
// import { yupResolver } from '@hookform/resolvers/yup'

// import PropTypes from 'prop-types'

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Box className="flex justify-between my-12">
			<Typography variant={variant}>{variant.toUpperCase()}</Typography>
			<Typography variant={variant} className="text-primary">
				{title}
			</Typography>
		</Box>
	)
}
const ListComponent = props => {
	const renderColor = () => {
		return (
			<Paper className="m-12 p-12 max-w-md">
				<Typography className="mb-12" gutterBottom variant="h1">
					Button Color
				</Typography>
				<Box className="flex flex-col space-y-12">
					<Button variant="contained" color="primary">
						primary
					</Button>
					<Button variant="contained" color="secondary">
						secondary
					</Button>
					<Button variant="contained" color="third">
						third
					</Button>
					<Button variant="contained" color="accent">
						accent
					</Button>
					<Button variant="contained" color="mission">
						mission
					</Button>
				</Box>
			</Paper>
		)
	}

	const renderFont = () => {
		return (
			<Paper className="m-12 p-12 max-w-md">
				<Box>
					<Typography variant="h1" gutterBottom>
						Font / Title
					</Typography>
					<FontTitle variant="h1" title="アプリ紹介文や会員登録のメリットがあるといいのかな" />
					<FontTitle variant="h2" title="アプリ紹介文や会員登録のメリットがあるといいのかな" />
					<FontTitle variant="h3" title="アプリ紹介文や会員登録のメリットがあるといいのかな" />
					<FontTitle variant="h4" title="アプリ紹介文や会員登録のメリットがあるといいのかな" />
					<FontTitle variant="subtitle1" title="アプリ紹介文や会員登録のメリットがあるといいのかな" />
					<FontTitle variant="subtitle2" title="アプリ紹介文や会員登録のメリットがあるといいのかな" />
				</Box>
			</Paper>
		)
	}

	const renderIcon = () => {
		return (
			<Paper className="max-w-md p-24 m-12">
				<Box>
					<Typography variant="h1" gutterBottom>
						Icons
					</Typography>
					<Box>
						<IconSearch />
						<IconSearch sx={{ color: green[500] }} />
						<IconSearch isActive />
						<div className="mt-20">
							<IconBike />
							<IconBike isActive />
						</div>
						<div className="mt-20">
							<IconWallet />
							<IconWallet isActive />
						</div>
						<div className="mt-20">
							<IconColle />
							<IconColle isActive />
						</div>
					</Box>
				</Box>
			</Paper>
		)
	}

	const renderEvent = () => {
		return (
			<Paper className="w-1/2 p-24 m-12 mx-auto">
				<Typography variant="h1" gutterBottom>
					Component
				</Typography>
				<EventInfoImage img="/img/event/image.png" />
				<Box className="my-12 flex space-x-8">
					<EventMission title="３コース制覇を目指せ" />
					<EventMission title="３コース制覇を目指せ" />
					<EventMission title="３コース制覇を目指せ" />
				</Box>
				<Box className="my-24">
					<DownloadInfor />
				</Box>
			</Paper>
		)
	}

	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: ''
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required()
			})
		)
	})
	const renderFormInput = () => {
		return (
			<Paper className="w-1/2 p-24 m-12 mx-auto">
				<Typography variant="h1" gutterBottom>
					Form Input
				</Typography>
				<form>
					<CoreInput
						control={control}
						name="firstname"
						label="First name"
						required
						helperText={'半角英数字8~20文字'}
						placeholder="Please fill firstname"
					/>
				</form>
			</Paper>
		)
	}

	return (
		<>
			<div className="flex flex-wrap justify-center">
				{renderColor()}
				{renderFont()}
				{renderIcon()}
				{renderEvent()}
				{renderFormInput()}
			</div>
		</>
	)
}

//ListComponent.defaultProps = {}

//ListComponent.propTypes = {}

export default React.memo(ListComponent)
