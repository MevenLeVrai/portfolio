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

### Variables d'environnement

Crée un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=your_resend_api_key
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## 📁 Structure du projet

portfolio/  
├── public/ # Assets statiques (images, favicon, signature)     
├── src/    
│ ├── app/ # App Router Next.js     
│ │ ├── about/ # Page À propos  
│ │ ├── education/ # Page Formation     
│ │ ├── projects/ # Page Projets    
│ │ ├── skills/ # Page Compétences  
│ │ ├── layout.tsx # Layout global  
│ │ └── page.tsx # Page d'accueil   
│ ├── components/ # Composants réutilisables    
│ ├── config/ # Configuration (données, métadonnées)    
│ └── lib/ # Fonctions utilitaires   
├── next.config.js  
├── tailwind.config.ts  
└── package.json


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
