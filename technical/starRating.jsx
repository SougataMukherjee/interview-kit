import * as React from 'react';
import './style.css';

export default function App() {
  const [rating, setRating] = React.useState(0);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: '30px',
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
          }}
        >
          ★
        </span>
      ))}
      <div>Current rating : {rating}</div>
    </div>
  );
}