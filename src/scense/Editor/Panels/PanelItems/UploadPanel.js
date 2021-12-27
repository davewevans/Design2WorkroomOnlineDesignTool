import React, { useState } from "react";
import { Flex, Grid, Input } from "@theme-ui/components";
import { fabric } from "fabric";
import { useCanvasValue } from "../../../../IntroirEditorBox/context/editor.js";

const UploadPanel = () => {
  const { canvas} = useCanvasValue();
  const [media, setMedia] = useState(null);
  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };
  const addImageToCanvas = () => {
    fabric.Image.fromURL(media, function (myImg) {
      myImg.set({
        type: "image",
      });
      canvas.add(myImg);
      canvas.setActiveObject(myImg);
    });
  };
  const onMediaChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setMedia(URL.createObjectURL(img));
      // getBase64(img).then((base64) => {
      //   localStorage["fileBase64"] = base64;
      //   console.debug("file stored", base64);
      // });
    }
    
  };
  return (
    <>
      <Grid
        sx={{
          padding: "1rem 2rem",
        }}
        className="objects-list"
      >
        <Flex
          sx={{
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <label
            htmlFor="file-upload"
            className="custom-file-upload"
            style={{
              textAlign: "center",
              background: "#13805A",
              paddingBlock: "13px",
              paddingInline: "50px",
              fontSize: "14px",
              color: "#fff",
              fontFamily: "work sans",
              borderRadius: "4PX",
              boxShadow: "inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
              margin: "auto",
              marginTop: "70px",
            }}
          >
            Upload Media
          </label>
          <Input
            id="file-upload"
            style={{ background: "#fff", display: "none" }}
            type="file"
            placeholder="Upload Media"
            onChange={onMediaChange}
          />
        </Flex>
        <Grid>
          <Flex
            sx={{
              width: " 200px",
              height: "300px",
            }}
            onClick={addImageToCanvas}
          >
            {media && (
              <img
                src={media}
                alt="media"
                style={{ width: "100%", height: "100%" }}
                id="stored_img"
              />
            )}
          </Flex>
        </Grid>
      </Grid>
    </>
  );
};

export default UploadPanel;
