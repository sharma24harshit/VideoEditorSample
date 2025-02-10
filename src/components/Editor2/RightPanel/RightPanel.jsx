import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import ReactPlayer from "react-player";
import { APIData } from '../data';

const RightPanel = () => {
    const [video, setVideo] = useState(null);
    const fileInputRef = useRef(null);
    const [captionsArr, setCaptionsArr] = useState([]);
    const [captionText, setCaptionText] = useState("");
useEffect(()=>{
    let res = []
    for(let i=0; i<APIData.length; i++){
        res.push({
            start:APIData[i]?.captions[0]?.start_time,
            end:APIData[i]?.captions[0]?.end_time * 1000,
            text:APIData[i]?.captions[0]?.text
        })
    }
  //  console.log(res)
    setCaptionsArr(res);
     startTimer(res);
},[])

function startTimer(dataArray) {

    console.log(1)
    for(let i=0; i<dataArray.length; i++){
        setTimeout(() => {
            setCaptionText(dataArray[i].text);
            console.log(`Updated Caption: ${dataArray[i].text}`);
        }, dataArray[i].end)   
    }
  }

    const handleUpload = (e) => {
        setVideo(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <Box sx={{height:"95vh"}}>
            <input type="file" ref={fileInputRef} accept="video/*" onChange={handleUpload} />

            <Box
            sx={{border:"3px solid #e6f3fa",width:"50%",height:"95%",position:'fixed'}}
            >
                <ReactPlayer url={video} controls width="100%" height="100%"/>
             <Box
             sx={{
                position:"absolute",
                width:"40%",
                top:"70%",
                left:"30%",
                color:"white",
                fontSize:"25px",
                fontWeight:600,
                textAlign:'center'
             }}
             >
                {captionText || ""}
             </Box>
            </Box>
        </Box>
    )
}

export default RightPanel