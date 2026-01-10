import os
import deepl
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://127.0.0.1"],
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)

class Req(BaseModel):
    targetLang: str
    texts: List[str]

@app.post("/translate")
def translate(req: Req):
    load_dotenv()

    key = os.getenv("DEEPL_API_KEY")
    if not key:
        raise HTTPException(500, "Missing DEEPL_API_KEY")

    translator = deepl.Translator(key)

    result = translator.translate_text(
        req.texts,
        target_lang=req.targetLang.upper()
    )

    if isinstance(result, list):
        return {"translations": [r.text for r in result]}
    return {"translations": [result.text]}