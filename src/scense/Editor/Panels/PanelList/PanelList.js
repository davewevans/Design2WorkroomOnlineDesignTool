import React from "react";
import { Box, Flex } from "@theme-ui/components";
import PanelItem from "./PanelListItem";
import { tabItems } from "./tabsItems";
import "../../../styles/styles.scss";
import { Scrollbar } from 'react-scrollbars-custom';
import { useCanvasValue } from "../../../../IntroirEditorBox/context";

//ref" https://github.com/xobotyi/react-scrollbars-custom
/*
 <Scrollbar
        renderThumbVertical={() => (
          <div style={{ background: "rgba(255,255,255,0.3)" }}></div>
        )}
        autoHide
        style={{display:'flex'}}
      >
*/

function PanelList(props) {
 const {  setPanelOpen, panelOpen } = props;
 const {activeTab, setActiveTab} = useCanvasValue()
  return (
    <Box
      sx={{
        width: "82px",
        background: "#0E1318",
        color: "#fff",
        paddingTop: "0.4rem",
        height: "1000px",
        '@media screen and (max-width: 1000px)': {
         height: '82px',
         paddingTop:'unset',
         width: '100%',
         display: 'flex',
         flexDirection: 'row',
        },
      }}
    >
      <Scrollbar style={{display:'flex'}}>
        <Flex sx={
          {
             flexDirection:'column',
              '@media screen and (max-width: 1000px)': {
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-around'
            },}
        }>
        {tabItems.map((tabItem) => (
          <PanelItem
            key={tabItem.name}
            icon={tabItem.icon}
            label={tabItem.label}
            name={tabItem.name}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            setPanelOpen={setPanelOpen}
            panelOpen={panelOpen}
          />
        ))}
        </Flex>
      </Scrollbar>
    </Box>
  );
}

export default PanelList;
