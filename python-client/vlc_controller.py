import subprocess
import os

VLC_PATH = "vlc"  # 또는 Windows는 "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe"

def play_video(file_path):
    print(f"Playing {file_path}")
    return subprocess.Popen([VLC_PATH, "--play-and-exit", file_path], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
