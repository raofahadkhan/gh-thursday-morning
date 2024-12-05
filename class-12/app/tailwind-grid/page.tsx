import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 md:grid-rows-4 h-screen gap-2 p-2">
      <div className="bg-green-400 col-span-5">Header</div>
      <div className="bg-green-400 hidden row-span-2 md:flex">Sidebar</div>
      <div className="bg-green-400 col-span-5 md:col-span-4">Content 1</div>
      <div className="bg-green-400 col-span-5 md:col-span-2">Content 2</div>
      <div className="bg-green-400 col-span-5 md:col-span-2">Content 3</div>
      <div className="bg-green-400 col-span-5">Footer</div>
    </div>
  );
};

export default page;
