import React from 'react'
import { Flex } from '@theme-ui/components'
import Editor from '../../../IntroirEditorBox'


function CanvasArea() {
    return (
        <Flex
        sx={{
          flex: 1,
          position: 'relative',
          flexDirection:'column'
        }}
      >
        <Editor />
  
      </Flex>
    )
}

export default CanvasArea
