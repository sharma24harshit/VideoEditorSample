import { Box, Typography } from '@mui/material'
import { useState } from 'react'

const Styles = ({selectedStyle, setSelectedStyle}) => {

  return (
    <Box
    sx={{
      p:"10px",
      display:"flex",
      gap:"10px",
      flexWrap:"wrap"
    }}
    >
      {data && data.map((el,i)=>(
        <Typography
        key={i}
        sx={{
          backgroundColor: selectedStyle===i?"#99c3ff":"white",
          p:"5px 10px",
          borderRadius:"20px",
          cursor:"pointer"
        }}
        onClick={()=>setSelectedStyle(i)}
        >
          {el.name}
        </Typography>
      ))}
    </Box>
  )
}

export default Styles

const data= [
  {name:"Styles1"},
  {name:"Styles2"},
  {name:"Styles3"},
  {name:"Styles4"}
]