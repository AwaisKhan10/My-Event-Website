/** Approximate PKR per 1 USD — update periodically or fetch from an API. */
export const PKR_PER_USD = 278.5;

export function usdFromPkr(pkr) {
  if (pkr == null || pkr <= 0) return 0;
  return pkr / PKR_PER_USD;
}

export function formatUsd(amount) {
  if (amount <= 0) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Primary label in USD; optional PKR line for reference */
export function formatPriceFromPkr(pkr) {
  if (pkr == null || pkr <= 0) {
    return { primary: "Free", sub: null };
  }
  const usd = usdFromPkr(pkr);
  return {
    primary: formatUsd(usd),
    sub: `≈ Rs. ${pkr.toLocaleString("en-PK")} PKR`,
  };
}
