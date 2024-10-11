import React from 'react'
import Header from '../../shared/Header'
import { Box } from '@mui/material';
import PieChart from './PieChart'

export default function Pie() {
  return (
    <Box>
      <Header
        title="Pie Chart"
        subTitle="Simple Pie Chart"
        />
      <PieChart/>
    </Box>
  )
}
