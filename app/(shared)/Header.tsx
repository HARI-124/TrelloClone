
import React from 'react'
import Navbar from './Navbar';
import Avatar from 'react-avatar';
import UserProfileIcon from '../icons/UserProfileIcon';

type Props = {}

const Header = (props: Props) => {
  return (
   <header  >
 
   <Navbar></Navbar>
    <div className=' z-10 bg-white flex items-center gap-2 p-6 w-fit rounded-md mx-auto shadow-lg '>
      <UserProfileIcon className=' h-14 w-14' ></UserProfileIcon>
      <p>GPT is changing the world</p>
    </div>
   </header>
  )
}

export default Header