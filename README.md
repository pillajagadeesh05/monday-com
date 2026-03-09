# FlowBoard (monday.com-style Project Management)

A full-stack white/light-themed project management platform inspired by monday.com.

## Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose

## Features
- Create projects with owner, description, and color accent
- Add tasks per project
- Task columns by status: Backlog, Working on it, Review, Done
- Move tasks between statuses
- Seed scripts for sample data

## Project Structure

- `frontend/` React app
- `backend/` Express API
- `scripts/mongodb-init.js` Mongo shell bootstrap script

## Quick Start

```bash
npm install
cp backend/.env.example backend/.env
npm run dev
```

Frontend runs on `http://localhost:5173` and backend on `http://localhost:5000`.

## Backend Scripts

```bash
npm run dev --workspace backend
npm run start --workspace backend
npm run seed --workspace backend
```

## Frontend Scripts

```bash
npm run dev --workspace frontend
npm run build --workspace frontend
npm run preview --workspace frontend
```

## MongoDB Init Script

```bash
mongosh mongodb://127.0.0.1:27017/monday_clone scripts/mongodb-init.js
```

## API Endpoints

- `GET /api/health`
- `GET /api/projects`
- `POST /api/projects`
- `POST /api/projects/:projectId/tasks`
- `PATCH /api/projects/:projectId/tasks/:taskId`
- `DELETE /api/projects/:projectId/tasks/:taskId`
