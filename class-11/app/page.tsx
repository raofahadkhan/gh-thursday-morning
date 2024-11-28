import Button from "@/components/Button";

function Home() {
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
      <Button hamza="Subscribe" />
      <Button text="Follow me" />
      <Button text="My Youtube Channel" />
      <Button />
      {/* youtube.com/hamzaalvi */}
    </div>
  );
}

export default Home;
