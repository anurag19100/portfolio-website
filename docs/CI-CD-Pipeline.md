# CI/CD Pipeline Documentation

## Overview

This portfolio website uses a **GitHub + Netlify** continuous deployment pipeline. Every push to the `devops-0.0.1` branch automatically triggers a build and deploy to production.

## Architecture

```
Developer → git push → GitHub (devops-0.0.1) → Netlify Build → Production
```

| Component | Details |
|-----------|---------|
| Source | GitHub — `anurag19100/portfolio-website` |
| Branch | `devops-0.0.1` |
| Build Platform | Netlify |
| Site URL | https://anurag-devops.netlify.app |
| Framework | Next.js 14 (Static Export) |
| Node Version | 18 |

## How It Works

### 1. Trigger

Netlify listens for push events on the `devops-0.0.1` branch via a GitHub webhook. Any commit pushed to this branch starts a new deploy.

### 2. Build

Netlify runs the following:

```bash
npm run build
```

This executes `next build` which:
- Lints and type-checks the codebase
- Compiles all pages to static HTML/CSS/JS
- Outputs to the `out/` directory (configured via `output: 'export'` in `next.config.mjs`)

### 3. Publish

Netlify serves the contents of the `out/` directory as a static site. The publish directory is defined in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4. Environment Variables

| Variable | Purpose | Set On |
|----------|---------|--------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | API key for contact form email delivery | Netlify dashboard |

Environment variables are configured in **Netlify > Site settings > Environment variables**. The `NEXT_PUBLIC_` prefix makes them available at build time in the browser bundle.

## Workflow

### Making Changes

```bash
# 1. Make code changes locally
# 2. Build and verify
npm run build

# 3. Commit
git add .
git commit -m "feat: description of change"

# 4. Push — this triggers auto-deploy
git push origin devops-0.0.1
```

### Manual Deploy (CLI)

If the GitHub webhook or auto-deploy is down, deploy manually using the Netlify CLI:

```bash
# 1. Build locally
npm run build

# 2. Deploy to production
npx netlify-cli deploy --dir out --prod
```

This uploads the `out/` directory directly to Netlify — no GitHub webhook needed. Useful for:
- Emergency hotfixes when auto-deploy is broken
- Testing a build before pushing to GitHub
- Deploying when Netlify loses GitHub repo access (SSH key issues)

**First-time setup:**

```bash
# Login to Netlify (one-time)
npx netlify-cli login

# Link the project to the Netlify site (one-time)
npx netlify-cli link --name anurag-devops
```

### Fixing Broken Auto-Deploy

If deploys fail with `Host key verification failed` or similar SSH errors:

1. Go to **Netlify Dashboard** → **Site configuration** → **Build & deploy** → **Repository**
2. Click **Unlink** to disconnect the repo
3. Click **Link repository** → select **GitHub** → pick `anurag19100/portfolio-website`
4. Set **production branch** to `devops-0.0.1`
5. Save — this re-creates the SSH deploy key

Push a commit to verify auto-deploy is restored.

### Monitoring Deploys

- **Netlify Dashboard**: Shows build logs, deploy status, and deploy previews
- **Deploy Notifications**: Netlify sends notifications on build success/failure
- Build logs are accessible at: `https://app.netlify.com/sites/anurag-devops/deploys`

### Rollback

Netlify keeps every deploy as an immutable snapshot. To rollback:
1. Go to Netlify Dashboard → Deploys
2. Click on the previous successful deploy
3. Click **"Publish deploy"**

No code changes or reverts needed — instant rollback.

## Build Configuration

### next.config.mjs

```js
const nextConfig = {
  output: 'export',      // Static HTML export
  images: {
    unoptimized: true,    // Required for static export
  },
}
```

### Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework with static export |
| `tailwindcss` | Utility-first CSS |
| `framer-motion` | Page animations |
| `react-icons` | Icon library |
| `web3forms` | Serverless contact form |

## Security

- No secrets are committed to the repository
- `NEXT_PUBLIC_WEB3FORMS_KEY` is a public API key (designed for client-side use, domain-restricted)
- `.env.local` is in `.gitignore` — never pushed to GitHub
- Netlify provides automatic HTTPS via Let's Encrypt
