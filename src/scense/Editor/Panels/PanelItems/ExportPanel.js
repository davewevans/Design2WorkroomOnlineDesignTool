import React from "react";
import { Button, Flex } from "@theme-ui/components";
import { jsPDF } from "jspdf";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";
import { APIBaseURL } from "../../../../index";

const ExportPanel = () => {
  const { canvas } = useCanvasValue();
  const pdf = new jsPDF("p", "in", [6.3, 9], "smart");
  const downloadPdf = () => {
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save("design.pdf");
  }; 
  const downloadImage = () => {
    const dataURL = canvas.toDataURL({
      width: canvas.width,
      height: canvas.height,
      left: 0,
      top: 0,
      format: "png",
    });
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    /* File Upload API CALL */
    fetch(dataURL)
    .then(function(responseArr) {return responseArr.arrayBuffer()})
    .then(function(buffer) {
      var bstr = new Uint8Array(buffer); //convert dataurl to Uint8Array
      var file = new File([bstr], "image.png", {type:"image/png", lastModified:new Date()}); //get file from Uint8Array

      const formData = new FormData();
      formData.append("formfile",file);
      
      //call API to upload image on Azure Blob Storage
      fetch(APIBaseURL + "api/Upload", {
        "method": "POST",
        "body": formData
      })
      .then(response => response.json())
      .then(response1 => {
        const url_string = window.location.href; //get page url
        const url = new URL(url_string);
        const ClientId = url.searchParams.get("ClientId"); //get client id from url
        const DesignerId = url.searchParams.get("DesignerId"); //get designer id from url
        const FileURL = response1.fileURL;

        var form = {
          ImageUrl: FileURL,
          DesignerId: DesignerId,
          ClientId: ClientId
        };

        fetch(APIBaseURL + "api/DesignConcepts", {
          "method": "POST",
          "body": JSON.stringify(form),
          "headers": new Headers({'content-type': 'application/json'})
        })
        .then(response2 => response2.json())
        .then(response3 => {
          console.log(response3);
        })
        .catch(err => {
          console.log(err);
        });
      })
      .catch(err => {
        console.log(err);
      });
    });
    /* File Upload API CALL */
  };

  return (
    <div style={{ marginBlockStart: "140px" }}>
      <Flex sx={{ marginBlock: "20px" }}>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#13805A",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={downloadPdf}
        >
          Export as Pdf
        </Button>
      </Flex>
      <Flex>
        <Button
          sx={{
            color: "#13805A",
            backgroundColor: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={downloadImage}
        >
          Export as png
        </Button>
      </Flex>
      {/* <Flex sx={{width:"100%", height:"100%"}}>
      <img src={img} alt="img" style={{width:"200px"}}/>
      </Flex> */}
    </div>
  );
};

export default ExportPanel;
