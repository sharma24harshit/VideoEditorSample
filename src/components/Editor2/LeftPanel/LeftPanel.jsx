import { Box, Typography } from '@mui/material'
import React from 'react'
import TabHeader from './TabHeader'

const LeftPanel = ({selectedStyle ,setSelectedStyle}) => {
  return (
   <TabHeader  selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle}/>
  )
}

export default LeftPanel