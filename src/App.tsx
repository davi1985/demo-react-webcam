import { useRef, useState } from "react";
import Webcam from "react-webcam";

import "./App.css";

export const App = () => {
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const [self, setSelfie] = useState();

  const webRef = useRef(null);

  const capturePhoto = () => {
    setSelfie(webRef.current?.getScreenshot());
  };

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user",
  };

  return (
    <div className="app">
      {isOpenCamera && (
        <>
          <Webcam
            ref={webRef}
            autoFocus
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            forceScreenshotSourceSize
          />

          <button onClick={capturePhoto}>CAPTURE PHOTO</button>
        </>
      )}

      {!isOpenCamera && (
        <button onClick={() => setIsOpenCamera(true)}>Abrir camera</button>
      )}

      {self && (
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "1rem",
          }}
        >
          <img src={self} alt="" style={{ width: "100px" }} />
        </div>
      )}
    </div>
  );
};
