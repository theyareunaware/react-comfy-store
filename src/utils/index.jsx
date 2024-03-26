import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = price => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AUD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = number => {
  return Array.from({ length: number }, (_, i) => {
    const amount = i + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};