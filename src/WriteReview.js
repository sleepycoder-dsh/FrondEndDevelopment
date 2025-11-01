import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './App.css';

function WriteReview() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0); // ⭐ state for rating

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://34.174.231.112:8080/api/reviews", {
        bookTitle,
        author,
        reviewer,
        review,
        rating
      });
      alert("Review submitted successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review. Check console for details.");
    }
  };

  return (
    <div className="write-review">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Title:</label>
        <input
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Enter book title"
        />

        <label>Author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />

        <label>Your Name:</label>
        <input
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Your Review:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
        />

        <label>Rating:</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                color: star <= rating ? "gold" : "gray"
              }}
            >
              ★
            </span>
          ))}
        </div>
        <p>Selected Rating: {rating} / 5</p>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default WriteReview;
