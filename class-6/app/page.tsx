import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <h1>tailwind css hello world</h1> */}
      {/* <h2>this is heading 2</h2> */}
      <h3 className="bg-blue-500 font-thin">this is heading 3</h3>
      {/* <p className="bg-red-400	font-black text-2xl py-3 m-36 border-8 border-zinc-500">this is paragraph</p> */}
      <p className="bg-red-400	font-black text-2xl pl-32 border-8 border-zinc-500">this is paragraph</p>
      <span className="block font-medium bg-blue-300">this is span</span>
      <button className="p-2 bg-pink-300 m-1 border-yellow-500 border-4 rounded-md">login</button>
    </div>
  );
}
// Border is consisted of 3 properties
// 1. Thickness.  
// 2. Style eg: solid, lined, dashed.
// 3. Color eg: black, blue, yellow.