import React, { useRef, useEffect } from "react";
// import "./App.css";
import * as faceapi from "face-api.js";

function App() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const photoref = useRef();
  const circleRadius = 100; // Radius of the circle
  const circleCenter = { x: 330, y: 135 }; // Center coordinates of the circle
  const [imgSrc, setImgSrc] = React.useState(null);

  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // OPEN YOU FACE WEBCAM
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // LOAD MODELS FROM FACE API

  const loadModels = () => {
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      // DRAW YOU FACE IN WEBCAM
      const canvas = canvasRef.current;
      canvas.innerHTML = ""; // Clear previous drawings
      canvas.appendChild(faceapi.createCanvasFromMedia(videoRef.current));
      faceapi.matchDimensions(canvas, {
        width: 640,
        height: 350,
      });

      const resizedDetections = faceapi.resizeResults(detections, {
        width: 640,
        height: 350,
      });

      // Draw face detections, landmarks, and expressions
      faceapi.draw.drawDetections(canvas, resizedDetections);
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

      // Draw the circle
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      // ctx.arc(circleCenter.x, circleCenter.y, circleRadius, 0, 2 * Math.PI);
      ctx.lineWidth = 2;

      // Check if any face is within the circle
      resizedDetections.forEach((detection) => {
        const faceBox = detection.detection.box;
        const faceCenter = {
          x: faceBox.x + faceBox.width / 2,
          y: faceBox.y + faceBox.height / 2,
        };

        const distance = Math.sqrt(
          Math.pow(faceCenter.x - circleCenter.x, 2) +
            Math.pow(faceCenter.y - circleCenter.y, 2)
        );

        // Change circle border color based on face position
        ctx.strokeStyle = distance <= circleRadius ? "green" : "red";
      });

      ctx.stroke();
    }, 1000);
  };

  //   const capture = React.useCallback(() => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext("2d");
  //     console.log(ctx.strokeStyle, "ctx.strokeStyle");
  //     if (ctx.strokeStyle === "#008000") {
  //       //   const imageSrc = videoRef.current.getScreenshot({
  //       //     width: 120,
  //       //     height: 150,
  //       //   });
  //       ctx.drawImage(video, 0, 0, width, height);

  //       console.log("capture".imageSrc);
  //       setImgSrc(true);
  //     }
  //   }, [videoRef, setImgSrc]);

  function takephoto() {
    const width = 414;
    const height = width / (16 / 9);

    const video = videoRef.current;
    const photo = photoref.current;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");

    // Draw the current frame of the video onto the canvas
    ctx.drawImage(video, 0, 0, width, height);

    // Convert canvas to image data URL
    const imageDataURL = photo.toDataURL("image/png");

    // Set the captured image data URL as the source of an image element
    setImgSrc(imageDataURL);
  }

  const clear = () => {
    const photo = photoref.current;

    const ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);

    setImgSrc(null);
  };

  return (
    <div className="myapp">
      <h1>FAce Detection</h1>
      <div className="flex gap-4">
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={takephoto}
        >
          Capture
        </button>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <div className="appvide">
        <video
          crossOrigin="anonymous"
          ref={videoRef}
          autoPlay
          width={400}
          height={400}
        ></video>
      </div>

      {/* <div className="relative flex justify-center items-center">
        {imgSrc && <img src={imgSrc} className="w-[340px] h-[280px]" />}
      </div> */}
      <canvas ref={photoref} width="414" height="234" />
      <canvas ref={canvasRef} width="440" height="450" className="appcanvas" />
    </div>
  );
}

export default App;
