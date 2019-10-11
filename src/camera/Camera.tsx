import React from "react";
import Webcam from "react-webcam";
import {Button} from "@material-ui/core";

export const CameraCapture = () => {

  const webcamRef = React.useRef(Webcam as any);


  //doesnt work
  const takeScreenshot = React.useCallback(
      () => {
        const imgSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
  );

  return(
      <div>
        <Button onClick={takeScreenshot}>Take photo</Button>
        <Webcam/>
      </div>
  )
};