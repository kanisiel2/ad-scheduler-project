import requests
import json
import subprocess
import time
import vlc_controller
import threading
import websocket

SERVER_URL = "http://localhost:3000"
SOCKET_URL = "ws://localhost:3000"
CLIENT_ID = "client-001"
CATEGORY = "default"

def fetch_schedule():
    try:
        response = requests.get(f"{SERVER_URL}/api/schedules?clientId={CLIENT_ID}")
        if response.status_code == 200:
            return response.json()
    except Exception as e:
        print("Error fetching schedule:", e)
    return []

def report_status(status):
    try:
        ws.send(json.dumps({
            "event": "status",
            "clientId": CLIENT_ID,
            "status": status
        }))
    except Exception as e:
        print("Error sending status:", e)

def start_vlc(file_path):
    return vlc_controller.play_video(file_path)

def main_loop():
    while True:
        schedules = fetch_schedule()
        now = time.time()

        for ad in schedules:
            start = time.mktime(time.strptime(ad["startTime"], "%Y-%m-%dT%H:%M:%S"))
            end = time.mktime(time.strptime(ad["endTime"], "%Y-%m-%dT%H:%M:%S"))

            if start <= now <= end:
                proc = start_vlc(ad["filePath"])
                report_status("Playing")
                proc.wait()
                report_status("Finished")
        time.sleep(10)

def on_open(ws):
    print("WebSocket connected")
    ws.send(json.dumps({
        "event": "register",
        "clientId": CLIENT_ID,
        "category": CATEGORY
    }))

def on_close(ws):
    print("WebSocket closed")

def on_error(ws, error):
    print("WebSocket error:", error)

ws = websocket.WebSocketApp(
    SOCKET_URL,
    on_open=on_open,
    on_close=on_close,
    on_error=on_error
)

threading.Thread(target=ws.run_forever, daemon=True).start()

if __name__ == "__main__":
    main_loop()
