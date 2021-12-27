import React from "react";
import { Button, Flex } from "@theme-ui/components";
import { jsPDF } from "jspdf";
import { useCanvasValue } from "../../../../IntroirEditorBox/context";

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
