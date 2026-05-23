POSITIVE_WORDS = ["beat", "growth", "upgrade", "strong", "profit", "record", "bullish", "positive"]
NEGATIVE_WORDS = ["miss", "lawsuit", "downgrade", "weak", "loss", "bearish", "negative", "warning"]

def score_news(news_items):
    if not isinstance(news_items, list):
        return {
            "news_score": 50,
            "sentiment": "neutral",
            "reason": "Keine verwertbaren News."
        }

    score = 50
    headlines = []

    for item in news_items[:10]:
        text = f"{item.get('headline', '')} {item.get('summary', '')}".lower()
        headlines.append(item.get("headline", ""))

        for word in POSITIVE_WORDS:
            if word in text:
                score += 4

        for word in NEGATIVE_WORDS:
            if word in text:
                score -= 4

    score = max(0, min(100, score))

    if score >= 60:
        sentiment = "bullish"
    elif score <= 40:
        sentiment = "bearish"
    else:
        sentiment = "neutral"

    return {
        "news_score": score,
        "sentiment": sentiment,
        "headlines": headlines[:5],
        "reason": "News wurden anhand positiver/negativer Begriffe bewertet."
    }
