# Luv Tankha — Developer Portfolio

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/luvtankha/portfolio)

Interactive Obsidian-inspired portfolio for **Luv Tankha**, a Full-Stack Developer and aspiring AI Engineer.

**Live site:** https://luvtankha-portfolio.onrender.com

## Profile

- B.Tech Data Science, 3rd Year — MUIT
- CGPA: 8.3
- GitHub: https://github.com/luvtankha
- LinkedIn: https://www.linkedin.com/in/luv-tankha-aa9532324
- Email: luvtankha06@gmail.com

## Featured Project

### HELIOS

**Healthcare Enabled Language & Intelligent Observation System**

Smart India Hackathon 2026 project.

- Role: Team Leader & Tech Lead
- Team: 6 members
- Result: Internal Round Qualified
- Repository: https://github.com/luvtankha/HELIOS

HELIOS is a healthcare pre-consultation system designed to turn patient waiting time into structured information for clinicians. It includes guided patient intake, English/Hindi voice interaction, Whisper transcription, deterministic validation, Express APIs, PostgreSQL, Prisma ORM, and an authorized doctor workspace.

HELIOS organizes patient-provided information. It does not diagnose, prescribe medication, recommend treatment, or replace clinicians.

## Portfolio Stack

- Next.js API surface via Vinext
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Nitro production server

## Local Development

Requires Node.js `22.22.0`.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Render Deployment

The repository includes `render.yaml` and is configured for a Render Node Web Service.

Render configuration:

- Branch: `main`
- Build: `npm install --include=dev && npm run build`
- Start: `npm start`
- Health check: `/api/health`
- Nitro preset: `render-com`
- Node: `22.22.0`
- Auto deploy: enabled

Use the **Deploy to Render** button above or create a Blueprint in Render from this repository.
