
import React from 'react';
import { Models } from 'appwrite';
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';
import XCircleIcon from '../icons/XCircleIcon';
import { databases } from '@/appwrite';
import useBoard from '@/store/BoardStore';


type Props = {
  item: Models.Document;
  index: number;
  id: string;
  dragHandleProps: DraggableProvidedDragHandleProps;
  draggableProps: DraggableProvidedDraggableProps;
  innerRef: (element: HTMLElement | null) => void;
};



const TodoCard = (props: Props) => {
 
 console.log(props.id)
  
  const [board, setBoard] = useBoard((state) => [state.board, state.setBoard])


 async function deleteTodo(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
   
  await databases.deleteDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!,
    props.item.$id,

  )
    const updatedArray = board.filter((item)=>item.$id!==props.item.$id)


  }
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md transition-all flex-initial"
      {...props.dragHandleProps}
      {...props.draggableProps}
      ref={props.innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <h1>{props.item.title}</h1>
        <button onClick={deleteTodo}>
          <XCircleIcon className=" text-red-400 h-8 w-8 hover:text-red-600"></XCircleIcon>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
