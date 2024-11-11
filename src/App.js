// App.js
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { Col, Row} from "react-bootstrap";
import "./App.css";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import HomePage from "./Components/Home/HomePage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from "./Components/assets/arrow-left.svg";
import { loveYouGesture } from "./Gestures/LoveYou";
import { yesGesture} from "./Gestures/Yes.js"
import { NoGesture } from "./Gestures/No";
import { thankYouGesture } from "./Gestures/ThankYou.js"


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [gestureText, setGestureText] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
        //fp.Gestures.VictoryGesture,
        //fp.Gestures.ThumbsUpGesture,
          loveYouGesture,
          yesGesture,
          NoGesture,
          thankYouGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          const detectedGesture = gesture.gestures[maxConfidence].name;

          switch (detectedGesture) {
          case "i_love_you":
              setGestureText("I love you 💗");
              break;
          case "Yes":
              setGestureText("Yes ✔️");
                break;
          case "No":
              setGestureText("No ❌");
                break;
          case "Thank_You":
                setGestureText("Thank you 🤚");
                break;
            default:
              setGestureText("");
              break;
          }
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
    {currentPage === "home" && (<HomePage onNavigate={handleNavigate} />)}

    {currentPage === "app" && (

          <Col>
            {/* Return Button */}
            <Row>
              <Col align-self-center >
                <button onClick={() => handleNavigate("home")} className="return-btn">
                <img src={Arrow} alt="" width="30" height="30" />
                </button></Col>
            </Row>
            
            {/* Sign Detector */}
            <Row>
                <div className="SignDetector">
                <canvas ref={canvasRef} className="canvas" />
                <Webcam ref={webcamRef} className="WebCam" />
                </div>
            </Row>

            {/* Text */}
            <Row>
              {gestureText !== "" && (
                <Col>
                <div className="TextBackground"> 
                <p className="gestureText">{gestureText}</p>
                </div>
                </Col>
              )}
            </Row>
          </Col>
    )}
  </div>
  );
}

export default App;
