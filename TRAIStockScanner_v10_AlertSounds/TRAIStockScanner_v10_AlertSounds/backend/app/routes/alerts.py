from fastapi import APIRouter
from pydantic import BaseModel
from app.modules.alert_sound_rules import AlertType, build_alert_payload

router = APIRouter(prefix="/alerts", tags=["Alerts"])

class AlertPreviewRequest(BaseModel):
    alert_type: AlertType
    symbol: str = "AMZN"
    message: str = "Amazon nähert sich dem Widerstand."
    score: float | None = 72.0

@router.post("/preview")
def preview_alert(request: AlertPreviewRequest):
    return build_alert_payload(
        alert_type=request.alert_type,
        symbol=request.symbol,
        message=request.message,
        score=request.score
    )

@router.get("/types")
def alert_types():
    return [item.value for item in AlertType]
