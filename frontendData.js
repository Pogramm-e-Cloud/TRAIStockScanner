async function loadCryptoPrices() {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,binancecoin&vs_currencies=usd&include_24hr_change=true";

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("TRAI Crypto Live Daten:", data);

    return data;
  } catch (error) {
    console.error("Fehler beim Laden der Crypto Daten:", error);
    return null;
  }
}

loadCryptoPrices();
