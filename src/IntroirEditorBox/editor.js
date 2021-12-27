import React from "react";
import { useEffect } from "react";
import { fabric } from "fabric";
import { useCanvasValue } from "./context";


function Editor() {
  const { setCanvas } = useCanvasValue();
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      left: 50,
      top: 20,
      preserveObjectStacking: true,
    });
    canvas.setWidth(614.4);
    canvas.setHeight(864);
    setCanvas(canvas);

    // eslint-disable-next-line
  }, []);
  return (
    <div
      style={{
        height: "1000px",
        width: "100%",
        backgroundColor: "#F9F9F9",
      }}
    >
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Editor;
