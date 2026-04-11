# 🧑‍💻 Portfolio — Meven Desbois
![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Framework](https://img.shields.io/badge/Framework-Next.js_16-black)
![Language](https://img.shields.io/badge/Language-TypeScript-blue)
![Styling](https://img.shields.io/badge/Styling-TailwindCSS-38bdf8)
![Animations](https://img.shields.io/badge/Animations-Framer_Motion-ff69b4)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000)

Portfolio personnel développé avec **Next.js** et **TypeScript**, présentant mes projets, compétences, formations et participations CTF.

🌐 **Live** → [mevendesbois.com](https://mevendesbois.com)

---

## ✨ Aperçu

Portfolio full-stack moderne avec animations fluides, conçu pour présenter mon profil de futur ingénieur en **Systèmes, Réseaux, Cloud & Cybersécurité**.

Pages disponibles :
- **Home** — Présentation et introduction
- **About** — À propos de moi
- **Projects** — Mes projets (CTF, infra, dev)
- **Skills** — Compétences techniques
- **Education** — Parcours académique

---

## 🛠️ Stack technique

| Catégorie | Technologie |
|-----------|-------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Langage | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer-motion.com/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) · [Lucide React](https://lucide.dev/) |
| i18n | [next-intl](https://next-intl-docs.vercel.app/) |
| Analytics | Vercel Analytics · Vercel Speed Insights |
| Déploiement | [Vercel](https://vercel.com/) |

---

## 🚀 Démarrage local

### Prérequis

- Node.js >= 18
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/MevenLeVrai/portfolio.git
cd portfolio
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## 📁 Structure du projet

```
portfolio/
├── messages/                  # Fichiers de traduction (next-intl)
│   ├── fr.json                # Traductions françaises (langue par défaut)
│   └── en.json                # Traductions anglaises
├── public/                    # Assets statiques (images, favicon, signature)
├── src/
│   ├── app/
│   │   ├── [locale]/          # Segment dynamique i18n — toutes les pages sont scoped ici
│   │   │   ├── about/         # Page À propos
│   │   │   ├── education/     # Page Formation
│   │   │   ├── projects/      # Page Projets
│   │   │   ├── skills/        # Page Compétences
│   │   │   ├── layout.tsx     # Layout partagé (navbar, footer, providers)
│   │   │   ├── loading.tsx    # État de chargement global
│   │   │   └── page.tsx       # Page d'accueil
│   │   ├── globals.css        # Styles globaux
│   │   └── favicon.ico
│   ├── components/            # Composants réutilisables
│   ├── config/                # Configuration (données, métadonnées)
│   ├── i18n/
│   │   ├── routing.ts         # Définition des locales et locale par défaut
│   │   └── request.ts         # Chargement dynamique des messages selon la locale
│   ├── lib/                   # Fonctions utilitaires
│   └── proxy.ts               # Middleware proxy (redirection locale)
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🌍 Internationalisation (i18n)

Le portfolio supporte le **français** (par défaut) et l'**anglais**, via [next-intl](https://next-intl-docs.vercel.app/).

### Comment ça fonctionne

L'ensemble des pages est placé dans `src/app/[locale]/`. Ce segment dynamique capture la locale active dans l'URL (ex. `/fr/projects` ou `/en/projects`).

**Routing** — `src/i18n/routing.ts` déclare les locales supportées et la locale par défaut :

```ts
export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr'
});
```

**Chargement des messages** — `src/i18n/request.ts` charge le fichier JSON correspondant à la locale active à chaque requête serveur.

**Traductions** — Les fichiers `messages/fr.json` et `messages/en.json` contiennent toutes les chaînes de l'interface, organisées par namespace (page ou composant) :

```json
{
  "Home": {
    "title": "Bonjour, je suis Meven",
    "subtitle": "..."
  },
  "Nav": {
    "about": "À propos",
    ...
  }
}
```

**Usage dans un composant** — les traductions sont consommées via le hook `useTranslations` :

```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Home');
  return <h1>{t('title')}</h1>;
}
```

### Ajouter une langue

1. Créer `messages/<code>.json` en s'inspirant de `fr.json`
2. Ajouter le code dans `locales` dans `src/i18n/routing.ts`

---

## 📦 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

---

## 📬 Contact

- **Site** : [mevendesbois.com](https://mevendesbois.com)
- **GitHub** : [@MevenLeVrai](https://github.com/MevenLeVrai)
- **LinkedIn** : [linkedin.com/in/meven-desbois](https://linkedin.com/in/meven-desbois)

---
