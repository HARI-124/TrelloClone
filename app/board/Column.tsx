import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Models } from 'appwrite';
import PlusCircleIcon from '../icons/PlusCircleIcon';
import TodoCard from './TodoCard';
// import Modal from './Modal'
import Modal from '@/app/(shared)/Modal';
import AddForm from '../(home)/AddForm';

type Props = {
  id: string;
  index: number;
  todo: string;
  items: Models.Document[];
  status: string;
};

const Column = (props: Props) => {
  const [isModal, setModal] = useState(false);



  return (
    <div>
      <Draggable draggableId={props.id} index={props.index}>
        {(provider) => (
          <div
            {...provider.dragHandleProps}
            {...provider.draggableProps}
            ref={provider.innerRef}
          >
            <Droppable droppableId={props.index.toString()} type="card">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-2 rounded-xl shadow-sm ${
                    snapshot.isDraggingOver ? ' bg-green-200' : ' bg-white/50'
                  }`}
                >
                  <h2 className=" flex justify-between font-bold text-xl p-2 transition-all duration-300">
                    {props.todo}

                    <span className=" text-gray-500 bg-gray-200 rounded-full p-2 text-sm font-normal ">
                      {props.items.length}
                    </span>
                  </h2>

                  <div className=" space-y-2">
                    {props.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.$id}
                          draggableId={item.$id}
                          index={index}
                        >
                          {(provided) => (
                            <TodoCard
                              item={item}
                              index={index}
                              id={item.id}
                              dragHandleProps={provided.dragHandleProps!}
                              draggableProps={provided.draggableProps!}
                              innerRef={provided.innerRef}
                            />
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}{' '}
                    {/* Gives space while dragging scross columns  */}
                    <div className=" flex items-end justify-end p-2w ">
                      <button
                        data-modal-target="authentication-modal"
                        data-modal-toggle="authentication-modal"
                        onClick={() => setModal(true)}
                        className="text-green-500 hover:text-green-600"
                      >
                        <PlusCircleIcon className=" h-10 w-10"></PlusCircleIcon>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
      {isModal && (
        <Modal open={isModal} onClose={() => setModal(false)}>
          <AddForm status={props.status} onClose={() => setModal(false)}></AddForm>
        </Modal>
      )}
    </div>
  );
};

export default Column;
