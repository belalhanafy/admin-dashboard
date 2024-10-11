import { Box } from '@mui/material'
import React from 'react'
import Header from '../../shared/Header'
import LineChart from './LineChart'

export default function Line() {
  return (
    <Box>
      <Header
        title="Line Chart"
        subTitle="Simple Line Chart"
        />
      <LineChart/>
    </Box>
  )
}
