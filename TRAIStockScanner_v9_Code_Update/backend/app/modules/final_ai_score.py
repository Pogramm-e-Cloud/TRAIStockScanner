def combine_scores(chart_score, news_score, smart_money_score=50):
    final = (
        chart_score * 0.45 +
        news_score * 0.30 +
        smart_money_score * 0.25
    )

    final = round(final, 2)

    if final >= 70:
        strength = "stark"
    elif final >= 55:
        strength = "mittel"
    else:
        strength = "schwach"

    direction = "LONG" if final >= 55 else "SHORT"

    return {
        "final_ai_score": final,
        "direction": direction,
        "strength": strength,
        "weights": {
            "charttechnik": "45%",
            "news": "30%",
            "smart_money": "25%"
        }
    }
