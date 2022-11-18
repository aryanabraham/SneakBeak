import StripeCheckout from "react-stripe-checkout";
import Stripe from "stripe";

const KEY =
  "pk_test_51M5ZaASDJfvzyPiCaR4yahFAtA29NSO15MMwJfeLXWSZPjE5EON8z7AagtmDI9DjlVTOynCss55LrJkwmwaZeBeu003b5Vj2lE";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alighItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="SneakBeak"
        image="https://raw.githubusercontent.com/aryanabraham/E-Commerce-Website/main/public/logo.png"
        billingAddress
        shippingAddress
        description="Your total is $399"
        amount={39900}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};
