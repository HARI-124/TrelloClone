import React from 'react'
import {DragDropContext,Droppable} from "react-beautiful-dnd"


type Props = {}

const Board = (props: Props) => {
  return (
    <DragDropContext>
    <Droppable droppableId='board' direction='horizontal' type='column'  >

    </Droppable>
    </DragDropContext>
  )
}

export default Board