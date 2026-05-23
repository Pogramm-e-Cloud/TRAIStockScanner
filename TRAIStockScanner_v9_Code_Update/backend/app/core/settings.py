import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    FINNHUB_API_KEY = os.getenv("FINNHUB_API_KEY", "")
    TWELVEDATA_API_KEY = os.getenv("TWELVEDATA_API_KEY", "")
    NEWSAPI_API_KEY = os.getenv("NEWSAPI_API_KEY", "")
    ALPHAVANTAGE_API_KEY = os.getenv("ALPHAVANTAGE_API_KEY", "")
    APP_USERNAME = os.getenv("APP_USERNAME", "demo")
    APP_PASSWORD = os.getenv("APP_PASSWORD", "demo1234")
    JWT_SECRET = os.getenv("JWT_SECRET", "change-me")

settings = Settings()
