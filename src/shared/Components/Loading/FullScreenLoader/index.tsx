import React from 'react';
import { Loader } from '../Default';

export const FullScreenLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-40">
      <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-80" />
      <div
        className={`w-full  h-full  z-40 border-2 border-black rounded-md flex justify-center items-center scale-150`}
      >
        <Loader />
      </div>
    </div>
  );
};
