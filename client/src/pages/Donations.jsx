import React, { useState } from 'react';

const Donations = () => {
  // State to store the custom donation amount
  const [customAmount, setCustomAmount] = useState('');

  // Handle change in custom donation input
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  // Handle form submission for custom donation
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom donation amount:', customAmount);
    // Add logic to process the custom donation amount here
  };

  return (
    <div>
      <h1>Support Us</h1>
      <h2>Choose a Donation Amount:</h2>
      <button onClick={() => console.log('$5 donation')}>$5</button>
      <button onClick={() => console.log('$10 donation')}>$10</button>
      <button onClick={() => console.log('$15 donation')}>$15</button>
      <button onClick={() => console.log('$20 donation')}>$20</button>
      
      <form onSubmit={handleSubmit}>
        <label>
          Or Enter Your Own Amount:
          <input
            type="number"
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder="Enter amount"
          />
        </label>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donations;

