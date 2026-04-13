export interface CaseSection {
  kind: 'text' | 'quote' | 'image' | 'split'
  heading?: string
  label?: string
  body?: string
  image?: string
  caption?: string
  left?: string
  right?: string
}

export interface Metric {
  value: string
  label: string
}

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  description: string
  cover: string
  heroImage: string
  role: string
  timeline: string
  client: string
  platform: string
  tags: string[]
  metrics: Metric[]
  problem: string
  approach: string
  sections: CaseSection[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'aether-analytics',
    title: 'Aether Analytics',
    category: 'AI Dashboard',
    year: '2025',
    summary:
      'Real-time analytics with natural language queries. Ask a question, get a chart.',
    description:
      'A conversational query surface for business teams. No SQL. No dashboards no one opens.',
    cover: 'https://picsum.photos/seed/aether/1200/900',
    heroImage: 'https://picsum.photos/seed/aether-hero/1800/1100',
    role: 'Lead Product Designer',
    timeline: '8 months · Jan – Sep 2025',
    client: 'Aether (Series A, 32 people)',
    platform: 'Web · Desktop-first',
    tags: ['Product Design', 'AI / NLP', 'Data Visualization', 'Design System'],
    metrics: [
      { value: '−80%', label: 'Time to insight' },
      { value: '12k', label: 'Monthly active users' },
      { value: '4.7', label: 'CSAT (of 5)' },
      { value: '0→1', label: 'Zero-to-one build' },
    ],
    problem:
      'Business teams waited days for analysts to translate questions into SQL. Dashboards drifted from the questions people were actually asking. The legacy BI tool had 62 dashboards and a 14% weekly open rate.',
    approach:
      'Treat the query as the product. I designed a conversational query layer that accepts plain-language questions, resolves ambiguity inline, and returns a chart plus a plain-language summary — in a single glance. Underneath: a semantic model that maps tables to concepts, not columns.',
    sections: [
      {
        kind: 'text',
        label: 'Discovery',
        heading: 'Where the old tool broke down.',
        body:
          'I ran 18 interviews with PMs, ops leads, and founders. Every one of them described the same loop: I have a question → I Slack an analyst → I wait → I get a chart → it answers a slightly different question. The friction was not the chart — it was the round-trip.',
      },
      {
        kind: 'image',
        image: 'https://picsum.photos/seed/aether-research/1800/900',
        caption:
          'Journey map of the old workflow — pink blocks are wait time.',
      },
      {
        kind: 'text',
        label: 'Principle',
        heading: 'Make the question-first.',
        body:
          'Every other BI tool leads with a canvas. We led with a prompt. The canvas assembles itself as you refine. This meant re-framing what a "dashboard" is: less a place you visit, more a conversation you can scroll back through.',
      },
      {
        kind: 'split',
        heading: 'Ambiguity, handled in-line.',
        left:
          'When a question is ambiguous ("top customers"), the system asks one clarifying question — by revenue, by usage, by recency? — before returning anything.',
        right:
          'The clarification is a chip row, not a modal. You tap to resolve. The question updates. The chart redraws. Three seconds, not three messages.',
      },
      {
        kind: 'image',
        image: 'https://picsum.photos/seed/aether-flow/1800/1100',
        caption: 'Ambiguity resolution flow — inline chips, no modals.',
      },
      {
        kind: 'quote',
        body:
          '"I asked a question on the way to a meeting and had the answer before I sat down. That never happened in the old tool."',
        caption: 'Ops lead, pilot customer',
      },
      {
        kind: 'text',
        label: 'Outcome',
        heading: 'Eighty percent faster, and quieter.',
        body:
          'Three months after rollout, median time-from-question-to-answer dropped from 1.4 days to 3 hours. Slack traffic in the #data channel halved. The tool became invisible, which was the goal.',
      },
    ],
    gallery: [
      'https://picsum.photos/seed/aether-1/1600/1000',
      'https://picsum.photos/seed/aether-2/1600/1000',
      'https://picsum.photos/seed/aether-3/1600/1000',
    ],
  },
  {
    slug: 'forma-design-system',
    title: 'Forma Design System',
    category: 'Design System',
    year: '2024',
    summary:
      '85 primitives serving 12 product teams across a growing SaaS platform.',
    description:
      'A single design system to replace six accidental ones — plus the tokens, docs, and rituals that kept it honest.',
    cover: 'https://picsum.photos/seed/forma/1200/900',
    heroImage: 'https://picsum.photos/seed/forma-hero/1800/1100',
    role: 'Design Systems Lead',
    timeline: '10 months · Feb – Nov 2024',
    client: 'DesignScale (Series C)',
    platform: 'Web · React + Figma',
    tags: ['Design Systems', 'Tokens', 'Documentation', 'Governance', 'Figma'],
    metrics: [
      { value: '400 → 85', label: 'Components consolidated' },
      { value: '94%', label: 'Adoption in two quarters' },
      { value: '6', label: 'Products unified' },
      { value: '3×', label: 'Faster shipping' },
    ],
    problem:
      'Six products, six takes on "a button". Engineers cloned components across repos. Designers re-drew modals from memory. Accessibility regressions shipped quarterly. The org had a design system in name but not in practice.',
    approach:
      'Audit honestly, consolidate aggressively, govern lightly. I started with a component census — photographs of every button, input, and modal across the six products — and used frequency to decide what was worth saving. Everything else got merged or retired.',
    sections: [
      {
        kind: 'text',
        label: 'The audit',
        heading: 'Photograph everything. Decide later.',
        body:
          'Over two weeks, I captured 412 unique components across production. That photo wall was the single most persuasive artifact of the project — no one argued for their custom button once they saw it next to eleven siblings.',
      },
      {
        kind: 'image',
        image: 'https://picsum.photos/seed/forma-audit/1800/900',
        caption: 'The component wall — 412 variants becoming 85 primitives.',
      },
      {
        kind: 'split',
        heading: 'Tokens first. Components second.',
        left:
          'We designed the token architecture before drawing a single component. Three layers: primitive, semantic, component. Light, dark, and one white-label mode all expressed as token overrides.',
        right:
          'That discipline made the component work feel almost mechanical. A button is a container + a label + a state. The system decides its color. The designer picks intent, not pixels.',
      },
      {
        kind: 'quote',
        body:
          '"Forma is the first system I have worked with where the docs are better than the Slack thread that used to replace them."',
        caption: 'Staff engineer, platform team',
      },
      {
        kind: 'text',
        label: 'Governance',
        heading: 'Rituals, not gates.',
        body:
          'Weekly open office hours. A single Linear intake. Quarterly component retros where we retired whatever the data said nobody used. Adoption was not enforced — it was earned by making the system the easiest path.',
      },
    ],
    gallery: [
      'https://picsum.photos/seed/forma-1/1600/1000',
      'https://picsum.photos/seed/forma-2/1600/1000',
      'https://picsum.photos/seed/forma-3/1600/1000',
    ],
  },
  {
    slug: 'muse-generative-studio',
    title: 'Muse Generative Studio',
    category: 'Creative Tool',
    year: '2024',
    summary:
      'Prompt-to-brand asset pipeline that makes generative AI feel controllable.',
    description:
      'A generative design studio where output is steerable — style anchors, variation grids, and an undo history that feels like a sketchbook.',
    cover: 'https://picsum.photos/seed/muse/1200/900',
    heroImage: 'https://picsum.photos/seed/muse-hero/1800/1100',
    role: 'Product Designer (contract)',
    timeline: '5 months · Apr – Aug 2024',
    client: 'Muse (seed-stage)',
    platform: 'Web · Canvas-based',
    tags: ['Generative AI', 'Creative Tools', 'Interaction', 'Prompt UX'],
    metrics: [
      { value: '42%', label: 'Retention D30 (cohort avg.)' },
      { value: '8.3', label: 'Avg. sessions per user / wk' },
      { value: '3.1', label: 'Generations per asset shipped' },
    ],
    problem:
      'Early generative tools felt like slot machines. Creators wanted the speed of AI and the control of Photoshop, and they were getting neither. The key design problem: how do you give a probabilistic system predictable handles?',
    approach:
      'Lock what matters, vary what does not. I designed "style anchors" — a UI pattern that lets a user pin specific attributes (palette, layout, typography) while asking the model to explore the rest. Generation becomes a constrained search, not a lottery.',
    sections: [
      {
        kind: 'text',
        label: 'Core pattern',
        heading: 'Style anchors.',
        body:
          'Anchors attach to any generated output. Pin the palette from result 3, the layout from result 7, and the composition from a reference image — regenerate. The system respects each anchor with a visible confidence score, so you know when you are fighting the model.',
      },
      {
        kind: 'image',
        image: 'https://picsum.photos/seed/muse-anchors/1800/900',
        caption: 'Style anchors in the canvas — pinned attributes stay put.',
      },
      {
        kind: 'split',
        heading: 'The variation grid.',
        left:
          'Generations arrive as a 3×3 grid, not a single image. You rate two, dismiss the rest, and the next grid biases toward what you kept.',
        right:
          'This reduced "refresh spam" — the anti-pattern where users tap generate until something lands. Average generations per shipped asset dropped from 11 to 3.',
      },
      {
        kind: 'quote',
        body:
          '"It feels like the tool remembers what I like. I stopped fighting it."',
        caption: 'Independent brand designer, pilot user',
      },
    ],
    gallery: [
      'https://picsum.photos/seed/muse-1/1600/1000',
      'https://picsum.photos/seed/muse-2/1600/1000',
    ],
  },
  {
    slug: 'pulse-health',
    title: 'Pulse Health',
    category: 'Health Tech',
    year: '2023',
    summary:
      'Patient monitoring that predicts and communicates risk without alarm fatigue.',
    description:
      'A caregiver dashboard that treats probability as a first-class citizen — informing without alarming.',
    cover: 'https://picsum.photos/seed/pulse/1200/900',
    heroImage: 'https://picsum.photos/seed/pulse-hero/1800/1100',
    role: 'Senior Product Designer',
    timeline: '7 months · Mar – Sep 2023',
    client: 'Pulse Health',
    platform: 'Web + iPad · Clinical setting',
    tags: ['Health Tech', 'AI Predictions', 'Accessibility', 'Mobile'],
    metrics: [
      { value: '−37%', label: 'Alert dismissal rate' },
      { value: '+22%', label: 'Early intervention rate' },
      { value: 'WCAG 2.2 AA', label: 'Compliant, audited' },
    ],
    problem:
      'The old tool yelled. Every risk — a 3% and a 72% — arrived as the same red banner. Caregivers started muting the thing. We had a boy-who-cried-wolf problem in a setting where silence costs lives.',
    approach:
      'Design for calibration. I built a risk taxonomy with three bands (watch, attend, act) and matched each to a distinct visual treatment and sound. The system only speaks when the probability crosses a threshold that a clinician helped define.',
    sections: [
      {
        kind: 'text',
        label: 'Calibration',
        heading: 'Three bands. Three voices.',
        body:
          'Watch is a quiet dot. Attend is a labeled card in the feed. Act is a full-bleed takeover with a clear action. The taxonomy is consistent across web and iPad, which matters when caregivers move between devices mid-shift.',
      },
      {
        kind: 'image',
        image: 'https://picsum.photos/seed/pulse-bands/1800/900',
        caption: 'Risk bands rendered — each with distinct weight and tone.',
      },
      {
        kind: 'quote',
        body:
          '"The first tool I have used that tells me how sure it is — and means it."',
        caption: 'Nursing director, pilot site',
      },
      {
        kind: 'text',
        label: 'Accessibility',
        heading: 'Designed for tired eyes.',
        body:
          'Every color pairing audited at WCAG 2.2 AA. All critical signals have a non-color channel — shape, position, or sound. The dashboard works under fluorescent hospital lighting and at 3 a.m. with the screen dimmed.',
      },
    ],
    gallery: [
      'https://picsum.photos/seed/pulse-1/1600/1000',
      'https://picsum.photos/seed/pulse-2/1600/1000',
    ],
  },
  {
    slug: 'nexus-onboarding',
    title: 'Nexus Onboarding',
    category: 'Enterprise SaaS',
    year: '2023',
    summary:
      'Replaced a 14-step wizard with progressive disclosure. Drop-off fell 45%.',
    description:
      'Let users work first, configure later. An onboarding that stops treating setup as a toll booth.',
    cover: 'https://picsum.photos/seed/nexus/1200/900',
    heroImage: 'https://picsum.photos/seed/nexus-hero/1800/1100',
    role: 'Product Designer',
    timeline: '4 months · Jun – Sep 2023',
    client: 'Nexus (Series B)',
    platform: 'Web · Enterprise',
    tags: ['Enterprise UX', 'Onboarding', 'AI Assistant', 'A/B Testing'],
    metrics: [
      { value: '−45%', label: 'Drop-off during setup' },
      { value: '+18%', label: 'D7 activation' },
      { value: '−60%', label: 'Support tickets in first 14 days' },
    ],
    problem:
      'The old onboarding asked fourteen questions before you saw the product. Each question felt reasonable in isolation; together they were a wall. 58% of signups never finished.',
    approach:
      'Invert the default. New workspaces start pre-configured for a best-guess use case. Users start working immediately; configuration surfaces contextually. An AI assistant answers setup questions in natural language instead of linking to docs.',
    sections: [
      {
        kind: 'text',
        label: 'Rewrite',
        heading: 'From wizard to workspace.',
        body:
          'The first screen is now the product. A banner at the top says, in plain language, "this is a template — change anything". Every configuration lives where you would naturally meet it. The fourteen questions became zero up-front and about four contextual nudges.',
      },
      {
        kind: 'image',
        image: 'https://picsum.photos/seed/nexus-before-after/1800/900',
        caption: 'Before (wizard) and after (workspace-first).',
      },
      {
        kind: 'split',
        heading: 'Ask, don\'t link.',
        left:
          'The embedded assistant answers setup questions conversationally. It sees your workspace state and gives specific answers, not doc links.',
        right:
          'Support tickets in the first 14 days fell 60%. Not because the assistant deflected them — because users stopped getting stuck.',
      },
      {
        kind: 'quote',
        body:
          '"I have onboarded five tools this quarter. This one never told me to read a guide."',
        caption: 'IT lead, beta customer',
      },
    ],
    gallery: [
      'https://picsum.photos/seed/nexus-1/1600/1000',
      'https://picsum.photos/seed/nexus-2/1600/1000',
    ],
  },
]

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug)

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1) return projects[0]
  return projects[(i + 1) % projects.length]
}
