import { createContext, useContext, useState } from "react";
export const EditorContext = createContext({
  canvas: null,
  setCanvas: () => {},
  activeTab:"template",
  setActiveTab:()=>{},
  img:[],
  setImg:()=>{},
  activeObject:null,
  setActiveObject:()=>{},
  color: "",
  setColor:()=>{},
  isMobile:false,
  setisMobile:()=>{}
});

export const EditorProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const [activeTab, setActiveTab] = useState('template');
  const [color, setColor] = useState('#F5A623');
  const [activeObject, setActiveObject] = useState(null);
  const[img,setImg]=useState([]);
  const [isMobile, setisMobile] = useState(false);

  const context = {
    canvas,
    setCanvas,
    activeTab,
    setActiveTab,
    activeObject,
    setActiveObject,
    color,
    setColor,
    img,setImg,
    isMobile,
    setisMobile
  };

  return (
    <EditorContext.Provider value={context}>{children}</EditorContext.Provider>
  );
};
export const useCanvasValue = () => useContext(EditorContext);