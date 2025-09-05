# Report System with FastAPI

This project provides a simple report system built with **FastAPI** and an HTML frontend. It displays data in a spreadsheet-like table and renders charts directly in the browser.

## Features
- Interactive table powered by [DataTables](https://datatables.net/) with sorting and filtering
- Bar chart built with [Chart.js](https://www.chartjs.org/)
- SQLite database managed via SQLAlchemy
- Sample data seeded on startup

## Running the App
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Start the server:
   ```bash
   uvicorn app.main:app --reload
   ```
3. Open a browser and navigate to `http://localhost:8000` to view the report.

## Tests
Run the unit tests with:
```bash
pytest
```
