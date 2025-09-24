# RadAssistAI

A fast React 19 + TypeScript + Vite + TailwindCSS single‑page application deployed on **Azure Static Web Apps (Free plan)**.

**Live URL:** [https://zealous-beach-06af10803.2.azurestaticapps.net](https://zealous-beach-06af10803.2.azurestaticapps.net)

---

## ✨ Tech Stack

* **React 19** + **TypeScript**
* **Vite** (build tool)
* **TailwindCSS** (styling)
* **Azure Static Web Apps** (hosting + CI/CD)

---

## 🚀 Quick Start (Local)

```bash
# 1) Install dependencies
npm ci

# 2) Start dev server
npm run dev

# 3) Build for production (outputs to ./out)
npm run build

# 4) Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) for dev or the preview URL shown in the terminal.

---

## 📁 Project Structure (high‑level)

```
root/
├─ src/                 # application code (components, pages, hooks, etc.)
├─ public/              # static assets copied as‑is
│  └─ staticwebapp.config.json  # SPA routing for Azure
├─ index.html           # app entry
├─ vite.config.ts       # Vite config (build.outDir = "out")
├─ tailwind.config.ts   # Tailwind config
├─ postcss.config.cjs   # PostCSS + Autoprefixer
├─ package.json
└─ out/                 # production build (generated)
```

---

## 🏗️ Build & Output

* Build command: `npm ci && npm run build`
* **Output directory:** `out/` (configured in `vite.config.ts`)

> Azure SWA must use **Output location = `out`**.

---

## ☁️ Deployment (Azure Static Web Apps)

**Flow:** Every push to `main` triggers GitHub Actions to build with Vite and deploy `out/` to Azure.

### Create/Connect (one‑time)

1. In Azure Portal → **Static Web Apps** → **Create** → connect GitHub repo/branch.
2. **Build details:** App location `/`, Output location **`out`**.
3. Azure auto‑adds a workflow at `.github/workflows/azure-static-web-apps-*.yml`.

### Manual Deploy Trigger

* Push a commit to `main`:

  ```bash
  git add . && git commit -m "deploy: update" && git push
  ```
* Watch **GitHub → Actions** for the job to turn green.

---

## 🔀 SPA Routing (React Router)

For client‑side routes to work on hard refresh, `public/staticwebapp.config.json` contains a rewrite to `index.html`:

```json
{ "routes": [ { "route": "/*", "serve": "/index.html", "statusCode": 200 } ] }
```

---

## 🔧 Environment Variables

If you need build‑time env vars, prefix with `VITE_` and access via `import.meta.env`.

* Local: create `.env` (not committed)

  ```env
  VITE_API_URL=https://example.com
  ```
* Azure SWA: Portal → **Configuration → Application settings** → add the same keys.

Re‑deploy to apply changes.

---

## ✅ Checks Before Submitting

* [ ] `npm run build` creates `out/` with `index.html` and assets
* [ ] Azure workflow uses `output_location: out`
* [ ] Routes work on refresh (no 404s)
* [ ] Page `<title>` and meta description set in `index.html`
* [ ] Favicon present

---

## 🧩 Common Issues & Fixes

* **Action error: “No files found to deploy.”**

  * Ensure `npm run build` creates `out/`. Fix Vite config if needed.
* **Client routes 404 on refresh.**

  * Confirm `public/staticwebapp.config.json` rewrite.
* **Cannot push workflow file to GitHub.**

  * Your token needs `workflow` scope, or use GitHub CLI (`gh auth login`).
* **Caching not updating assets.**

  * Hard refresh; consider versioned assets or cache headers via SWA config.

---

## 🧪 Scripts

* `npm run dev` – Start dev server
* `npm run build` – Production build to `out/`
* `npm run preview` – Preview the production build locally

---

## 📄 License

( MIT).
