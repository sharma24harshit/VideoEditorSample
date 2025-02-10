import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Styles from "./Styles";
import Captions from "./Captions";

const TabHeader = () => {
    const [selectedTab, setSelectedTab] = useState(0)

const tabsBody = [
    {
        name:"Styles",
        element : <Styles />
    },
    {
        name:"Captions",
        element : <Captions />
    }
]

  return (
    <Box >
        <Box
        sx={{
            height:"40px",
            display:'flex',
            gap:"15px",
            borderBottom:"1px solid"
            }}>
    <Typography
    sx={{
        p:"0 8px",
        display:'flex',
        alignItems:'center',
        ml:"15px",
        backgroundColor: selectedTab===0?"#99c3ff":"white",
        cursor:"pointer"
    }}
    onClick={()=>setSelectedTab(0)}
    >
Styles
    </Typography>
    <Typography
    sx={{
        p:"0 8px",
        display:'flex',
        alignItems:'center',
        backgroundColor: selectedTab===1?"#99c3ff":"white",
         cursor:"pointer"
    }}
    onClick={()=>setSelectedTab(1)}
    >
        Captions
    </Typography>
    </Box>
    <Box>
        {tabsBody[selectedTab].element}
    </Box>
   </Box>
  )
}

export default TabHeader