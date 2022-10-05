import { Box, Flex } from "theme-ui";
import { Scrollbar } from 'react-scrollbars-custom';
import classNames from "classnames";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";
import CurtainsPanel from "./CurtainsPanel";
import UploadPanel from "./UploadPanel";
import ExportPanel from "./ExportPanel";
import PhotoPanel from "./PhotoPanel";
import "../../../styles/styles.scss";

//ref" https://github.com/xobotyi/react-scrollbars-custom

/**
 *
 *   renderThumbVertical={() => (
            <div
              style={{
                background: "rgba(255,255,255,0.3)",
                height: "50px !important",
              }}
            ></div>
          )}
 */

function PanelItem({ panelOpen }) {
  const { activeTab } = useCanvasValue();
  const className = classNames({
    "panel-item-container": true,
    open: panelOpen,
  });
  return (
    <div className={className}>
      <Box sx={{ flex: 1 }}>
        <Scrollbar style={{ cursor: "pointer" }}>
          <Flex
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {activeTab === "template" && <CurtainsPanel />}
            {activeTab === "element" && <PhotoPanel />}
            {activeTab === "upload" && <UploadPanel />}
            {activeTab === "export" && <ExportPanel />}
            {/* {activeTab === 'text' &&<TextPanel />} */}
          </Flex>
        </Scrollbar>
      </Box>
    </div>
  );
}
export default PanelItem;
