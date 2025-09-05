from datetime import date
from fastapi import Depends, FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from sqlalchemy import func

from . import models
from .database import SessionLocal, engine

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Mount static files if needed
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.on_event("startup")
def startup_event():
    """Seed initial data if database is empty."""
    db = SessionLocal()
    try:
        if db.query(models.Record).count() == 0:
            sample = [
                models.Record(category="A", value=10, date=date(2023, 1, 1)),
                models.Record(category="B", value=15, date=date(2023, 1, 2)),
                models.Record(category="A", value=7, date=date(2023, 1, 3)),
                models.Record(category="C", value=20, date=date(2023, 1, 4)),
            ]
            db.add_all(sample)
            db.commit()
    finally:
        db.close()


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/records")
async def read_records(category: str | None = None, db: Session = Depends(get_db)):
    query = db.query(models.Record)
    if category:
        query = query.filter(models.Record.category == category)
    return [
        {
            "id": r.id,
            "category": r.category,
            "value": r.value,
            "date": r.date.isoformat(),
        }
        for r in query.all()
    ]


@app.get("/chart-data")
async def chart_data(db: Session = Depends(get_db)):
    results = (
        db.query(models.Record.category, func.sum(models.Record.value))
        .group_by(models.Record.category)
        .all()
    )
    labels = [r[0] for r in results]
    values = [r[1] for r in results]
    return {"labels": labels, "values": values}
