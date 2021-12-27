import React from "react";
import { Flex } from "@theme-ui/components";
import CanvasArea from "./CanvasArea/CanvasArea";
import Panel from "./Panels/Panel";
import Toolbox from "./Toolbox/Toolbox";
import { useCanvasValue } from "../../IntroirEditorBox/context";
// import Navbar from "./Navbar";
// import Panel from "./Panels/Panel";
// import Toolbox from "./Toolbox/Toolbox";

function Editor() {
  const {isMobile} = useCanvasValue()
  return (
    <Flex sx={{ flex: 1, flexDirection: "column" }}>
      {isMobile ? (
        <Flex sx={{ flex: 1, flexDirection: "column-reverse" }}>
          <Panel />

          <Flex
            sx={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Toolbox />
            <CanvasArea />
          </Flex>
        </Flex>
      ) : (
        <Flex sx={{ flex: 1, flexDirection: "row" }}>
          <Panel />
          <Flex
            sx={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            <Toolbox />
            <CanvasArea />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Editor;
