import React from 'react'
import Header from '../../shared/Header'
import { Box } from '@mui/material';
import BarChart from './BarChart';


export default function Bar() {
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
        />
      <BarChart/>
    </Box>
  )
}
