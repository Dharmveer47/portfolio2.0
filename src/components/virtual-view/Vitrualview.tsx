import React from "react";
import ReactPannellum from "react-pannellum";
import { cityVr } from "./img";

export const Vitrualview = () => {
  const config = {
    autoRotate: 1,
    autoLoad: true,
    // sceneFadeDuration: 2000,
    // autoRotateInactivityDelay: 30000,
    showZoomCtrl: false,
    keyboardZoom: false,
    mouseZoom: false,
    disableKeyboardCtrl: true,
    showFullscreenCtrl: false,
    showControls: false,
    defaultZoom: 2, 
  };
  return (
    <div>
      <div>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource={cityVr}
          config={config}
          style={{ width: "100%", height: "100vh" }}
        />
        {/* <div onClick={this.click}>Click me</div> */}
      </div>
    </div>
  );
};
