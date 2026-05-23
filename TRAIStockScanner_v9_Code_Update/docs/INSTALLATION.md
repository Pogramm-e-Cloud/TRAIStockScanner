# Installation

## Backend starten

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload
```

## Finnhub Key eintragen

In `.env`:

```env
FINNHUB_API_KEY=DEIN_ECHTER_KEY
```

## Test-URLs

```text
http://127.0.0.1:8000/market/quote/NVDA
http://127.0.0.1:8000/market/signal/NVDA
```

## Derivate-Rechner

```text
POST http://127.0.0.1:8000/derivatives/calculate
```

Body:

```json
{
  "stock_price": 32,
  "derivative_price": 1.49,
  "direction": "LONG",
  "quantity": 100
}
```
