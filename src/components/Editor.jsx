import React, { useState, useRef, useEffect } from "react";
import { Button, Slider, TextField, Typography, IconButton } from "@mui/material";
import { Delete, Visibility, VisibilityOff } from "@mui/icons-material";
import ReactPlayer from "react-player";
// import { createFFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

const Editor = () => {
  const [video, setVideo] = useState(null);
  const [captions, setCaptions] = useState([]);
  const [editedVideo, setEditedVideo] = useState(null);
  const [scale, setScale] = useState(1);
  const [audio, setAudio] = useState(null);
  const fileInputRef = useRef(null);
  // const ffmpeg = createFFmpeg({ log: true });

  const handleUpload = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddCaption = () => {
    setCaptions([...captions, { text: "New Caption", time: captions.length + 1, visible: true }]);
  };

  const handleEditCaption = (index, value) => {
    const newCaptions = [...captions];
    newCaptions[index].text = value;
    setCaptions(newCaptions);
  };

  const handleDeleteCaption = (index) => {
    setCaptions(captions.filter((_, i) => i !== index));
  };

  const handleDeleteAllCaptions = () => {
    setCaptions([]);
  };

  const handleToggleVisibility = (index) => {
    const newCaptions = [...captions];
    newCaptions[index].visible = !newCaptions[index].visible;
    setCaptions(newCaptions);
  };

  const handleHideAllCaptions = () => {
    setCaptions(captions.map((cap) => ({ ...cap, visible: false })));
  };

  const handleUploadAudio = (e) => {
    setAudio(URL.createObjectURL(e.target.files[0]));
  };

  const handleScaleChange = (event, newValue) => {
    setScale(newValue);
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" ref={fileInputRef} accept="video/*" onChange={handleUpload} />
      <input type="file" accept="audio/*" onChange={handleUploadAudio} />
      <br /><br />
      {video && (
        <div style={{ transform: `scale(${scale})` }}>
          <ReactPlayer url={video} controls width="100%" />
          {audio && <ReactPlayer url={audio} controls width="100%" playing loop />}
          {captions.map((caption, index) =>
            caption.visible ? (
              <Typography key={index} variant="h6" style={{ position: "absolute", bottom: 50, left: "40%", backgroundColor: "rgba(0,0,0,0.5)", color: "white", padding: 5 }}>
                {caption.text}
                <IconButton onClick={() => handleToggleVisibility(index)}><VisibilityOff /></IconButton>
                <IconButton onClick={() => handleDeleteCaption(index)}><Delete /></IconButton>
              </Typography>
            ) : null
          )}
        </div>
      )}
      <Button onClick={handleAddCaption}>Add Caption</Button>
      <Button onClick={handleDeleteAllCaptions}>Delete All Captions</Button>
      <Button onClick={handleHideAllCaptions}>Hide All Captions</Button>
      <br /><br />
      <Slider value={scale} onChange={handleScaleChange} step={0.1} min={0.5} max={2} valueLabelDisplay="auto" />
      {captions.map((caption, index) => (
        <TextField
          key={index}
          label={`Caption ${index + 1}`}
          value={caption.text}
          onChange={(e) => handleEditCaption(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default Editor;
