import React, { useEffect, useState } from "react";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";
import { fabric } from "fabric";

const Curtain7 = () => {
  const { canvas } = useCanvasValue();
  const [curtain, setCurtain] = useState(null);
  useEffect(() => {
    const selectedCurtain = document.getElementById("curtain_7");
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
      });
      canvas.add(obj).setActiveObject(obj);
      // setActiveObject(obj);
    });
  };
  return (
    <div id="curtain_7" onClick={addCurtain} style={{ cursor: "pointer" }}>
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
        <path
          fill="#000000"
          d="M83.349,8.256c-1.345,0-2.53,0.678-3.231,1.713c-0.32-0.158-0.68-0.246-1.061-0.246  c-0.648,0-1.234,0.251-1.669,0.664h-2.375V8.923c0-0.125-0.1-0.225-0.221-0.225H73.98c-0.122,0-0.221,0.1-0.221,0.225v1.465h-4.84  V8.923c0-0.125-0.1-0.225-0.221-0.225H67.89c-0.124,0-0.224,0.1-0.224,0.225v1.465h-4.837V8.923c0-0.125-0.097-0.225-0.222-0.225  h-0.809c-0.123,0-0.221,0.1-0.221,0.225v1.465H38.905V8.923c0-0.125-0.1-0.225-0.221-0.225h-0.812c-0.121,0-0.221,0.1-0.221,0.225  v1.465h-4.839V8.923c0-0.125-0.1-0.225-0.222-0.225h-0.809c-0.124,0-0.223,0.1-0.223,0.225v1.465h-4.838V8.923  c0-0.125-0.097-0.225-0.222-0.225h-0.808c-0.124,0-0.222,0.1-0.222,0.225v1.465h-2.856c-0.436-0.412-1.022-0.664-1.67-0.664  c-0.38,0-0.738,0.088-1.061,0.246c-0.7-1.035-1.885-1.713-3.23-1.713c-2.155,0-3.905,1.749-3.905,3.904  c0,2.157,1.75,3.905,3.905,3.905c1.345,0,2.53-0.679,3.23-1.713c0.323,0.154,0.681,0.245,1.061,0.245  c0.648,0,1.234-0.254,1.67-0.666h2.856v1.163h-1.541c-0.089,0-0.159,0.1-0.159,0.223v76.205c0,0.122,0.07,0.222,0.159,0.222h4.328  c0.089,0,0.162-0.1,0.162-0.222V15.317c0-0.123-0.073-0.223-0.162-0.223h-1.536v-1.163h4.838v1.163h-1.537  c-0.088,0-0.161,0.1-0.161,0.223v76.205c0,0.122,0.073,0.222,0.161,0.222h4.33c0.088,0,0.159-0.1,0.159-0.222V15.317  c0-0.123-0.07-0.223-0.159-0.223h-1.539v-1.163h4.839v1.163h-1.537c-0.09,0-0.162,0.1-0.162,0.223v76.205  c0,0.122,0.072,0.222,0.162,0.222h4.33c0.087,0,0.159-0.1,0.159-0.222V15.317c0-0.123-0.072-0.223-0.159-0.223h-1.54v-1.163h22.672  v1.163h-1.542c-0.088,0-0.159,0.1-0.159,0.223v76.205c0,0.122,0.071,0.222,0.159,0.222h4.329c0.091,0,0.162-0.1,0.162-0.222V15.317  c0-0.123-0.071-0.223-0.162-0.223h-1.536v-1.163h4.837v1.163h-1.537c-0.088,0-0.16,0.1-0.16,0.223v76.205  c0,0.122,0.071,0.222,0.16,0.222h4.33c0.087,0,0.161-0.1,0.161-0.222V15.317c0-0.123-0.074-0.223-0.161-0.223h-1.54v-1.163h4.84  v1.163h-1.537c-0.088,0-0.162,0.1-0.162,0.223v76.205c0,0.122,0.073,0.222,0.162,0.222h4.33c0.087,0,0.158-0.1,0.158-0.222V15.317  c0-0.123-0.071-0.223-0.158-0.223h-1.54v-1.163h2.375c0.436,0.412,1.021,0.666,1.669,0.666c0.381,0,0.741-0.091,1.061-0.245  c0.701,1.034,1.886,1.713,3.231,1.713c2.157,0,3.904-1.749,3.904-3.905C87.253,10.005,85.506,8.256,83.349,8.256z"
        />
      </svg>
    </div>
  );
};

export default Curtain7;
