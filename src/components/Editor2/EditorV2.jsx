import React, { useState } from 'react';
import {APIData} from "./data";
import { Box } from '@mui/material';
import RightPanel from './RightPanel/RightPanel';
import LeftPanel from './LeftPanel/LeftPanel';

const EditorV2 = () => {
  const [selectedStyle, setSelectedStyle] = useState(0);

  const textStyle= [
    { color:"white",
        fontSize:"25px",
        fontWeight:600,},
    { color:"red",
        fontSize:"27px",
        fontWeight:700,},
    { color:"blue",
        fontSize:"22px",
        fontWeight:600,},
    { color:"teal",
        fontSize:"28px",
        fontWeight:700,}
  ]

  return (
    <Box sx={{
      border:"1px solid red",
      width:"100vw",
      height:"100vh",
      display:"flex",
    }}>
      <Box
      sx={{ width:"50%"}}
      >
        <LeftPanel selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle}/>
      </Box>
      <Box
      sx={{ width:"50%"}}
      >
       <RightPanel selectedStyle={selectedStyle} textStyle={textStyle}/>
      </Box>
    </Box>
  )
}

export default EditorV2