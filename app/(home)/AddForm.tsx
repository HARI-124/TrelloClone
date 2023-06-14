import React from 'react';
import { databases } from '@/appwrite';
import Button from '../(shared)/Button';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  status:string,
  onClose: ()=> void
};

interface DataType {
  title: string;
  Image: string;
  status:string;
}

const AddForm = (props: Props) => {
  const [data, setData] = React.useState<DataType>({ title: '', Image: '',status:props.status });

  async function handleSubmit(e:React.FormEvent) {
    // e.preventDefault()
    console.log(data)
    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      uuidv4(),
      data

    )
    
    props.onClose()
  
  }

  return (
    <div className='p-10 h-fit'>
      <h1 className='text-2xl font-bold text-center'>Add  todo</h1>
      <form action="" className="flex flex-col gap-3 items-center" onSubmit={handleSubmit} >


        <div className='w-full relative p-5'>
          <label className="absolute" htmlFor="title">title</label>
          <input
            required
            className="peer w-full mt-6 outline-none border-b-2 border-solid border-black"
            type="text"
            name="title"
            id="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <p className="peer-required:visible invisible text-rose-800  ">
            title field is required
          </p>
        </div>
        <div className='w-full relative p-5'>
          <label className="absolute" htmlFor="image">Image</label>
          <input
            className="peer mt-6 w-full outline-none border-b-2 border-solid border-black"
            type="text"
            name="image"
            id="image"
            value={data.Image}
            onChange={(e) => setData({ ...data, Image: e.target.value })}
          />
          <p className=" text-green-700  ">
            Image is optional
          </p>
        </div>

        <Button className='mb-4 mt-auto' type='submit' text='Submit'></Button>
      </form>
    </div>
  );
};

export default AddForm;
