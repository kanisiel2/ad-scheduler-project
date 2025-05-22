# 🎯 Ad Scheduler Project

> 실시간 광고 스케줄링 시스템 (Node.js + React + Python 클라이언트)

## 📁 구성

- **backend**: Express + MariaDB 광고 API 서버
- **frontend**: React + Redux 관리자 대시보드
- **python-client**: VLC 기반 광고 클라이언트 + WatchDog

## 🧩 주요 기능

- JWT 로그인/토큰 자동 갱신
- 광고 스케줄 관리 및 배포
- 클라이언트 실시간 상태 모니터링
- 광고 재생 통계 시각화
- Python 클라이언트 VLC 실행 및 WatchDog 자동복구

## 🚀 실행 방법

```bash
# 백엔드
cd backend
npm install
npm run dev

# 프론트엔드
cd frontend
npm install
npm start

# 파이썬 클라이언트
cd python-client
pip install -r requirements.txt
python client.py
