from fastapi.testclient import TestClient
from app.main import app


def test_read_records():
    client = TestClient(app)
    response = client.get('/records')
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 1
    assert {'id', 'category', 'value', 'date'} <= data[0].keys()


def test_chart_data():
    client = TestClient(app)
    response = client.get('/chart-data')
    assert response.status_code == 200
    data = response.json()
    assert 'labels' in data and 'values' in data
    assert len(data['labels']) == len(data['values'])
