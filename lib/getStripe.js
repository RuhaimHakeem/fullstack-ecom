import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LJ9nQB3aRAgWEHPa3Ob1wcIh1iuVwRfxWOvCd5gAam8lGYBazjJYBQTDwsdb6QSj0lA23t8LXzYK7j9L9yRWf3K00adKQdOs9"
    );
  }

  return stripePromise;
};

export default getStripe;
