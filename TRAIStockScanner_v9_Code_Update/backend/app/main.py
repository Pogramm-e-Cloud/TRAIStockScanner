from fastapi import FastAPI
from app.routes.market import router as market_router
from app.routes.derivatives import router as derivatives_router

app = FastAPI(
    title="TR AI Stock Scanner",
    version="v9",
    description="KI-Aktienanalyse mit kostenlosen APIs, News, Charttechnik und Derivate-Rechner."
)

app.include_router(market_router)
app.include_router(derivatives_router)

@app.get("/")
def root():
    return {
        "app": "TR AI Stock Scanner",
        "version": "v9",
        "status": "ready",
        "message": "API läuft. Trage deine kostenlosen API-Keys in .env ein."
    }
