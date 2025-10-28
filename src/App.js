import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Love Book</div>

        {/* Menu dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Menu ▾</button>
          <div className="dropdown-content">
            <Link to="/write-review">Write a Review</Link>
            <a href="#">Get a Review</a>
          </div>
        </div>
      </nav>

      {/* Page header */}
      <header className="header">
        <h1>Find a Book You Love</h1>
        <p>Discover, read, and write reviews</p>

        {/* Search bar */}
        <div className="main-search">
          <input type="text" placeholder="Search for a book..." />
          <button className="circle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M21.53 20.47l-4.78-4.78A7.92 7.92 0 0016 9a8 8 0 10-8 8 7.92 7.92 0 006.69-3.25l4.78 4.78a.75.75 0 101.06-1.06zM4 9a5 5 0 1110 0A5 5 0 014 9z"/>
            </svg>
          </button>
        </div>

        {/* Write review block */}
        <div className="review-block">
          <p>Bought a book recently? <Link to="/write-review">Write a review →</Link></p>
        </div>
      </header>
    </div>
  );
}

export default App;
