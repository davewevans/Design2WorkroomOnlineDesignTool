import React, { useEffect, useState } from "react";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";
import { fabric } from "fabric";
const Curtain1 = () => {
  const { canvas ,setActiveObject} = useCanvasValue();
  const [curtain, setCurtain] = useState(null);
  const type = "curtains"
  useEffect(() => {
    const selectedCurtain = document.getElementById("curtain_1");
    const addedCurtains = selectedCurtain?.innerHTML;

    setCurtain(addedCurtains);
  }, []);
  const addCurtain = () => {
    fabric.loadSVGFromString(curtain, function (objects, options) {
      const obj = fabric.util.groupSVGElements(objects, options);
      obj.set({
        left: 100,
        top: 80,
        scaleX: 2,
        scaleY: 2,
        type:type
      });
      canvas.add(obj).setActiveObject(obj);
      setActiveObject(type);
    });
  };
  // canvas?.on("mouse:up", function (e) {
  //   const activeElement = e.target;
  //   setActiveObject(activeElement);
  // });
  return (
    <div onClick={addCurtain} id="curtain_1" style={{cursor:"pointer"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 100 125"
        enableBackground="new 0 0 100 100"
      >
        <g>
          <polygon points="83.984,52 74.236,90 82.833,90 85.902,52  " />
          <polygon points="20,52 17.248,52 26.995,90 33.024,90  " />
          <polygon points="67.174,90 73.2,90 82.947,52 80.191,52  " />
          <polygon points="14.291,52 17.363,90 25.958,90 16.21,52  " />
          <polygon points="11,52 11,90 16.359,90 13.287,52  " />
          <path
            d="M11,49h2.024l-0.005-0.3l0.054-0.244c0.034-0.077,3.479-7.903,3.224-16.051l1,0.188C17.537,40.294,14.673,47,14.09,49   h1.567c0.769-2,5.938-14.014,6.654-26.778l0.998,0.181C22.627,34.58,17.951,46,16.749,49h3.041c4.882-11,7.898-21.836,9.515-29.26   c0.248,0.027,0.499-0.082,0.754-0.082c3.346,0,6.143-2.486,6.882-5.741c0.74,3.255,3.537,5.647,6.882,5.647   c3.02,0,5.589-1.99,6.607-4.767c1.018,2.776,3.589,4.743,6.608,4.743c3.14,0,5.799-2.139,6.726-5.092   c0.928,2.953,3.586,5.086,6.727,5.086c0.074,0,0.146,0.24,0.22,0.237C72.357,27.198,75.414,38,80.292,49h3.153   c-1.201-3-5.877-14.545-6.561-26.722l0.998,0.069C78.6,35.111,83.77,47,84.538,49h1.567c-0.584-2-3.447-8.737-3.207-16.438l1-0.094   c-0.256,8.156,3.188,15.849,3.224,15.926l0.054,0.338L87.171,49H89V17.184c1-1.32,1.848-2.837,1.848-4.787   c0-0.567-0.131-1.397-0.246-1.397H9.398c-0.116,0-0.119,0.83-0.119,1.397c0,1.807,0.72,3.211,1.72,4.494L11,49L11,49z"
          />
          <polygon  points="86.908,52 83.837,90 89,90 89,52  " />
        </g>
      </svg>
    </div>
  );
};

export default Curtain1;
