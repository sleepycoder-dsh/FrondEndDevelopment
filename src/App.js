import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="logo">Book it Read it</div>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <button className="dropbtn">Menu ▾</button>
          <div className="dropdown-content">
            <a href="#">Write a Review</a>
            <a href="#">Get a Review</a>
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <header className="header">
        <h1>Find a Book You Love</h1>
        <p>Discover, read, and write reviews</p>

        {/* Centered Search Bar */}
        <div className="main-search">
          <input type="text" placeholder="Search for a book..." />
          <button>🔍</button>
        </div>
      </header>
    </div>
  );
}

export default App;
