'use client';
import React, { useEffect, useState } from 'react';
import useBoard from '@/store/BoardStore';
import { BoardType } from '@/typed';
import { Droppable, DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './Column';
import { Models } from 'appwrite';
import { databases } from '@/appwrite';

type Props = {};

const BoardPage = (props: Props) => {
  const [board, fetchBoard, setBoard] = useBoard((state) => [
    state.board,
    state.fetchBoard,
    state.setBoard,
  ]);
  const [todos, setTodos] = useState<Array<Models.Document>>([]);
  const [inProgress, setInProgress] = useState<Array<Models.Document>>([]);
  const [done, setDone] = useState<Array<Models.Document>>([]);

  function fetchData() {
    Promise.all([fetchBoard()]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(board);
    setTodos(() => board.filter((i) => i.status === 'todo'));
    setInProgress(() => board.filter((i) => i.status === 'inprogress'));
    setDone(() => board.filter((i) => i.status === 'done'));
  }, [board]);

  function handleOnDragEnd(result: DropResult) {
    const { source, destination, type, draggableId } = result;

    if (type === 'card') {
      switch (destination?.droppableId) {
        case '0':
          const element = board.map((item) => {
            item.$id === draggableId;
            return item;
          });
          const remainingArr = board.filter((i) => i.$id !== draggableId);

          element[0].status = 'todo';
          setBoard([...remainingArr, element[0]]);

          break;
        case '1':
          const element1 = board.map((item) => {
            item.$id === draggableId;
            return item;
          });
          console.log(element1[0]);
          const remainingArr1 = board.filter((i) => i.$id !== draggableId);
          element1[0].status = 'inprogress';
          setBoard([...remainingArr1, element1[0]]);

          break;
        case '2':
          const element2 = board.map((item) => {
            item.$id === draggableId;
            return item;
          });
          console.log(element2[0]);
          const remainingArr2 = board.filter((i) => i.$id !== draggableId);
          element2[0].status = 'done';
          setBoard([...remainingArr2, element2[0]]);

          break;
        default:
          break;
      }
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provider) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5 max-w-7xl"
            {...provider.droppableProps}
            ref={provider.innerRef}
          >
            <Column status='todo' id="0" index={0} todo="To-Do" items={todos}></Column>
            <Column
              id="1"
              index={1}
              todo="In-progress"
              items={inProgress}
              status='inprogress'
            ></Column>
            <Column status='done' id="2" index={2} todo="Done" items={done}></Column>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardPage;
