/*
 * Created Date: 29-10-2022, 2:50:35 pm
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Sat Oct 29 2022
 * Modified By: Dell
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { TRANSLATE_ADMIN } from '@App/Admin/configs/constants'
import { renderTextTruncate } from '@App/Admin/hooks/useHelpRender'
import { formatPrice } from '@Core/helper/Price'
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

const EventDetailDialog = (props) => {
    const {data} = props
    const {t} = useTranslation(TRANSLATE_ADMIN.event)
    console.log('============= data',data)
    return (
        <Table
            className='w-full'
            sx={{
                '& tr': {
                    borderWidth: 1
                },
                '& td': {
                    borderWidth: 1,
                    py: '12px',
                    px: '16px'
                },

            }}
        >
            <colgroup>
                <col className='w-1/4' />
                <col className='w-1/4' />
                <col className='w-1/4' />
                <col className='w-1/4' />
            </colgroup> 
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.title')}</Typography>
                    </TableCell>
                    <TableCell>{renderTextTruncate(data?.title)}</TableCell>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.type')}</Typography>
                    </TableCell>
                    <TableCell>{data?.type}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.venue')}</Typography>
                    </TableCell>
                    <TableCell>{data?.venue}</TableCell>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.author')}</Typography>
                    </TableCell>
                    <TableCell>{data?.author}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.event_start')}</Typography>
                    </TableCell>
                    <TableCell>{data?.event_start}</TableCell>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.event_end')}</Typography>
                    </TableCell>
                    <TableCell>{data?.event_end}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.reception_start')}</Typography>
                    </TableCell>
                    <TableCell>{data?.reception_start}</TableCell>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.reception_end')}</Typography>
                    </TableCell>
                    <TableCell>{data?.reception_end}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.entry_fee')}</Typography>
                    </TableCell>
                    <TableCell>{formatPrice(data?.entry_fee)}¥</TableCell>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.publish')}</Typography>
                    </TableCell>
                    <TableCell>{data?.publish ? t('label.publish') : t('label.unpublish')}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.summary')}</Typography>
                    </TableCell>
                    <TableCell>{data?.summary}</TableCell>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.sos_info')}</Typography>
                    </TableCell>
                    <TableCell>{data?.sos_info}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.tag')}</Typography>
                    </TableCell>
                    <TableCell colSpan={3}>{data?.tag?.length > 0 && Array.isArray(data?.tag) ? data?.tag?.map((item, index) => {
                        return (
                            <span key={index} className='bg-grey-300 p-4 rounded-4'>{item}</span>
                        )
                    }) : t('label.none')}</TableCell>
                   
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Typography color='primary' variant='subtitle1'>{t('label.category')}</Typography>
                    </TableCell>
                    <TableCell colSpan={3}>{data?.category?.length > 0 && Array.isArray(data?.category) ? data?.category?.map((item, index) => {
                        return (
                            <span key={index} className='bg-grey-300 p-4 rounded-4'>{item}</span>
                        )
                    }) : t('label.none')}</TableCell>
                   
                </TableRow>
            </TableBody>
        </Table>
    )
}

// EventDetailDialog.defaultProps = {}

// EventDetailDialog.propTypes = {}

export default React.memo(EventDetailDialog)