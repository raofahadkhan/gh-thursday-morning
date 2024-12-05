import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 md:grid-rows-4 h-screen gap-2 p-2">
      <div className="flex justify-center items-center bg-blue-400 col-span-5">Header</div>
      <div className="justify-center items-center bg-blue-400 hidden md:flex row-span-2">Sidebar</div>
      <div className="flex justify-center items-center bg-blue-400 col-span-5 md:col-span-4">Content1</div>
      <div className="flex justify-center items-center bg-blue-400 col-span-5 md:col-span-2">Content2</div>
      <div className="flex justify-center items-center bg-blue-400 col-span-5 md:col-span-2">Content3</div>
      <div className="flex justify-center items-center bg-blue-400 col-span-5">Footer</div>
    </div>
  );
};

export default page;
