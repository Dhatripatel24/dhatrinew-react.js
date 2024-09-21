import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link">LOGIN PAGE</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">HOME</h3>
      </Link>
    </div>
  );
}
export default Home;
