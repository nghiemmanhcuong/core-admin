/*
 * Created Date: 12-10-2022, 3:36:47 pm
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

import { useAdminPageContext } from '@App/Admin/components/Provider/AdminPageProvider'
import { CoreActionDelete, CoreActionEdit, CoreActionView } from '@Core/components/Table/components/CoreTableAction'
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable'
import { Box } from '@mui/system'
import React, { useMemo, useState } from 'react'
import FormAutocomplete from '@App/Admin/components/Form/FormAutocomplete'
import Yup from '@Core/helper/Yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import CoreInput from '@Core/components/Input/CoreInput'
import { TextField, Button, Tabs, Tab, Typography,
     Grid, FormControlLabel, Radio, RadioGroup, Checkbox,
     FormGroup } from '@mui/material'

const EditSpotTabs = props => {
	const { t, spotTableHandler } = useAdminPageContext()
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const {control} = useForm({
        mode: 'onTouched',
        defaultValues: {
            verification_code: ''
        },
        resolver: yupResolver(
            Yup.object({
                verification_code: Yup.string().required()
            })
        )
    })

	return (
		<Box>
            <Box>
                <Tabs aria-label="basic tabs example" value={tabIndex} onChange={handleTabChange}>
                    <Tab label={t('edit.tabs.label.information')}  />
                    <Tab label={t('edit.tabs.label.information')} />
                    <Tab label={t('edit.tabs.label.information')} />
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.id')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <CoreInput
                                control={control}
                                name='id'
                                size="small"
                                className= 'w-2/3'
                            />
                        </Grid>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.title')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                        <CoreInput
                            control={control}
                            name='title'
                            size="small"
                            className= 'w-2/3'
                        />
                        </Grid>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.description')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                        <CoreInput
                            control={control}
                            name='description'
                            size="small"
                            multiline
                            className= 'w-2/3'
                        />
                        </Grid>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.situation')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Box className="rounded-md w-2/3 pl-[15px]"sx={{ border: '1px solid #cccc' }}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                            >
                                <FormControlLabel value="female" name="sex" control={<Radio />} label={t('edit.form.check_box.label.express')} />
                                <FormControlLabel value="male" name="sex" control={<Radio />} label={t('edit.form.check_box.label.representation')} />
                            </RadioGroup>
                            </Box>
                        </Grid>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.category')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Box className="rounded-md w-2/3 pl-[15px]"sx={{ border: '1px solid #cccc' }}>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox />} name="category" value={1} label={t('edit.form.check_box.label.men')} />
                                    <FormControlLabel control={<Checkbox />} name="category" value={2} label={t('edit.form.check_box.label.women')} />
                                    <FormControlLabel control={<Checkbox />} name="category" value={3} label={t('edit.form.check_box.label.50s')} />
                                    <FormControlLabel control=  {<Checkbox />} name="category" value={4} label={t('edit.form.check_box.label.participants')} />
                                </FormGroup>
                            </Box>
                        </Grid>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.venue')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={3} className="text-right self-center">
                                    <FormAutocomplete
                                        control={control}
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Choose..."
                                        name="venue"
                                    />
                                </Grid>
                                <Grid item md={2} className="text-center self-center">
                                    <Typography variant='h3' color="primary">{t('edit.form.label.type')}</Typography>
                                </Grid>
                                <Grid item md={3} className="text-right self-center">
                                    <FormAutocomplete
                                        control={control}
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Choose..."
                                        name="type"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.period')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={3} className="text-right self-center">
                                    <FormAutocomplete
                                        control={control}
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Choose..."
                                        name="period"
                                    />
                                </Grid>
                                <Grid item md={1} className="text-center self-center">
                                    <Typography variant='h3' color="primary">{t('edit.form.label.to')}</Typography>
                                </Grid>
                                <Grid item md={4} className="text-right self-center">
                                    <FormAutocomplete
                                        control={control}
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Choose..."
                                        name="period_to"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.entry_period')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={3} className="text-right self-center">
                                    <FormAutocomplete
                                        control={control}
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Choose..."
                                        name="entry_period"
                                    />
                                </Grid>
                                <Grid item md={1} className="text-center self-center">
                                    <Typography variant='h3' color="primary">{t('edit.form.label.to')}</Typography>
                                </Grid>
                                <Grid item md={4} className="text-right self-center">
                                    <FormAutocomplete
                                        control={control}
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Choose..."
                                        name="entry_period_to"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.entry_fee')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={4} className="text-right self-center">
                                <CoreInput
                                    control={control}
                                    name='entry_fee'
                                    size="small"
                                    multiline
                                />
                                </Grid>
                                <Grid item md={2} className="text-center self-center">
                                    <Typography variant='h3' color="primary">{t('edit.form.label.payment')}</Typography>
                                </Grid>
                                <Grid item md={5} className="text-right self-center">
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" name="payment" control={<Radio />} label={t('edit.form.check_box.label.card')} />
                                        <FormControlLabel value="male" name="payment" control={<Radio />} label={t('edit.form.check_box.label.qr')} />
                                    </RadioGroup>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.entry_option')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Box className="rounded-md w-2/3 p-20"sx={{ border: '1px solid #cccc' }}>
                                <Grid container spacing={3}>
                                    <Grid item md={4} className="text-left self-center">
                                        <FormControlLabel control={<Checkbox />} name="bicycle" label={t('edit.form.check_box.label.bicycle_rental')} />
                                    </Grid>
                                    <Grid item md={6} className="self-center">
                                        <Box className="flex">
                                            <CoreInput
                                                control={control}
                                                name='bicycle_circle'
                                                size="small"
                                                className="w-1/3"
                                            />
                                            <Typography variant='h3' className="self-center ml-5">{t('edit.form.label.circle')}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item md={4} className="text-left self-center">
                                        <FormControlLabel control={<Checkbox />} name="xxx" label="XXXXXXX" />
                                    </Grid>
                                    <Grid item md={6} className="self-center">
                                        <Box className="flex">
                                            <CoreInput
                                                control={control}
                                                name='xxx_circle'
                                                size="small"
                                                className="w-1/3"
                                            />
                                            <Typography variant='h3' className="self-center ml-5">{t('edit.form.label.circle')}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.mission')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <CoreInput
                                control={control}
                                name='mission'
                                size="small"
                                className="w-1/3 inline-flex align-top"
                            />
                            <Button variant="contained" color="primary" className="ml-auto">
                                {t('edit.form.btn.selection')}
                            </Button>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.reward')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <CoreInput
                                control={control}
                                name='reward'
                                size="small"
                                className="w-1/3 inline-flex align-top"
                            />
                            <Button variant="contained" color="primary" className="ml-auto">
                                {t('edit.form.btn.selection')}
                            </Button>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.tag')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left ">
                            <Box className="rounded-md w-2/3 pl-[15px]"sx={{ border: '1px solid #cccc' }}>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.spring_available')} />
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.best_view')} />
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.autumn')} />
                                    <FormControlLabel control=  {<Checkbox />} name="tag" label={t('edit.form.check_box.label.beginners')} />
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.spring_available')} />
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.best_view')} />
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.autumn')} />
                                    <FormControlLabel control=  {<Checkbox />} name="tag" label={t('edit.form.check_box.label.beginners')} />
                                </FormGroup>
                                <FormGroup row>
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.spring_available')} />
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.best_view')} />
                                    <FormControlLabel control={<Checkbox />} name="tag" label={t('edit.form.check_box.label.autumn')} />
                                    <FormControlLabel control=  {<Checkbox />} name="tag" label={t('edit.form.check_box.label.beginners')} />
                                </FormGroup>
                            </Box>
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.precautions')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                        <CoreInput
                            control={control}
                            name='precautions'
                            size="small"
                            multiline
                            className="w-2/3"
                        />
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.contact_name')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                        <CoreInput
                            control={control}
                            name='contact_name'
                            size="small"
                            className="w-2/3"
                        />
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.address')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                        <CoreInput
                            control={control}
                            name='address'
                            size="small"
                            className="w-2/3"
                        />
                        </Grid>

                        <Grid item xs={5} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.related')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <FormAutocomplete
                                control={control}
                                size="small"
                                fullWidth
                                className= 'w-2/3'
                                variant="outlined"
                                placeholder="Choose..."
                                name="related"
                            />
                        </Grid>

                        <Grid item xs={3} md={3} className="text-right self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.creator')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <CoreInput
                                control={control}
                                name='creator'
                                size="small"
                                className="w-1/3 inline-flex align-top"
                            />
                            <Button variant="contained" color="primary" className="ml-auto">
                                {t('edit.form.btn.selection')}
                            </Button>
                        </Grid>

                        <Grid item xs={10} md={10} className="text-right self-center">
                            <Button variant="contained" color='error' className="ml-auto">
                                {t('edit.form.btn.delete')}
                            </Button>
                            <Button variant="contained" color='primary' className="ml-[10px]">
                                {t('edit.form.btn.register')}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                )}
                {tabIndex === 1 && (
                <Box>
                    <Typography>The second tab</Typography>
                </Box>
                )}
                {tabIndex === 2 && (
                <Box>
                    <Typography>The third tab</Typography>
                </Box>
                )}
            </Box>
		</Box>
	)
}

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(EditSpotTabs)
