import { Link } from "react-router-dom";
function Home() {
    return (
      <>
        <div className="App">
        <div className="App-header">
          <h1>Home</h1>
          <Link to="/game">game</Link>
        </div>
      </div>
      </>
    );
  }

export default Home;