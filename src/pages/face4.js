import FaceDetection from "@/components/face/facedetection";
import { useEffect, useRef } from "react";

function Face({ imageUrl }) {
  const canvasRef = useRef(null);

  //   useEffect(() => {
  //     const loadImageAndDetectFaces = async () => {
  //       const image = new Image();
  //       image.src = imageUrl;
  //       image.onload = async () => {
  //         // Load OpenCV.js
  //         await cv.ready();

  //         // Create canvas and context
  //         const canvas = canvasRef.current;
  //         const context = canvas.getContext('2d');
  //         canvas.width = image.width;
  //         canvas.height = image.height;
  //         context.drawImage(image, 0, 0, image.width, image.height);

  //         // Convert image to grayscale
  //         const src = cv.imread(canvas);
  //         const gray = new cv.Mat();
  //         cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

  //         // Detect faces
  //         const faceCascade = new cv.CascadeClassifier();
  //         faceCascade.load('haarcascade_frontalface_default.xml');
  //         const faces = new cv.RectVector();
  //         faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0);

  //         // Define circle parameters
  //         const centerX = canvas.width / 2;
  //         const centerY = canvas.height / 2;
  //         const radius = Math.min(canvas.width, canvas.height) / 3;

  //         // Draw faces with borders
  //         for (let i = 0; i < faces.size(); ++i) {
  //           const face = faces.get(i);
  //           const faceX = face.x + face.width / 2;
  //           const faceY = face.y + face.height / 2;

  //           // Check if face is within circle
  //           const distance = Math.sqrt((faceX - centerX) ** 2 + (faceY - centerY) ** 2);
  //           const isInCircle = distance <= radius;

  //           // Draw border
  //           context.strokeStyle = isInCircle ? 'green' : 'red';
  //           context.lineWidth = 2;
  //           context.strokeRect(face.x, face.y, face.width, face.height);
  //         }

  //         // Cleanup
  //         src.delete();
  //         gray.delete();
  //         faces.delete();
  //       };
  //     };

  //     loadImageAndDetectFaces();
  //   }, [imageUrl]);

  return (
    <div>
      <FaceDetection imageUrl={"/cell.png"} />
      {/* <canvas ref={canvasRef} /> */}
    </div>
  );
}

export default FaceDetection;
