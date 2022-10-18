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
import CoreCheckbox from '@Core/components/Input/CoreCheckbox'
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup'
import { TextField, Button, Tabs, Tab, Typography,
     Grid, FormControlLabel, Radio, RadioGroup, Checkbox,
     FormGroup } from '@mui/material'

const EditSpotTabs = props => {
	const { t, spotTableHandler } = useAdminPageContext()
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const sex = [
        {
            value: 1,
            label: t('edit.form.check_box.label.express')
        },
        {
            value: 2,
            label: t('edit.form.check_box.label.representation')
        }
    ];

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
                    <Grid container spacing={2} className="pl-64">
                        <Grid item xs={5} md={3} className="self-center">
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
                        <Grid item xs={5} md={3} className="self-center">
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
                        <Grid item xs={5} md={3} className="self-center">
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
                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.situation')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Box className="rounded-md w-2/3 pl-[15px]"sx={{ border: '1px solid #cccc' }}>
                                <CoreRadioGroup
                                    className='flex-row'
                                    control={control}
                                    name='description'
                                    options={sex}
                                    row="true"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.category')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Box className="rounded-md w-2/3 pl-[15px]"sx={{ border: '1px solid #cccc' }}>
                                <FormGroup row>
                                    <CoreCheckbox
                                        control={control}
                                        name='category'
                                        size="small"
                                        value={1}
                                        label={t('edit.form.check_box.label.men')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='category'
                                        size="small"
                                        value={2}
                                        label={t('edit.form.check_box.label.women')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='category'
                                        size="small"
                                        value={3}
                                        label={t('edit.form.check_box.label.50s')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='category'
                                        size="small"
                                        value={4}
                                        label={t('edit.form.check_box.label.participants')}
                                    />
                                </FormGroup>
                            </Box>
                        </Grid>
                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.venue')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={3} className="self-center">
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
                                <Grid item md={3} className="self-center">
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
                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.period')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={3} className="self-center">
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
                                <Grid item md={4} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.entry_period')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={3} className="self-center">
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
                                <Grid item md={4} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.entry_fee')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Grid container spacing={3}>
                                <Grid item md={4} className="self-center">
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
                                <Grid item md={5} className="self-center">
                                    <CoreRadioGroup
                                        className='flex-row'
                                        control={control}
                                        name='description'
                                        options={[
                                            {
                                                value:1,
                                                label: t('edit.form.check_box.label.card')
                                            },
                                            {
                                                value:2,
                                                label: t('edit.form.check_box.label.qr')
                                            }
                                        ]}
                                        row="true"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.entry_option')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left">
                            <Box className="rounded-md w-2/3 p-20"sx={{ border: '1px solid #cccc' }}>
                                <Grid container spacing={3}>
                                    <Grid item md={4} className="text-left self-center">
                                        <CoreCheckbox
                                            control={control}
                                            name='bicycle'
                                            size="small"
                                            label={t('edit.form.check_box.label.bicycle_rental')}
                                        />
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
                                        <CoreCheckbox
                                            control={control}
                                            name='xxx'
                                            size="small"
                                            label="XXXXXXX"
                                        />
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

                        <Grid item xs={5} md={3} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
                            <Typography variant='h3' color="primary">{t('edit.form.label.tag')}</Typography>
                        </Grid>
                        <Grid item xs={7} md={7} className="text-left ">
                            <Box className="rounded-md w-2/3 pl-[15px]"sx={{ border: '1px solid #cccc' }}>
                                <FormGroup row>
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.spring_available')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.best_view')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.autumn')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.beginners')}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.spring_available')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.best_view')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.autumn')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.beginners')}
                                    />
                                </FormGroup>
                                <FormGroup row>
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.spring_available')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.best_view')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.autumn')}
                                    />
                                    <CoreCheckbox
                                        control={control}
                                        name='tag'
                                        size="small"
                                        label={t('edit.form.check_box.label.beginners')}
                                    />
                                </FormGroup>
                            </Box>
                        </Grid>

                        <Grid item xs={5} md={3} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
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

                        <Grid item xs={5} md={3} className="self-center">
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

                        <Grid item xs={3} md={3} className="self-center">
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
