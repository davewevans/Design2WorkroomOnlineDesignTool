import { Box, Flex } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import classNames from "classnames";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";
import CurtainsPanel from "./CurtainsPanel";
import UploadPanel from "./UploadPanel";
import ExportPanel from "./ExportPanel";
import PhotoPanel from "./PhotoPanel";
import "../../../styles/styles.scss";

function PanelItem({ panelOpen }) {
  const { activeTab } = useCanvasValue();
  const className = classNames({
    "panel-item-container": true,
    open: panelOpen,
  });
  return (
    <div className={className}>
      <Box sx={{ flex: 1 }}>
        <Scrollbars
          style={{ cursor: "pointer" }}
          renderThumbVertical={() => (
            <div
              style={{
                background: "rgba(255,255,255,0.3)",
                height: "50px !important",
              }}
            ></div>
          )}
        >
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
        </Scrollbars>
      </Box>
    </div>
  );
}
export default PanelItem;
