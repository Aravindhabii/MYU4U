import React from "react";
import { Rightcontainer, Wrapper } from "../../containers/home/right.style";
import Webcam from "react-webcam";

const Scan = () => {
  return (
    <Rightcontainer>
      <Wrapper>
        <Webcam
          audio={false}
          height={480}
          screenshotFormat="image/jpeg"
          width={854}
          videoConstraints={{facingMode: "user" }}
        ></Webcam>
      </Wrapper>
    </Rightcontainer>
  );
};

export default Scan;
