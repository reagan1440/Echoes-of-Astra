import Donations from "./DonationIndex.jsx"
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
              successUrl: window.location.protocol + "//localpdf.tech/merge",
              cancelUrl: window.location.protocol + "//localpdf.tech/merge",
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleClick}
          >
            Donate {ammount}$
          </button>
        );
      };
      
      export default function Donation() {
        return (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <DonationButton
                ammount={"5.00"}
                itemID="price_1IUx1FJ2iOysJZvP1LD3EzTR"
              ></DonationButton>
            </div>
          </>
        );
      }
// export default function Donation () {
//     return (
//         <>
//         {/* <Donations /> */}
        
//         </>
//     );
// }