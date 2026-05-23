import yfinance as yf
import pandas as pd

def rsi(series, period=14):
    delta = series.diff()
    gain = delta.clip(lower=0).rolling(period).mean()
    loss = -delta.clip(upper=0).rolling(period).mean()
    rs = gain / loss
    return 100 - (100 / (1 + rs))

def calculate_chart_signal(symbol):
    data = yf.download(symbol, period="6mo", interval="1d", progress=False)

    if data.empty:
        return {"symbol": symbol, "error": "Keine Chartdaten gefunden."}

    close = data["Close"]
    data["EMA20"] = close.ewm(span=20).mean()
    data["EMA50"] = close.ewm(span=50).mean()
    data["RSI"] = rsi(close)

    latest = data.iloc[-1]

    trend_score = 60 if latest["EMA20"] > latest["EMA50"] else 40
    rsi_value = float(latest["RSI"]) if not pd.isna(latest["RSI"]) else 50

    if rsi_value < 30:
        rsi_score = 70
    elif rsi_value > 70:
        rsi_score = 35
    else:
        rsi_score = 55

    final_score = round((trend_score * 0.6) + (rsi_score * 0.4), 2)
    direction = "LONG" if final_score >= 55 else "SHORT"

    return {
        "symbol": symbol,
        "direction": direction,
        "chart_score": final_score,
        "rsi": round(rsi_value, 2),
        "ema20": round(float(latest["EMA20"]), 4),
        "ema50": round(float(latest["EMA50"]), 4),
        "reason": "EMA20 über EMA50 + RSI Bewertung" if direction == "LONG" else "EMA20 unter EMA50 oder RSI schwach"
    }
