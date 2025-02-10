import { Box, Typography } from '@mui/material'
import {APIData} from "../data";
const Captions = () => {
  // console.log(data[0]?.captions)
  return (
    <Box
    sx={{height:"calc(100vh - 50px)", overflowY:"auto"}}
    >
     {APIData && APIData.map((item, i)=>(
      <Box
      key={i}
      sx={{
        border:"1px solid",
        p:"8px 10px",
        borderRadius:"15px",
        backgroundColor:"#e6f3fa"
      }}
      >
        <Box
        sx={{backgroundColor:"#99c3ff",  p:"3px 8px",
          borderRadius:"15px",width:"fit-content"}}
        >
          {item?.captions[0]?.start_time} - {item?.captions[0]?.end_time}
        </Box>
        <Typography sx={{mt:"5px"}}>
        {item?.captions[0]?.text}
        </Typography>
      </Box>
     ))}

    </Box>
  )
}

export default Captions

