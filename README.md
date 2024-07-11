# Node ToDo API

This is a RESTful API for managing ToDo items, built with **Node.js, Express, Sequelize, and PostgreSQL**.
<p align="center">
    <img src="https://skillicons.dev/icons?i=nodejs,express,sequelize,postgres&theme=dark" />
</p>

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Features

- Create, read, update, and delete ToDo items
- Filter ToDos by user ID and completion status
- Bulk update and delete operations
- MVC architecture with a service layer
- PostgreSQL database with Sequelize ORM

## Prerequisites

- Node.js (v20 or later)
- npm (v10 or later)
- PostgreSQL (v16 or later)

## Installation

### 1. Clone the repository:
```
git clone https://github.com/eduvinagre/node_todo-api.git
```
```
cd node_todo-api
```
### 2. Install dependencies:
```
npm install
```
## Configuration

1. Create a `.env` file in the root directory with the following content:
```
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_USER=your_database_user
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

2. Replace the placeholder values with your actual PostgreSQL database credentials.

## Running the Application

1. For development:
```
npm run dev
```
2. For production:
```
npm start
```
The server will start running on `http://localhost:3000` (or the port specified in your .env file).

## API Endpoints

- `GET /todos`: Get all todos
- `GET /todos?userId=<userId>&completed=<true|false>`: Get filtered todos
- `GET /todos/:id`: Get a specific todo
- `POST /todos`: Create a new todo
- `PATCH /todos/:id`: Update a specific todo
- `DELETE /todos/:id`: Delete a specific todo
- `PATCH /todos/update-many`: Update multiple todos
- `DELETE /todos/delete-many`: Delete multiple todos

For detailed request/response formats, please refer to the API documentation.

## Project Structure

```
node_todo-api
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── services/
│   │   └── todoService.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

- `config/`: Contains database configuration
- `controllers/`: Handles the request/response logic
- `models/`: Defines the database models
- `routes/`: Defines the API routes
- `services/`: Contains the business logic
- `server.js`: The main application file

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.