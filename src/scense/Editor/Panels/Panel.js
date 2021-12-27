import React, { useState } from "react";
import { Flex } from "@theme-ui/components";
// import ClosePanel from "./ClosePanel";
import PanelList from "./PanelList/PanelList";
import PanelItem from "./PanelItems/PanelItem"

function Panel() {
  const [panelOpen, setPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('template');
  // const closePanel = () => {
  //   setPanelOpen(!panelOpen);
  // };
  const isPanelOpen = panelOpen;
  return (
    
    <Flex
      sx={{
       position: "relative",
        background: "#0E1318",
        boxShadow: "5px 0 5px -5px rgba(0, 0, 0, 0.5)",
        userSelect: "none",
        '@media screen and (max-width: 1000px)': {
          background: 'transparent',
          boxShadow:'unset',
          flexDirection:'column-reverse'
        },
      }}
    >
      <PanelList
        setPanelOpen={setPanelOpen}
        panelOpen={isPanelOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PanelItem activeTab={activeTab} panelOpen={isPanelOpen} />
      {/* <ClosePanel panelOpen={isPanelOpen} closePanel={closePanel} /> */}
    </Flex>
   
  
  );
}

export default Panel;
