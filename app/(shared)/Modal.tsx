import React from 'react';
import XCircleIcon from '../icons/XCircleIcon';



type Props = {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
};
type BackdropProps = {
  onClose: () => void;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      onClick={onClose}
      className="-z-10 absolute top-0 bg-slate-800  h-screen w-screen"
    ></div>
  );
};

const Modal = (props: Props) => {
  return (
    <div className="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0 h-full w-full transition-opacity">
      <Backdrop onClose={props.onClose} />
      <div className="relative bg-white rounded-md transition-all block mx-auto w-1/3 h-fit my-auto z-20">
        <button onClick={props.onClose} className="absolute right-2 top-2">
          <XCircleIcon></XCircleIcon>
        </button>

        {props.children}
      </div>
    </div>
  );
};

export default Modal;
