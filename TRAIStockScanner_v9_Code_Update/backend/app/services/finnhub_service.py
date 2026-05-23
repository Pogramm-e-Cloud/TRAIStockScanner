import requests
from datetime import date, timedelta
from app.core.settings import settings

BASE_URL = "https://finnhub.io/api/v1"

class FinnhubService:
    def __init__(self):
        self.api_key = settings.FINNHUB_API_KEY

    def enabled(self):
        return bool(self.api_key and self.api_key != "DEIN_FINNHUB_KEY")

    def _get(self, path, params):
        if not self.enabled():
            return {"error": "FINNHUB_API_KEY fehlt. Bitte in .env eintragen."}

        params["token"] = self.api_key
        response = requests.get(f"{BASE_URL}{path}", params=params, timeout=15)

        if response.status_code == 429:
            return {"error": "Finnhub Limit erreicht. Fallback nutzen."}

        response.raise_for_status()
        return response.json()

    def quote(self, symbol):
        return self._get("/quote", {"symbol": symbol})

    def company_news(self, symbol, days=7):
        today = date.today()
        start = today - timedelta(days=days)
        return self._get("/company-news", {
            "symbol": symbol,
            "from": str(start),
            "to": str(today)
        })

    def stock_symbols(self, exchange="US"):
        return self._get("/stock/symbol", {"exchange": exchange})

    def company_profile(self, symbol):
        return self._get("/stock/profile2", {"symbol": symbol})

finnhub_service = FinnhubService()
