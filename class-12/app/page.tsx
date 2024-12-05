"use client";
import Button from "@/components/Button";

function Home() {
  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="main">
      {/* <div className="header grid-item">
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div className="sidebar grid-item">Sidebar</div>
      <div className="content1 grid-item">Content 1</div>
      <div className="content2 grid-item">Content 2</div>
      <div className="content3 grid-item">Content 3</div>
      <div className="footer grid-item">Footer</div> */}
      {/* <Button
        hamza="Subscribe"
        greetings={true}
        bio={{ id: "abc-123", address: "karachi", phoneNumber: 10000000 }}
      /> */}
      {/* <Button text="Follow me" />
      <Button text="My Youtube Channel" /> */}
      {/* <Button /> */}
      {/* youtube.com/hamzaalvi */}

      <button
        // onClick={() => {
        //   console.log("You are signed up!");
        // }}
        className="p-6 bg-slate-400 m-7"
        onMouseEnter={() => console.log("mouse entered")}
        onMouseLeave={() => console.log("Mouse left")}
      >
        sign up
      </button>

      <input
        type="text"
        placeholder="enter some text"
        // onChange={(e) => handleInputChange(e)} 
      />
    </div>
  );
}

export default Home;
