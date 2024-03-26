import React from 'react';
import "./donation.css"
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
      "pk_test_51OycFNP9i2J0iqsYk9dMVf7qzBg20YoC02srNFbkUjj4Bsjh0jeWjnfFUN0XRGQi2Mi2NQ0tJUHgEubc8l4WUFx3003URSRjQW"
    );

    const DonationButton = ({ itemID, ammount }) => {
      const handleClick = async (event) => {
        const stripe = await stripePromise;
        stripe
          .redirectToCheckout({
            lineItems: [{ price: itemID, quantity: 1 }],
            mode: "payment",
            successUrl: window.location.protocol + "//localhost:3000/success",
            cancelUrl: window.location.protocol + "//localhost:3000",
            submitType: "donate",
          })
          .then(function (result) {
            if (result.error) {
              console.log(result);
            }
          });
      };
      return (
        <button
          className="donation--section--card"
          onClick={handleClick}
        >
          Donate ${ammount}
        </button>
      );
    };
    
    export default function Donation() {
      return (
        <section className="donation--section" id="mySkills">
          <div className="donation--section--container">
            <DonationButton
              ammount={"5.00"}
              itemID="price_1Oyd5dP9i2J0iqsYgaSfZvVs"
            ></DonationButton>
            <DonationButton
              ammount={"10.00"}
              itemID="price_1Oyd6xP9i2J0iqsYyhgkL8Ja"
            ></DonationButton>
            <DonationButton
              ammount={"15.00"}
              itemID="price_1Oyd7vP9i2J0iqsYsubdOJbK"
            ></DonationButton>
               <DonationButton
              ammount={"20.00"}
              itemID="price_1OyhkmP9i2J0iqsY3vzHjYpf"
            ></DonationButton>
               <DonationButton
              ammount={"25.00"}
              itemID="price_1OyhlOP9i2J0iqsYQBkGn9Bm"
            ></DonationButton>
               <DonationButton
              ammount={"30.00"}
              itemID="price_1OyhlpP9i2J0iqsYN3gLNigw"
            ></DonationButton>
          </div>
        </section>
      );
    }


