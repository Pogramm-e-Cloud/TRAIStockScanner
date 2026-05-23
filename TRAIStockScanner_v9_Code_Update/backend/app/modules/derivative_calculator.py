def calculate_derivative_plan(
    stock_price,
    derivative_price,
    direction="LONG",
    leverage=None,
    max_loss_percent=20,
    quantity=100
):
    if stock_price <= 0 or derivative_price <= 0:
        raise ValueError("Aktienkurs und Derivatpreis müssen größer als 0 sein.")

    estimated_leverage = leverage or max(1.0, stock_price / derivative_price)

    if direction == "LONG":
        stock_stop = stock_price * 0.97
        stock_target = stock_price * 1.06
        stock_stop_move = (stock_price - stock_stop) / stock_price
        stock_target_move = (stock_target - stock_price) / stock_price
    else:
        stock_stop = stock_price * 1.03
        stock_target = stock_price * 0.94
        stock_stop_move = (stock_stop - stock_price) / stock_price
        stock_target_move = (stock_price - stock_target) / stock_price

    derivative_stop_move = min(max_loss_percent / 100, stock_stop_move * estimated_leverage)
    derivative_target_move = stock_target_move * estimated_leverage

    derivative_stop = max(0.01, derivative_price * (1 - derivative_stop_move))
    derivative_target = derivative_price * (1 + derivative_target_move)

    risk_per_piece = derivative_price - derivative_stop

    return {
        "stock_price": round(stock_price, 4),
        "derivative_price": round(derivative_price, 4),
        "direction": direction,
        "estimated_leverage": round(estimated_leverage, 2),
        "stock_stop": round(stock_stop, 4),
        "stock_target": round(stock_target, 4),
        "derivative_stop": round(derivative_stop, 4),
        "derivative_target": round(derivative_target, 4),
        "risk_per_piece": round(risk_per_piece, 4),
        "total_risk": round(risk_per_piece * quantity, 2),
        "quantity": quantity,
        "warning": "Hoher Hebel - Risiko klein halten." if estimated_leverage >= 10 else "OK"
    }
