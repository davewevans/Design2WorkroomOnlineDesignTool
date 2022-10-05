import { Box, Flex, Grid } from "@theme-ui/components";
import React, { useState, useEffect } from 'react';
import { fabric } from "fabric";
import { APIBaseURL } from "../../../../index";
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

  const [UploadedPics, setUploadedPics] = useState([]);
  var DefaultPicsCount;

  //fetch uploaded images
  useEffect(() => {
  fetch(APIBaseURL + 'api/ClientDesign')
    .then((res) => res.json())
    .then((json) => {
      setUploadedPics(json);
      DefaultPicsCount = pics.length;
  });  
  }, []);

  const addImageToCanvas = (pic) => {
    fabric?.Image?.fromURL(pic, function (myImg) {
      myImg.set({
        type: "image",
      });
      myImg.crossOrigin = 'anonymous';
      canvas.add(myImg);
      canvas.setActiveObject(myImg);
    }, { crossOrigin: 'anonymous' });
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

      {UploadedPics.map((pic, index) => (
        <Flex key={DefaultPicsCount++} sx={{ cursor: "pointer" }}>
          <Box sx={{ width: "150px" }} onClick={() => addImageToCanvas(pic.imageUrl)}>
            <img src={pic.imageUrl} alt="img" style={{ width: "100%" }}/>
          </Box>
        </Flex>
      ))

      }
    </Grid>
  );
};

export default PhotoPanel;
