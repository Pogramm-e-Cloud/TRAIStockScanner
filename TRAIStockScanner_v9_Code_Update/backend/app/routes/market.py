from fastapi import APIRouter
from app.services.finnhub_service import finnhub_service
from app.services.yfinance_fallback import yfinance_fallback
from app.modules.chart_signals import calculate_chart_signal
from app.modules.news_score import score_news
from app.modules.final_ai_score import combine_scores

router = APIRouter(prefix="/market", tags=["Market"])

@router.get("/quote/{symbol}")
def quote(symbol: str):
    data = finnhub_service.quote(symbol)

    if isinstance(data, dict) and data.get("error"):
        return yfinance_fallback.quote(symbol)

    data["source"] = "finnhub"
    return data

@router.get("/signal/{symbol}")
def signal(symbol: str):
    chart = calculate_chart_signal(symbol)
    news_raw = finnhub_service.company_news(symbol)
    news = score_news(news_raw)
    smart_money_score = 50

    final = combine_scores(
        chart_score=chart.get("chart_score", 50),
        news_score=news.get("news_score", 50),
        smart_money_score=smart_money_score
    )

    return {
        "symbol": symbol.upper(),
        "chart": chart,
        "news": news,
        "smart_money_score": smart_money_score,
        "final": final
    }
