import React from 'react'
import { Flex } from '@theme-ui/components'
import { useCanvasValue } from '../../../IntroirEditorBox/context/editor'
import DeleteIcon from './deleteIcon';
// import ToolboxItems from './ToolboxItems';
import CurtainsToolbox from './CurtainsToolbox';
import { Button, Menu, MenuItem } from '@mui/material';
import useStyles from './toolbox.style';

const Toolbox = () => {
  const clasess = useStyles()
    const {activeObject,canvas} = useCanvasValue();
    const deleteElement = () => {
        canvas.remove(...canvas.getActiveObjects());
      };
      // const Toolbox =  activeObject ? ToolboxItems[activeObject.type] : null
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const sentToForward = () => {
        canvas.getActiveObject() && canvas.getActiveObject().bringForward();
      };
      const sentToBackward = () => {
        canvas.getActiveObject() && canvas.getActiveObject().sendToBack();
      };
    return (
        <Flex 
        sx={{
            height: 54,
            alignItems: "center",
            padding: "0 1rem",
            justifyContent: "space-between",
            alignSelf:activeObject?"unset":"end",
            width: "100%",
            '@media screen and (max-width: 600px)': {
              minWidth:'unset',
              overflowX:' auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap'
              },
          }}
        >
            {/* {Toolbox ? <Toolbox /> : <UploadToolbox/>} */}
          <CurtainsToolbox/>
          <Flex>

          <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="text"
          className={clasess.position}
        >
          Position
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className={clasess.menu}
        >
          <MenuItem
            className={clasess.menuItem}
            onClick={(handleClose, sentToForward)}
          >
            <span>
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginInlineEnd: "10px" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.49609 0.75L0.378906 2.66895L4.49609 4.21289V2.625H6.49609V4.21289L10.6133 2.66895L5.49609 0.75ZM4.99609 3.00293V6.06445L4.43555 5.64404L3.72852 6.17432L5.49609 7.5L7.26367 6.17432L6.55664 5.64404L5.99609 6.06445V3.00293H4.99609ZM5.49609 8.16211L5.27344 8.24561L0.378906 10.0811L5.49609 12L10.6152 10.0811L5.49609 8.16211Z"
                  fill="black"
                />
              </svg>
              Forward
            </span>
          </MenuItem>
          <MenuItem
            className={clasess.menuItem}
            onClick={(handleClose, sentToBackward)}
          >
            <span>
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginInlineEnd: "10px" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.49609 0.75L0.378906 2.66895L4.49609 4.21289V2.625H6.49609V4.21289L10.6133 2.66895L5.49609 0.75ZM4.99609 3.00293V6.06445L4.43555 5.64404L3.72852 6.17432L5.49609 7.5L7.26367 6.17432L6.55664 5.64404L5.99609 6.06445V3.00293H4.99609ZM5.49609 8.16211L5.27344 8.24561L0.378906 10.0811L5.49609 12L10.6152 10.0811L5.49609 8.16211Z"
                  fill="black"
                />
              </svg>
              Backward
            </span>
          </MenuItem>
        </Menu>
        <Flex onClick={deleteElement} style={{ alignSelf: "center" }}>
          <DeleteIcon/>
        </Flex>  
                    
        </Flex>
        </Flex>
    )
}

export default Toolbox
