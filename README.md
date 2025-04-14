# ACES Contentful Web

**ACES (Accelerators for Composable Enterprise Solutions)** Contentful Web is a **production-ready, open-source starter kit** for building scalable, content-rich websites using **Next.js 15 (App Router)** and **Contentful**.

Architected with **MACH principles** (Microservices, API-first, Cloud-native, Headless), this starter kit accelerates delivery for agencies, enterprise teams, and solo developers by bundling in best practices, extensible architecture, and real-world CMS patterns out of the box.

Whether you're launching a marketing site, content hub, or multi-brand presence, ACES provides a modern foundation built for performance, flexibility, and rapid development.

It’s fully powered by **Contentful**, with a complete set of **starter content models**, sample content, and flexible layout patterns designed for web experiences.

---

## ✨ Core Features

- Built with **Next.js 15 App Router** and **TypeScript**
- Structured content modeling via **Contentful**
- **Preview mode** and **Live Draft mode** support
- Scalable page layout system with 15+ pre-built components
- Fully integrated **Storybook** for CMS-driven UI and design system work
- **SEO-ready architecture** with Yoast-style metadata modeling
- Integrated **HubSpot & Pardot form support**
- Dynamic navigation structure with multi-level support
- Global **site search**, powered by Contentful
- Translation-ready, with `en-US` as default locale
- Utility hooks and CLI commands for fast component scaffolding

---

## 🚀 Getting Started

### 📄 Creating Contentful API and CMA Tokens
To connect your ACES Contentful Web project to Contentful, you’ll need two tokens:

1. API Access Token (CDA Token) — for reading content from Contentful.

2. CMA Access Token (CMA Token) — for managing content and performing administrative tasks (like content updates).

**Step 1: Log into Contentful**
Go to Contentful and log into your account.

**Step 2: Create the Tokens**
1. API Access Token (CDA Token)
    - Navigate to Settings > API keys in the Contentful dashboard.
    - Click Add API Key.
    - Choose an appropriate environment (usually master).
    - Under Access tokens, you’ll see your CDA Token (API token). Copy it.

2. CMA Access Token (CMA Token)
    - Navigate to Settings > API keys.
    - Scroll down to Content Management API.
    - Click Add API Key under Content Management API.
    - Copy the CMA Token generated here.

### 📦 Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mikepalazzo/aces-contentful-web.git
   cd aces-contentful-web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment variables file and configure:
    ```bash
    cp .env.example .env
    ```
    Then open the .env file in your editor and update the following values with your own to connect to your Contentful Space:
    ```bash
    NEXT_PUBLIC_CF_GRAPHQL_URL=https://graphql.contentful.com/content/v1/spaces
    NEXT_PUBLIC_CF_SPACE=
    NEXT_PUBLIC_CF_ENVIRONMENT=
    NEXT_PUBLIC_CF_ACCESS_TOKEN=
    NEXT_PUBLIC_CF_PREVIEW_ACCESS_TOKEN=
    NEXT_CF_CMA_TOKEN=
4. Create Your Contentful Site
    The following command will create your initial contentful site.
    The CMA Token is required for any contentful space management through the starter commands.
     ```bash
    npm run create-cf-site My Site
    ```
5. Start the dev server:
     ```bash
    npm run dev
    ```
6. Run Storybook:
     ```bash
    npm run storybook
    ```

## 🧪 Project Commands
| Command                        | Description                                               |
|---------------------------------|----------------------------------------------------------|
| `npm run dev`                   | Start the Next.js dev server                             |
| `npm run build`                 | Build the app for production                             |
| `npm run build:scripts`         | Build subscriber script for RSC Contentful Live Preview  |
| `npm start`                     | Run production build                                     |
| `npm run lint`                  | Run ESLint checks                                        |
| `npm run storybook`             | Run Storybook locally                                    |
| `npm build-storybook`           | Build Storybook                                          |
| `npm run export-content`        | Export Contentful Space Content                          |
| `npm run export-models-only`    | Export Contentful Space Content Models                   |
| `npm run import-content`        | Import json content into Contentful Space                |
| `npm run import-models-only`    | Import json content models into Contentful Space         |
| `npm run create-cf-component`   | Create a new Contentful page component                   |
