import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [faceDetected, setFaceDetected] = useState(false);

  const webcamRef = useRef(null);

  const videocamRef = useRef(null);

  const [hasphoto, sethasphoto] = useState(false);

  const [imgSrc, setImgSrc] = React.useState(null);

  console.log(videocamRef.current, "faceDetected");

  const capture = React.useCallback(() => {
    const imageSrc = videocamRef.current.getScreenshot({
      width: 120,
      height: 150,
    });
    console.log(imageSrc, "capture");
    setImgSrc(imageSrc);
  }, [videocamRef, setImgSrc]);

  const takephoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videocamRef.current;

    let photo = webcamRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2D");

    ctx.drawImage(video, 0, 0, width, height);

    sethasphoto(true);
  };

  const clear = () => {
    let photo = videocamRef.current;

    console.log(photo, "clear");

    setImgSrc(null);
  };

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        <div>
          <div className="relative flex justify-center items-center">
            <Webcam
              audio={false}
              ref={videocamRef}
              mirrored={true}
              width={340}
              height={380}
              className="rounded-md"
              screenshotFormat="image/jpeg"
            />
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10rem] h-[70%]  border-4  ${
                faceDetected ? "border-green-500" : "border-red-500"
              }  rounded-full`}
            ></div>
          </div>

          <div className="flex gap-4">
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={capture}
            >
              {imgSrc ? "Retake" : "Capture"}
            </button>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={clear}
            >
              Clear
            </button>
          </div>
        </div>
        {/* <div className="relative flex justify-center items-center">
          <Webcam
            audio={false}
            ref={setWebcamRef}
            mirrored={true}
            width={240}
            height={400}
            className="rounded-full w-[9rem] h-[70%] "
          />
        </div> */}
        {/* <canvas ref={videocamRef}></canvas> */}

        <div className="relative flex justify-center items-center">
          {imgSrc && <img src={imgSrc} className="w-[340px] h-[280px]" />}
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
