import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import AdminContentPage from '../../components/Layout/AdminContentPage'
import ListCurrencyProvider from './ListCurrencyProvider'
import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { Button, Paper, Typography, TextField, Box, Card} from '@mui/material'
import CoreInput from '@Core/components/Input/CoreInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Yup from '@Core/helper/Yup'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TableBody from '@mui/material/TableBody'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Grid from '@mui/material/Grid'
import CoreDatePicker from "@Core/components/Input/CoreDatePicker"

const FontTitle = ({ variant = 'h1', title = '' }) => {
	return (
		<Typography variant={variant} className="text-primary">
			{title}
		</Typography>
	)
}
function createData(no, name, fat, carbs, protein, carbs1, protein1) {
	return { no, name, fat, carbs, protein, carbs1, protein1 }
}


const contentCourse = () => {
	const { control } = useForm({
		mode: 'onTouched',
		defaultValues: {
			firstname: '',
			checkbox: false
		},
		resolver: yupResolver(
			Yup.object({
				firstname: Yup.string().required()
			})
		)
	})
	return (
		<form>
			<Box className="grid grid-flow-row-dense grid-cols-12 pb-20">
				<Box className="col-span-12 sm:col-span-10 sm:col-start-2 pt-20">
                    <Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="アプリ内通貸ID" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="アプリ内通貸名" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="通貸単位名" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
					<Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="ポイント換算レート" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<CoreInput control={control} name="firstname" placeholder="Default input" size="small" />
						</Box>
					</Box>
                    <Box className="grid grid-flow-row-dense grid-cols-3 py-5">
						<Box className="col-span-3 sm:col-span-1 pt-10">
							<FontTitle variant="h3" title="使用可能開始日" />
						</Box>
						<Box className="col-span-3 sm:col-span-2">
							<Box className="grid grid-flow-row-dense grid-cols-3">
								<Box className="col-span-1">
                                <CoreDatePicker
										control={control}
										name="start"
										size="small"
									/>
								</Box>
								<Box className="col-span-1 text-center pt-10">
									<FontTitle variant="h3" title="使用可能終了日" />
								</Box>
								<Box className="col-span-1">
									<CoreDatePicker
										control={control}
										name="end"
										size="small"
									/>
								</Box>
							</Box>
						</Box>
					</Box>
                    <Grid className="text-end pt-20">
                        <Button variant="contained" color="success" size="small">
                            登録
                        </Button>
                    </Grid>
				</Box>
			</Box>
            
		</form>
	)
}
const DetailCurrency = props => {
	const { t } = useTranslation(TRANSLATE_ADMIN.course)
	return (
		<ListCurrencyProvider t={t}>
			<AdminContentPage
				pageTitle="アプリ内通貸"
				content={contentCourse()}
			/>
		</ListCurrencyProvider>
	)
}

export default React.memo(DetailCurrency)
