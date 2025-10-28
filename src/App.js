import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews on load
  useEffect(() => {
    axios.get("http://localhost:8080/api/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Book Hive📚</div>
        <div className="dropdown">
          <button className="dropbtn">Menu ▾</button>
          <div className="dropdown-content">
            <Link to="/write-review">Write a Review</Link>
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
          <button className="circle-btn">🔍</button>
        </div>

        {/* Write review block */}
        <div className="review-block">
          <p>Bought a book recently? <Link to="/write-review">Write a review →</Link></p>
        </div>

        {/* Reviews from backend */}
        <div className="reviews-list">
          <h2>Latest Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map((r, i) => (
              <div key={i} className="review-card">
                <h3>{r.title}</h3>
                <p><strong>{r.name}</strong> — ⭐ {r.rating}</p>
                <p>{r.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
