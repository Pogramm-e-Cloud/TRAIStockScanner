const fallbackRates = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85,
  CHF: 0.96
};

function convertCurrency({ amount, from = "USD", to = "EUR", rates = fallbackRates }) {
  if (!rates[from] || !rates[to]) {
    return {
      amount,
      from,
      to,
      converted: amount,
      warning: "Währung nicht gefunden, Originalbetrag zurückgegeben."
    };
  }

  const amountInEur = amount / rates[from];
  const converted = amountInEur * rates[to];

  return {
    amount,
    from,
    to,
    converted: Number(converted.toFixed(2))
  };
}

module.exports = {
  convertCurrency,
  fallbackRates
};
