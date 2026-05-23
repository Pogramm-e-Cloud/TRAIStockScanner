from fastapi import APIRouter
from pydantic import BaseModel
from app.modules.derivative_calculator import calculate_derivative_plan

router = APIRouter(prefix="/derivatives", tags=["Derivatives"])

class DerivativeRequest(BaseModel):
    stock_price: float
    derivative_price: float
    direction: str = "LONG"
    leverage: float | None = None
    max_loss_percent: float = 20
    quantity: int = 100

@router.post("/calculate")
def calculate(request: DerivativeRequest):
    return calculate_derivative_plan(**request.model_dump())
