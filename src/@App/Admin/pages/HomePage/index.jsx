/*
 * Created Date: 23-10-2022, 9:41:26 am
 * Author: TheAnh58
 * Email: you@you.you
 * -----
 * Last Modified: Sun Oct 23 2022
 * Modified By: use
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { Box, Typography } from "@mui/material";
import React from "react";
import ChartOverview from "./ChartOverview";
import ChartPartners from "./ChartPartners";
import ChartSale from "./ChartSale";


const HomePage = (props) => {
    
 return <Box className='flex flex-wrap mt-40'>
    <Box className='w-[700px] mr-160  p-40 shadow-2xl'>
        <Typography variant='subtitle2' className="mb-12">SALES</Typography>
        <Typography variant='h4' className="mb-40">アプリ登録者数</Typography>
        <ChartSale />

    </Box>  
    <Box className='w-[700px] p-40  shadow-2xl'>
        <Typography variant='subtitle2' className="mb-12">OVERVIEW</Typography>
        <Typography variant='h4' className="mb-40">エントリー数</Typography>
        <ChartOverview />
    </Box>
    <Box className='w-[700px] p-40 mt-80  shadow-2xl'>
        <Typography variant='subtitle2' className="mb-12">PARTNERS</Typography>
        <Typography variant='h4' className="mb-40">XXXXXXXXX</Typography>
        <ChartPartners />
    </Box>
 </Box>
}

// HomePage.defaultProps = {}

// HomePage.propTypes = {}

export default React.memo(HomePage)