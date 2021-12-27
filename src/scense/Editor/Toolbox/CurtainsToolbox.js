import { Box, Flex } from "@theme-ui/components";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { useCanvasValue } from "../../../IntroirEditorBox/context";
const CurtainsToolbox = () => {
  const { canvas, setColor, color } = useCanvasValue();
  const [options, setOptions] = useState({
    backgroundColor: "#ffffff",
  });
  const [dropdown, setDropdown] = useState({
    displayColorPicker: false,
  });
  const handleClick = () => {
    setDropdown({
      ...dropdown,
      displayColorPicker: !dropdown.displayColorPicker,
    });
  };
  const handleClose = () => {
    setDropdown({ ...dropdown, displayColorPicker: false });
  };
  const popover = {
    position: "absolute",
    zIndex: 2,
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  const onColorChange = (color) => {
    setOptions({ ...options, backgroundColor: color.hex });
    setColor({ ...options, backgroundColor: color.hex });
    canvas.getActiveObject() &&
      canvas.getActiveObject().set({
        fill: color.hex,
        stroke: color.hex,
      });
    canvas.renderAll();
  };
  return (
    <Flex
      sx={{
        height: 54,
        alignItems: "center",
        padding: "0 1rem",
        justifyContent: "flex-start",
       
      }}
    >
      <div style={{ position: "relative" }}>
        {/* start color picker */}
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          {options.backgroundColor === "#ffffff" ? (
            <div
              style={{ backgroundColor: color, width: "30px", height: "30px" }}
            ></div>
          ) : (
            <Box
              sx={{
                background: options.backgroundColor,
                height: 30,
                width: 30,
              }}
            />
          )}
        </div>
        {dropdown.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={handleClose} />
            <SketchPicker
              color={options.backgroundColor}
              onChange={onColorChange}
            />
          </div>
        ) : null}
      </div>
    </Flex>
  );
};

export default CurtainsToolbox;
