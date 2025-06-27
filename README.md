# 📈 Stock Loard

A turn-based stock trading simulation game built with **Angular**. Inspired by the classic Dope Wars game, players must travel between cities, buy low, sell high, and maximize profits within a limited number of in-game days.

---

## 🎮 Gameplay Overview

You start with a fixed amount of cash and a limited number of days. Each day, you can:
- Buy and sell virtual stocks with fluctuating prices
- Travel to different cities with new markets
- Encounter random events that affect the market
- Try to end the game with as much money as possible!

---

## ✨ Features

- 🌐 **Single Page Application** with Angular
- 📊 Dynamic stock price generation and fluctuation
- 🌍 City-based trading locations
- ⏳ Countdown of days with endgame results
- 🧠 Random events for strategy and surprise
- 🎨 Responsive UI designed with Angular Material / Tailwind / Bootstrap *(choose your UI library)*
- 💾 LocalStorage save system *(optional)*

---

## 🚀 Live Demo

🔗 [Play Stock Loard Online](#) *(host on GitHub Pages, Netlify, or Vercel when ready)*

---

## 🛠️ Tech Stack

- **Framework**: Angular 20+
- **Language**: TypeScript
- **Routing**: Angular Router
- **State**: RxJS / Angular Services
- **Styling**: Tailwind CSS / Angular Material / SCSS *(choose one)*
- **Icons/Assets**: Heroicons / Custom SVGs

---

## 🧱 Folder Structure

src/
│
├── app/
│ ├── components/ # Reusable components
│ ├── pages/ # Game screens (home, game, results)
│ ├── services/ # Game logic, state, storage
│ ├── models/ # Interfaces for game data
│ └── app.module.ts
│
├── assets/
└── styles/

---

## 🧪 To Run Locally

```bash
git clone https://github.com/your-username/stock-loard.git
cd stock-loard
npm install
ng serve
