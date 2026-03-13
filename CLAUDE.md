# CLAUDE.md — Third Eye Gallery App

## Project Overview
This is a full-stack React application for a tattoo gallery/artist portfolio website. It uses a monorepo structure with pnpm workspace management.

## Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS, TypeScript
- **Backend:** Express.js API server with TypeScript
- **Database:** SQLite (development) / PostgreSQL (production)
- **ORM:** Drizzle ORM with Drizzle Kit for migrations
- **Package Manager:** pnpm (required - npm will fail)
- **Build Tool:** Vite with HMR support
- **Development:** tsx for TypeScript execution

## Project Structure
```
├── artifacts/
│   ├── api-server/          # Express.js backend API
│   ├── third-eye-gallery/   # React frontend application
│   └── mockup-sandbox/      # Component mockup environment
├── lib/
│   ├── db/                  # Database schema and connection
│   ├── api-client-react/    # React API client library
│   ├── api-spec/            # OpenAPI specifications
│   └── api-zod/             # Zod schemas for API validation
├── scripts/                 # Build and utility scripts
└── package.json             # Root workspace configuration
```

## Environment Setup

### Database Configuration
- **Local Development:** Uses SQLite database (`file:./dev.db`)
- **Production:** Uses PostgreSQL connection string
- Environment variable `DATABASE_URL` determines database type automatically
- If `DATABASE_URL` starts with `file:`, SQLite is used; otherwise PostgreSQL

### Environment Variables (.env)
```
DATABASE_URL=file:./dev.db
```

## Development Commands

### First-time Setup
```bash
# 1. Install dependencies
pnpm install

# 2. Create database tables
pnpm -w --filter "@workspace/db" push

# 3. Start development servers
pnpm dev
```

### Daily Development
```bash
# Start all development servers
pnpm dev

# Start specific services
pnpm -w --filter "@workspace/api-server" dev     # API server only
pnpm -w --filter "@workspace/third-eye-gallery" dev  # Frontend only

# Database operations
pnpm -w --filter "@workspace/db" push            # Push schema changes
pnpm -w --filter "@workspace/db" push-force      # Force push schema

# Build and check
pnpm build                                       # Build all packages
pnpm typecheck                                   # Type check all packages
```

## Development URLs
- **Frontend:** http://localhost:5173 (Vite dev server)
- **API Server:** http://localhost:3000 (Express server)
- **Database:** ./dev.db (SQLite file, auto-created)

## Database Schema
The app includes three main tables:
- `artists` - Artist profiles and information
- `gallery_images` - Gallery image metadata  
- `art_prints` - Available art prints for purchase

## Key Features Implemented
- Artist portfolio display
- Gallery image management
- Responsive design with Tailwind CSS
- Type-safe API client generation
- Database-agnostic ORM setup
- Hot module replacement for development

## Development Notes
- **Package Manager:** Must use pnpm (enforced by preinstall script)
- **Node.js:** Requires v18+ (current: v18.19.1)
- **Database:** Automatically switches between SQLite and PostgreSQL based on connection string
- **Monorepo:** Uses pnpm workspaces for dependency management
- **Type Safety:** Full TypeScript support across frontend, backend, and database layers

## Current Setup Status

### ✅ Completed
- Environment file (.env) created with SQLite database URL
- Database layer updated for SQLite/PostgreSQL auto-detection
- Schema modified to support both database types
- Dependencies added (dotenv, better-sqlite3)
- Development scripts configured

### ⚠️ Known Issues
- **Node.js Version**: Requires Node.js 20+ (current system: 18.19.1)
  - Vite 7.3.1 requires Node.js 20.19+ or 22.12+
  - TailwindCSS native bindings require newer Node.js
- **Native Bindings**: better-sqlite3 requires compilation
  - Needs build-essential, python3, node-gyp
  - Alternative: Use PostgreSQL for development instead

### 🚀 Ready to Run (after Node.js upgrade)
```bash
# After upgrading to Node.js 20+
pnpm install
pnpm -w --filter "@workspace/db" push
pnpm dev
```

## Troubleshooting
- **Node.js Version Error**: Upgrade to Node.js 20+ using nvm or your package manager
- **Native binding errors**: Install build tools: `sudo apt install build-essential python3`
- **Database errors**: Run `pnpm -w --filter "@workspace/db" push` to recreate tables
- **Port conflicts**: Check that ports 3000 (API) and 5173 (frontend) are available
- **Package installation issues**: Ensure you're using pnpm (not npm or yarn)
- **SQLite alternative**: Set `DATABASE_URL` to PostgreSQL connection string to bypass SQLite issues

## CLAUDE Code Integration Notes
- App is configured for local development with SQLite
- Database schema supports both SQLite and PostgreSQL dialects
- Environment variables are loaded automatically via dotenv
- All TypeScript configurations are set up for immediate development
- Hot reloading is enabled for both frontend and backend changes

## File Structure Guidelines
- Frontend components are in `artifacts/third-eye-gallery/src/components/`
- API routes are in `artifacts/api-server/src/routes/`
- Database schema is in `lib/db/src/schema/`
- Shared types and utilities are in the `lib/` packages

## Build and Deploy
```bash
# Build all packages for production
pnpm build

# Type check before deployment
pnpm typecheck
```

For production deployment, set `DATABASE_URL` to a PostgreSQL connection string and the app will automatically use PostgreSQL instead of SQLite.