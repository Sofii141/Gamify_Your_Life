# ♠️ Gamify Your Life

> Transform your daily tasks into an epic adventure with a cute pixel art companion!

[![Live Demo](https://img.shields.io/badge/🎮%20Live%20Demo-https%3A%2F%2Fgamify--your--life.onrender.com-pink?style=for-the-badge)](https://gamify-your-life.onrender.com/)

## ✨ Overview

**Gamify Your Life** is a full-stack web application that gamifies your daily tasks and habits. Level up your character, complete quests, master skills, and keep track of your progress with an adorable pixel art avatar. Built with Angular, FastAPI, and PostgreSQL.

Your tasks become quests. Your consistency becomes strength. Your character becomes who you want to be.

---

## 🎯 Features

✅ **Character Customization**
- Create and design your unique pixel art avatar
- Choose from multiple hairstyles, colors, and accessories
- 9 beautiful theme options (Coquette, Sage, Dreamy, Sunset, Misty, Coral, Terra, Blush, Midnight)

✅ **Quest System**
- Daily, weekly, and custom quests
- XP rewards and coin drops for completing tasks
- Track your daily streak and consistency
- Auto-reset for daily quests

✅ **Skills & Progression**
- 20+ skills to master (Programming, Creative, Life categories)
- Gain XP through practice and tasks
- Level up and watch your character grow
- Skill categories: Programming, Creative, Life

✅ **Health & Resources**
- HP (Health Points) - keep yourself healthy
- Mana - your magical energy for spells/tasks
- Coins - earn them by completing quests
- Smart check-in system with daily rewards

✅ **Calendar & Diary**
- Journal your daily thoughts and progress
- Decorate days with cute stickers
- Color-coded notes system
- Track decorated days and written notes

✅ **Responsive Design**
- Mobile-friendly with hamburger navigation
- Fully responsive layouts
- Touch-friendly interface
- Smooth animations and transitions

---

## 🛠️ Tech Stack

### Frontend
- **Angular 17** - Modern web framework
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables & animations
- **Standalone Components** - Latest Angular patterns

### Backend
- **FastAPI** - High-performance Python API
- **SQLAlchemy 2.0** - ORM for database operations
- **PostgreSQL** - Reliable relational database
- **Python 3.11** - Type hints & modern Python

### Deployment
- **Render** - Cloud hosting for frontend & backend
- **PostgreSQL on Render** - Managed database

---

## 🎨 Design System

The app features:
- **Press Start 2P** - Pixel art font for headers
- **Nunito** - Comfortable sans-serif for body text
- **9 Curated Color Palettes** - Each with primary, secondary, accent, and thematic colors
- **Smooth Animations** - Sparkles, floats, level-ups, and more
- **Cute Aesthetics** - Kawaii-inspired UI with emoji & pixel art

---

## 📱 Screenshots

### Dashboard
The main hub showing your character, daily stats, and quests at a glance.

### Quests Page
Organize tasks into Daily, Weekly, and Custom categories with beautiful progress tracking.

### Skills Grid
Master 20+ skills with XP progress bars, categories, and visual feedback.

### Character Studio
Fully customize your avatar with skins, hair, accessories, and 9+ themes.

### Calendar & Diary
Keep a beautiful journal with stickers, notes, and daily decorations.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.11+ (for backend)
- PostgreSQL database

### Installation

#### Frontend Setup
```bash
cd Frontend
npm install
ng serve
# Navigate to http://localhost:4200/
```

#### Backend Setup
```bash
cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
# API runs at http://localhost:8000/
```

#### Database
```bash
# Create PostgreSQL database named 'gamify_life'
# Update DATABASE_URL in Backend/.env
python seed.py  # Optional: seed with sample data
```

---

## 📖 API Endpoints

### Character
- `GET /api/game` - Get full game state (character, quests, skills)
- `PUT /api/character` - Update character details
- `POST /api/character/check-in` - Daily check-in

### Quests
- `GET /api/quests` - List all quests
- `POST /api/quests` - Create new quest
- `PUT /api/quests/{id}/toggle` - Complete/uncomplete quest
- `DELETE /api/quests/{id}` - Delete quest
- `POST /api/quests/reset-daily` - Reset daily quests

### Skills
- `GET /api/skills` - List all skills
- `PUT /api/skills/{id}/xp` - Gain skill XP

---

## 🎮 How to Play

1. **Create Your Character** - Visit the character studio and design your avatar
2. **Set Your Goals** - Create quests in Daily, Weekly, or Custom categories
3. **Gain XP** - Complete quests to earn experience points
4. **Level Up** - Watch your character grow as you gain XP
5. **Master Skills** - Practice specific skills to increase their mastery
6. **Keep Your Streak** - Daily check-ins maintain your consistency streak
7. **Decorate Your Calendar** - Add stickers and journal notes to track progress
8. **Customize Everything** - Switch themes, change your avatar, organize your life

---

## 📁 Project Structure

```
Gamify/
├── Frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Sidebar, Stats, Character, etc.
│   │   │   ├── pages/        # Dashboard, Quests, Skills, Calendar, etc.
│   │   │   ├── services/     # API service, Game logic
│   │   │   ├── models/       # TypeScript interfaces
│   │   │   └── app.routes.ts # Routing configuration
│   │   ├── styles.scss       # Global styles & themes
│   │   └── main.ts
│   ├── package.json
│   └── angular.json
│
├── Backend/                  # FastAPI application
│   ├── main.py              # API routes & app setup
│   ├── models.py            # SQLAlchemy ORM models
│   ├── schemas.py           # Pydantic data validation
│   ├── database.py          # Database configuration
│   ├── seed.py              # Sample data
│   ├── requirements.txt
│   └── .env                 # Environment variables
│
└── README.md
```

---

## 🎨 Customization

### Change Theme
Visit Settings and select from 9 beautiful themes:
- 🌸 Coquette (pink)
- 🌿 Sage (green)
- 💜 Dreamy (purple)
- 🌅 Sunset (orange)
- 💙 Misty (blue-grey)
- 🪸 Coral (coral pink)
- 🏜️ Terra (brown)
- 💗 Blush (mauve)
- 🌙 Midnight (navy)

### Customize Character
- 6 hair styles (long, short, twintails, ponytail, spiky, and more)
- Unlimited color combinations
- 9+ accessories (headphones, bow, glasses, cat ears, etc.)
- 3 expressions (happy, excited, tired)

---

## 📊 Progress Tracking

- **Streak Counter** - Track consecutive days of check-ins
- **Level System** - Gain XP and level up your character
- **Skill Mastery** - Watch your skills grow with practice
- **Health & Mana** - Manage your resources
- **Coins** - Earn rewards for completing tasks
- **Calendar Analytics** - See decorated days and notes written

---

## 🔧 Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost/gamify_life
```

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api'
};
```

---

## 🚀 Deployment

This project is deployed on **Render**:

- **Frontend**: Static Site hosted at https://gamify-your-life.onrender.com/
- **Backend**: Web Service with Python 3.11
- **Database**: PostgreSQL on Render

### Deploy Your Own
1. Push code to GitHub
2. Create frontend Static Site on Render (root: `Frontend`, build: `npm install && npm run build`, publish: `dist/mi-pagina/browser`)
3. Create backend Web Service on Render (root: `Backend`, build: `pip install -r requirements.txt`, start: `cd Backend && uvicorn main:app --bind 0.0.0.0:$PORT`)
4. Add PostgreSQL and connect with `DATABASE_URL`

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the GitHub repository.

---

## 💖 Credits

Created with ♥️ by Sofii141

### Inspiration
- **Habitica** - Habit tracking & RPG mechanics
- **Cozy Aesthetic** - Cute, calming design philosophy
- **Pixel Art** - Retro gaming nostalgia

---

## 🎯 Future Features

- [ ] Achievements & Badges
- [ ] Leaderboards
- [ ] Multiplayer quests with friends
- [ ] Mobile app (React Native)
- [ ] Dark mode enhancements
- [ ] Sound effects & background music
- [ ] More character customization options
- [ ] Habit streak challenges
- [ ] Seasonal events & special quests

---

<div align="center">

**[🎮 Play Now](https://gamify-your-life.onrender.com/)** • **[📧 Contact](mailto:sofiaarango141@gmail.com)** • **[⭐ Star on GitHub](https://github.com/Sofii141/Gamify_Your_Life)**

Made with 💜 and lots of ✨ sparkles

</div>
