import React from 'react';
import data from "../../pages/donation/assets/data/index.json";
import style from "../donation/donation.css"

export default function Donation() {
  return (
    <section className="donation--section" id="mySkills">
      <div className="donation--container">
        <p className="donation--title">Support Us</p>
        <h2 className="donation--section--heading">Your Donations Keep This Site Running!</h2>
      </div>
      <div className="donation--section--container">
        {data?.donation?.map((item, index) => (
          <div key={index} className="donation--section--card">
            <div className="donation--section--card--content">
              <h3 className="donation--section--title">{item.title}</h3>
              <p className="donation--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// export default function DonationAmount() {
//   return (
//     <section className="donation--section" id="DreamDonation">
//       <div className="donation--container--box">
//         <div className="donation--container">
//           <p className="sub--title">Support Us</p>
//           <h2 className="donation--heading">Your Donations Keep This Site Running!</h2>
//         </div>
//         {/* Add your content for donation amounts here */}
//         <div className="donation--amounts">
//           <button className="donate-btn">$10 Donation</button>
//           <button className="donate-btn">$25 Donation</button>
//           <button className="donate-btn">$50 Donation</button>
//           <button className="donate-btn">$100 Donation</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// const Donation = () => {
//   const handleDonate = (amount) => {
  
//     console.log(`Donating ${amount}`);
//   };

//   return (
//     <div className="donation-container">
//       <h2>Support Us</h2>
//       <p>Choose an amount to donate:</p>
//       <div className="donation-buttons">
//         <button className="donate-btn" onClick={() => handleDonate(10)}>
//           $10
//         </button>
//         <button className="donate-btn" onClick={() => handleDonate(25)}>
//           $25
//         </button>
//         <button className="donate-btn" onClick={() => handleDonate(50)}>
//           $50
//         </button>
//         <button className="donate-btn" onClick={() => handleDonate(100)}>
//           $100
//         </button>
//       </div>
//     </div>
//   );
// };


