import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero">
        <p className="h1">Organize your work and life, finally.</p>
        <p className="h2">
          Simplify life for both you and your team. The world’s #1 task manager
          and to-do list app.
        </p>
        <div className="btn-container">
          <Link to="/main">
            <button className="btn btn-hero">Start for free</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
