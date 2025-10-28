import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle search
  const handleSearch = async () => {
    if (!query) return; // prevent empty search
    try {
      const res = await axios.get(
        `http://localhost:8080/api/reviews/search?title=${query}`
      );
      setSearchResults(res.data);
    } catch (err) {
      console.error("Error searching reviews:", err);
    }
  };

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
          <input
            type="text"
            placeholder="Search for a book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="circle-btn" onClick={handleSearch}>🔍</button>
        </div>

        {/* Write review block */}
        <div className="review-block">
          <p>Bought a book recently? <Link to="/write-review">Write a review →</Link></p>
        </div>

        {/* Search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h2>Search Results</h2>
            {searchResults.map((r, i) => (
              <div key={i} className="review-card">
                <h3>{r.bookTitle} by {r.author}</h3>
                <p><strong>Reviewed by:</strong> {r.reviewer}</p>
                <p>{r.review}</p>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
