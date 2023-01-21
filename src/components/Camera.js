import React, { useState, useEffect, useRef } from 'react';

import { detectFaces, drawResults } from '../helpers/configFaceApi';

import Results from './Results';
import Webcam from 'react-webcam';


const Camera = () => {
  const camera = useRef();
  const cameraCanvas = useRef();

  const [results, setResults] = useState([]);

  const getFaces = async () => {
    if (camera.current !== null) {
      const faces = await detectFaces(camera.current.video);
      await drawResults(camera.current.video, cameraCanvas.current, faces, 'boxLandmarks');
      setResults(faces);
    }
  };

  const clearOverlay = (canvas) => {
    canvas.current.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (camera !== null) {
      const ticking = setInterval(async () => {
        await getFaces();
      }, 80);
      return () => {
        clearOverlay(cameraCanvas);
        clearInterval(ticking);
      };
    } else {
      return clearOverlay(cameraCanvas);
    }
  }, []);


  return (
    <div >
      <Webcam className="camera rounded" audio={false} ref={camera} width="100%" height="auto" />
      <Results results={results} />
    </div>
  );
};

export default Camera;
