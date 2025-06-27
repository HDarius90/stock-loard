# 📈 Stock Loard

**Stock Loard** is a turn-based stock trading simulation game built with **Angular**. The player travels between cities, buying and selling fluctuating stocks to maximize profits before the in-game days run out.

---

## 🎮 Gameplay Overview

You start with a fixed amount of cash and a limited number of days. Each day, you can:
- 📉 Buy and sell stocks with prices that change over time
- ✈️ Travel to different cities to access new markets
- 🎲 Encounter random events that influence stock values
- 🏆 Try to end with as much money as possible before time runs out

The game encourages strategic risk-taking and timing your trades for maximum gain.

---

## 🛠️ Tech Stack

- **Framework**: Angular 20+
- **Language**: TypeScript
- **Styles**: SCSS (Sass)
- **Routing**: Angular Router
- **State Management**: RxJS + Angular Services
- **UI Components**: *(Optional)* Tailwind CSS / Angular Material
- **Build Tooling**: Angular CLI
- **Version Control**: Git

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/stock-loard.git
cd stock-loard
```

2. Install Dependenciesbash
```
npm install
```
3. Run the Development Serverbash
```
ng serve
```

Open http://localhost:4200 in your browser to play.


🧱 Folder Structure
```
src/
├── app/
│   ├── components/     # UI components like stock-table, day-counter
│   ├── pages/          # Screens like Home, Game, Results
│   ├── services/       # Game logic, data state, events
│   ├── models/         # Interfaces and enums for stocks, cities, etc.
│   └── app.module.ts   # Root Angular module
├── assets/             # Images, icons, data files
└── styles/             # Global SCSS styles
```
🔮 Planned Features
🧑‍🤝‍🧑 Multiplayer leaderboard or score comparison

💬 Market news system that affects stock prices

💾 LocalStorage save/load system

📱 PWA support for mobile devices

📊 Detailed end-of-game stats

📸 Screenshots
(Add screenshots or GIFs of gameplay once your UI is ready.)

📚 Learning Objectives
This project was created to:

Practice and apply Angular fundamentals

Use RxJS for reactive data flows

Manage modular components and services

Build a real-world SPA with routing and state
