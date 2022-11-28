import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Mcontainer } from "./mplayer.style";
import AudioPlayer from "react-h5-audio-player";
import './mplayer.css';


const Mplayer = () => {
  const errfun = () => {
    console.log("play error");
  };
  return (
    <Mcontainer>
      {/* <ReactAudioPlayer className="audioplayer" src="https://res.cloudinary.com/deak6nhde/video/upload/v1667737729/Music/Test/01_Bad_Life_-_acoustic.m4a"  controls onError={errfun}/> */}
      <AudioPlayer
        autoPlay
        src="https://res.cloudinary.com/deak6nhde/video/upload/v1667737729/Music/Test/01_Bad_Life_-_acoustic.m4a"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </Mcontainer>
  );
};

export default Mplayer;