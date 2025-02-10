import React from 'react';
import {APIData} from "./data";
import { Box } from '@mui/material';
import RightPanel from './RightPanel/RightPanel';
import LeftPanel from './LeftPanel/LeftPanel';

const EditorV2 = () => {
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
        <LeftPanel />
      </Box>
      <Box
      sx={{ width:"50%"}}
      >
       <RightPanel />
      </Box>
    </Box>
  )
}

export default EditorV2