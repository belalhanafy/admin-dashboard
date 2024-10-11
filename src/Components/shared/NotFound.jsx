import React from 'react'
import notFound from '../../assets/images/A-404-Page-Best-Practices-and-Design-Inspiration.jpg'
import { Box } from '@mui/material'
export default function NotFound() {
  return (
    <Box sx={{width:"100%", height:"100vh", display:"flex" , alignItems:"center", justifyContent:"center"}}>
        <img width={1000} src={notFound} alt="Not Found 404" />
    </Box>
  )
}
