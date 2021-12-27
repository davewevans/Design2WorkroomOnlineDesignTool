import React, { useEffect, useState } from "react";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";
import {fabric} from "fabric"

const Curtain2 = () => {
    const { canvas} = useCanvasValue();
    const[curtain,setCurtain]= useState(null)
    useEffect(() => {
      const selectedCurtain = document.getElementById("curtain_2");
      const addedCurtains = selectedCurtain?.innerHTML;
  
   setCurtain(addedCurtains)
      
    }, [])
    const addCurtain = () => {
      
      fabric.loadSVGFromString(curtain, function (objects, options) {
        const obj = fabric.util.groupSVGElements(objects, options);
        obj.set({
          left: 100,
          top: 80,
          scaleX: 2,
          scaleY:2,
        });
      
        canvas.add(obj).setActiveObject(obj);
        // setActiveObject(obj);
      });
    
    };
  return (
    <div id="curtain_2" onClick={addCurtain} style={{cursor:"pointer"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        enableBackground="new 0 0 100 100"
        width="100%"
        height="100%"
      >
        <path  d="M98,12H4v5h3v70h8c0-5.1-0.1-20-4-26c0,0,33.4-2.9,39-38h4c0,0,2.1,31.2,38,38c0,0-3.2,14.5-4,26h7V17h3V12z" />
      </svg>
    </div>
  );
};

export default Curtain2;
