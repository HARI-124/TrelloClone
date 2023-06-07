'use client';
import React,{useEffect} from 'react'
import useBoard from '@/store/BoardStore'
import { BoardType } from '@/typed'

type Props = {}

const page = (props: Props) => {
  const {board,fetchBoard} = useBoard()
    
  useEffect(()=>{
    fetchBoard()
   
  },[])
  
  useEffect(()=>{
    console.log(board);
  },[board])




  return (
    <div>page</div>
  )
}

export default page