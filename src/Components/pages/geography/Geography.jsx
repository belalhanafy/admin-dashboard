import React from 'react'
import Header from '../../shared/Header'
import GeoChart from './GeoChart'
import { Box } from '@mui/material'

export default function Geography() {
  return (
    <Box>
    <Header
      title="Geography"
      subTitle="Simple Geography Chart"
      />
    <GeoChart/>
  </Box>
  )
}
