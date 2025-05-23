import time
import subprocess

WATCH_TARGET = "client.py"

def is_running():
    result = subprocess.run(["pgrep", "-f", WATCH_TARGET], capture_output=True, text=True)
    return bool(result.stdout.strip())

def restart():
    subprocess.Popen(["python3", WATCH_TARGET])

if __name__ == "__main__":
    while True:
        if not is_running():
            print("Client not running. Restarting...")
            restart()
        time.sleep(5)
