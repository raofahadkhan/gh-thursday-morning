import React from "react";
import Image from "next/image";

function Home() {
  // let array: [string, number, boolean] = ["fahad", 2, true, "fahd"]

  return (
    <div className="main flex h-screen">
      {/* <div className="box" id="box1">Box 1 </div>
    <div className="box" id="box2" >Box 2</div> */}
      <div className=" flex justify-center items-center h-[200px] w-[200px] bg-blue-500 border-2 border-black">
        Box 1{" "}
      </div>
      <div className="flex justify-center items-center h-[200px] w-[200px] bg-blue-500 border-2 border-black">
        Box 2
      </div>
    </div>
  );
}

export default Home;
