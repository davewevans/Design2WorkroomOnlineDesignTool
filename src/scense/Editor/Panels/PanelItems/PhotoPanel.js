import { Box, Flex, Grid } from "@theme-ui/components";
import React from "react";
import { fabric } from "fabric";
import {
  win2,
  win1,
  win10,
  win11,
  win3,
  win4,
  win5,
  win6,
  win7,
  win8,
  win9,
} from "../img";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";

const PhotoPanel = () => {
  const { canvas } = useCanvasValue();
  const pics = [
    win3,
    win4,
    win1,
    win2,
    win5,
    win6,
    win7,
    win7,
    win8,
    win9,
    win10,
    win11,
  ];
  const addImageToCanvas = (pic) => {
    fabric?.Image?.fromURL(pic, function (myImg) {
      myImg.set({
        type: "image",
      });
      canvas.add(myImg);
      canvas.setActiveObject(myImg);
    });
  };
  return (
    <Grid
      sx={{
        gap: "1rem",
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="objects-list"
    >
      {pics.map((pic, index) => (
        <Flex key={index} sx={{ cursor: "pointer" }}>
          <Box sx={{ width: "150px" }} onClick={() => addImageToCanvas(pic)}>
            <img src={pic} alt="img" style={{ width: "100%" }} />
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};

export default PhotoPanel;
