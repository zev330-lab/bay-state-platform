# Bay State Digital Platform — Sales Presentation

## What This Is
Interactive swipeable sales presentation for Zion Yehoshua (Bay State Remodeling & Kitchen Gallery). 13-screen executive briefing covering websites, AI agents, lead pipeline, ownership model, timeline, pricing, and deposit payment.

## Stack
- React 19 + Vite 8 + Tailwind CSS 4
- Lucide React icons
- No backend — static SPA
- GitHub Pages deployment via Actions workflow

## Deploy
Push to `main` auto-deploys via `.github/workflows/deploy.yml`
- **Live URL:** https://zev330-lab.github.io/bay-state-platform/
- **GitHub:** zev330-lab/bay-state-platform

## Design System
- Dark navy background (`#0f172a`)
- Cyan accent (`#06b6d4`), Gold accent (`#f59e0b`)
- Cards: `bg-card rounded-2xl p-5 border border-white/5`
- Layout: `max-w-lg mx-auto px-5`
- Body text: `text-body text-[15px] leading-relaxed`
- Custom colors defined in `src/App.css` via `@theme`

## Screen Structure
1. Welcome / Context
2. What You Told Us (Zion's own words)
3. What We're Building (two websites)
4. Your AI Agents (6 agents)
5. Lead Pipeline & Customer Nurture
6. What This Replaces (comparison)
7. Kitchen Configurator (preview + links)
8. You Own Everything (ownership differentiator)
9. Timeline — 5 Weeks to Live
10. Investment ($21K build + ongoing options)
11. What This Is Worth (value comparison)
12. What We Need From You (intake checklist)
13. Let's Go (Stripe deposit CTA)

## TODO
- Replace `#STRIPE_LINK_PLACEHOLDER` in `src/screens/Screen13.jsx` with actual Stripe payment link
