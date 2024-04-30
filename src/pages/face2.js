import React, { useRef, useState, useEffect } from "react";
import "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      try {
        const model = await blazeface.load();
        detectFace(model);
      } catch (error) {
        console.error("Error loading Blazeface model:", error);
      }
    };

    loadModelAndDetect();
  }, []);

  const detectFace = async (model) => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const videoElement = webcamRef.current.video;
      const predictions = await model.estimateFaces(videoElement);

      if (predictions.length > 0) {
        // Face detected
        setFaceDetected(true);
      } else {
        // No face detected
        setFaceDetected(false);
      }
    }

    // Detect face in the next frame
    requestAnimationFrame(() => detectFace(model));
  };

  return (
    <div className="mt-6">
      <div className="relative flex justify-center items-center">
        <video
          ref={webcamRef}
          autoPlay
          muted
          width={640}
          height={480}
          className="rounded-md"
        />
        {faceDetected && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-green-500 rounded-full">
            {/* Oval shape */}
          </div>
        )}
      </div>

      <button
        disabled={!faceDetected}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Capture
      </button>
    </div>
  );
};

export default WebcamCapture;
