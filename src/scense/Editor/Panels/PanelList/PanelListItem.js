import React from "react";
import classNames from "classnames";
import PanelIcons from "./PalnelListItemIcon";
import "../../../styles/styles.scss"
import { useCanvasValue } from "../../../../IntroirEditorBox/context";


function PanelItem(props) {
  const {  label, icon, name,  setPanelOpen } = props
  const { activeTab ,setActiveTab} = useCanvasValue()
  const className = classNames({
    'panel-items-list-item': true,
    active: activeTab === name,
  })
  return (
    <div
      className={className}
      onClick={() => {
        setPanelOpen(true);
        setActiveTab(name);
      }}
  
    >
      <div>{PanelIcons[icon]?.render()}</div>
      <span style={{ textAlign: "center" ,fontSize:"12px"}}>{label}</span>
    </div>
  );
}

export default PanelItem;
