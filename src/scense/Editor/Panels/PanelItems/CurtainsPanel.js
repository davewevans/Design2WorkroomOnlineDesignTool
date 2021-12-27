import React from "react";
import { Flex, Grid, Text } from "@theme-ui/components";
import "../../../styles/styles.scss";
import Curtain1 from "../Curtains/Curtain1";
import Curtain2 from "../Curtains/Curtain2";
import Curtain3 from "../Curtains/Curtain3";
import Curtain4 from "../Curtains/Curtain4";
import Curtain5 from "../Curtains/Curtain5";
import Curtain6 from "../Curtains/Curtain6";
import Curtain7 from "../Curtains/Curtain7";

function CurtainsPanel() {
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
      <Text color="#fff"> Curtain Category 1</Text>
      <Flex backgroundColor="#dadada">
        <Curtain1 />
        <Curtain2 />
      </Flex>
      <Text color="#fff"> Curtain Category 2</Text>
      <Flex backgroundColor="#dadada" style={{padding:"10px"}}>
        <Curtain3 />
        <Curtain4 />
      </Flex>
      <Text color="#fff"> Curtain Category 3</Text>
      <Flex backgroundColor="#dadada">
        <Curtain5/>
        <Curtain6/>
      </Flex>
      <Text color="#fff"> Curtain Category 4</Text>
      <Flex backgroundColor="#dadada">
        <Curtain7/>
        <Curtain6/>
      </Flex>

    </Grid>
  );
}

export default CurtainsPanel;
