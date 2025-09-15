# Micro Frontend Demo

A comprehensive micro frontend architecture demonstration using React, TypeScript, and Vite with Module Federation.

## 🏗️ Architecture

This project demonstrates a micro frontend architecture with the following applications:

- **Shell Application** (Port 3000) - Main container that orchestrates all micro frontends
- **Product Management** (Port 3001) - Handles product catalog and management
- **User Management** (Port 3002) - Manages user accounts and profiles
- **Shared Components** - Common UI components and utilities

## 📁 Project Structure

```
micro-front-end/
├── apps/
│   ├── shell/                 # Main container application
│   ├── product-management/    # Product management micro frontend
│   └── user-management/       # User management micro frontend
├── packages/
│   └── shared/               # Shared components and utilities
└── package.json              # Root package with workspace configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Clone the repository
2. Install dependencies for all applications:

```bash
npm run install:all
```

### Development

Start all applications in development mode:

```bash
npm run dev
```

This will start:
- Shell application at http://localhost:3000
- Product management at http://localhost:3001
- User management at http://localhost:3002
- Shared components library

### Individual Development

You can also start applications individually:

```bash
# Start only the shell application
npm run dev:shell

# Start only the product management app
npm run dev:products

# Start only the user management app
npm run dev:users

# Start only the shared components
npm run dev:shared
```

## 🔧 Build

Build all applications for production:

```bash
npm run build
```

Or build individually:

```bash
npm run build:shell
npm run build:products
npm run build:users
npm run build:shared
```

## 🎯 Features

### Shell Application
- Main navigation and layout
- Error boundaries for micro frontend loading
- Dashboard with statistics and quick actions
- Routing to micro frontends

### Product Management
- Product listing with search and filters
- Add/Edit product forms
- Product detail views
- Mock data integration

### User Management
- User listing with role-based badges
- User creation and editing forms
- User profile details
- Role management (Admin, Manager, User)

### Shared Components
- Reusable UI components (Button, Card, etc.)
- Common TypeScript types
- Consistent styling with Tailwind CSS

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Module Federation**: @originjs/vite-plugin-federation
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Package Management**: npm workspaces

## 📦 Module Federation

The project uses Vite's Module Federation plugin to enable micro frontend architecture:

- **Shell** consumes micro frontends from Product and User apps
- **Product Management** exposes ProductApp, ProductList, ProductForm components
- **User Management** exposes UserApp, UserList, UserForm components
- **Shared dependencies** (React, React DOM) are shared across all applications

## 🔍 Development Notes

- Each micro frontend runs on a different port
- Hot module replacement works independently for each application
- Shared components are automatically linked via npm workspaces
- TypeScript configuration supports path mapping for shared components

## 🚦 Ports

- Shell: http://localhost:3000
- Product Management: http://localhost:3001
- User Management: http://localhost:3002

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start all applications in development mode |
| `npm run build` | Build all applications for production |
| `npm run install:all` | Install dependencies for all applications |
| `npm run dev:shell` | Start only the shell application |
| `npm run dev:products` | Start only the product management app |
| `npm run dev:users` | Start only the user management app |
| `npm run dev:shared` | Start only the shared components |