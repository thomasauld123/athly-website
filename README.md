# Athly Website

Production-grade marketing website for Athly — AI-powered platforms that let athletes convert authority into compounding revenue.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Motion**: Framer Motion
- **Blog**: MDX (local filesystem)
- **Fonts**: Space Grotesk (headings) + Inter (body) + JetBrains Mono (code/metrics)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── for-investors/     # Investor persona page
│   ├── for-managers/      # Manager persona page
│   ├── for-athletes/      # Athlete persona page
│   ├── resources/         # Blog index + [slug] posts
│   ├── about/             # About page
│   └── contact/           # Contact form
├── components/
│   ├── layout/            # Container, Section
│   ├── navigation/        # Header, Footer
│   ├── ui/                # Button, Badge, Card, Metric, etc.
│   ├── artifacts/         # ChatArtifact, DashboardArtifact, ProgressionArtifact
│   └── content/           # MDX components (Callout, PullQuote, InlineMetric)
├── lib/
│   ├── blog.ts            # Blog post loading and parsing
│   ├── fonts.ts           # Font configuration
│   ├── motion.ts          # Framer Motion variants
│   └── theme.tsx          # Dark mode provider
└── types/
    └── mdx.d.ts           # TypeScript declarations

content/
└── resources/             # MDX blog posts with frontmatter
```

## Blog Posts

Add new posts as `.mdx` files in `content/resources/` with frontmatter:

```mdx
---
title: "Post title"
date: "2025-01-01"
summary: "Brief description"
tags: ["Tag1", "Tag2"]
---

Post content here...
```

## Build

```bash
npm run build
```
