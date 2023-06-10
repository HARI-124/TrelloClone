import { create, } from 'zustand'
import { databases } from '@/appwrite'
import { Models } from 'appwrite'
import { BoardType,BoardState } from '@/typed'
import Board from '@/app/(home)/Board'

const useBoard = create<BoardState>((set) => ({

    board : [],
    
    fetchBoard : async ()=>{
        const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_COLLECTION_ID!
        )
            // const data:BoardType[] = response.documents
        console.log(response.documents);
        set({board:response.documents});
  
    },
    
    setBoard : (board)=>{
        set({board})
    }

}))

export default useBoard;