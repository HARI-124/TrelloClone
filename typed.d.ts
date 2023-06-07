import {Models} from "appwrite"

export type BoardType = {
    $collectionId:string,
    $createdAt : string,
    $databaseId : string,
    $id : string,
    title :string,
    $permissions: string[],
    $updatedAt :string,
    status: 'inprogress'|'done'|'todo',
    image?: string
}

export type BoardState ={
    board : Models.Document[],
    fetchBoard: () => Promise<void>
}