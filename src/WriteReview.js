import './App.css';

function WriteReview() {
  return (
    <div className="write-review">
      <h2>Write a Review</h2>
      <form>
        <label>Book Title:</label>
        <input type="text" placeholder="Enter book title" />

        <label>Your Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Rating (1-5):</label>
        <input type="number" min="1" max="5" />

        <label>Your Review:</label>
        <textarea placeholder="Write your review here..."></textarea>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default WriteReview;
