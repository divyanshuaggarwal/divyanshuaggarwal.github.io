export type ResearchTheme = {
  title: string;
  description: string;
  keywords: string[];
};

export type NewsItem = {
  date: string;
  displayDate: string;
  text: string;
  href?: string;
};

export const researchThemes: ResearchTheme[] = [
  {
    title: "Efficient adaptation",
    description:
      "Adapting large and small language models to new applications and domains through finetuning, parameter-efficient methods, and model distillation.",
    keywords: ["Finetuning", "PEFT", "Distillation"],
  },
  {
    title: "Multilingual learning",
    description:
      "Expanding language capabilities through cross-lingual transfer, modular learning, and multilingual data while preserving existing model behavior.",
    keywords: ["Cross-lingual transfer", "Continual learning"],
  },
  {
    title: "Evaluation at scale",
    description:
      "Understanding model quality across languages, tasks, and modalities, with reproducible benchmarks and large-scale training and evaluation systems.",
    keywords: ["Benchmarking", "LLM evaluation", "ML systems"],
  },
];

export const news: NewsItem[] = [
  {
    date: "2026-07",
    displayDate: "Jul 2026",
    text: "Our work on two-phase continual instruction finetuning appears in ACL 2026 Findings.",
    href: "https://aclanthology.org/2026.findings-acl.1595/",
  },
  {
    date: "2025-11",
    displayDate: "Nov 2025",
    text: "Our active-forgetting work on cross-lingual transfer appears at EMNLP 2025.",
    href: "https://aclanthology.org/2025.emnlp-main.120/",
  },
  {
    date: "2025-08",
    displayDate: "Aug 2025",
    text: "Joined Microsoft India as an Applied Scientist 2.",
  },
  {
    date: "2025-04",
    displayDate: "Apr 2025",
    text: "Our probabilistic-tokenization work appears in NAACL 2025 Findings.",
    href: "https://aclanthology.org/2025.findings-naacl.268/",
  },
  {
    date: "2025-01",
    displayDate: "Jan 2025",
    text: "Our work on probabilistic tokenization was accepted to NAACL 2025 Findings.",
    href: "https://arxiv.org/abs/2407.03678",
  },
  {
    date: "2024-10",
    displayDate: "Oct 2024",
    text: "Released our preprint on active forgetting for cross-lingual transfer.",
    href: "https://arxiv.org/abs/2410.16168",
  },
  {
    date: "2024-08",
    displayDate: "Aug 2024",
    text: "MAPLE appears in ACL 2024 Findings.",
    href: "https://aclanthology.org/2024.findings-acl.881/",
  },
  {
    date: "2024-06",
    displayDate: "Jun 2024",
    text: "MEGAVERSE appears at NAACL 2024.",
    href: "https://aclanthology.org/2024.naacl-long.143/",
  },
  {
    date: "2024-05",
    displayDate: "May 2024",
    text: "MAPLE was accepted to ACL 2024 Findings.",
    href: "https://arxiv.org/abs/2401.07598",
  },
  {
    date: "2024-03",
    displayDate: "Mar 2024",
    text: "MEGAVERSE was accepted to NAACL 2024.",
    href: "https://arxiv.org/abs/2311.07463",
  },
  {
    date: "2024-01",
    displayDate: "Jan 2024",
    text: "Released the MAPLE preprint on multilingual parameter-efficient finetuning.",
    href: "https://arxiv.org/abs/2401.07598",
  },
  {
    date: "2023-11",
    displayDate: "Nov 2023",
    text: "Released the MEGAVERSE multilingual evaluation preprint.",
    href: "https://arxiv.org/abs/2311.07463",
  },
  {
    date: "2023-09",
    displayDate: "Sep 2023",
    text: "Joined Microsoft Research India as a Research Fellow with Dr. Sunayana Sitaram.",
  },
  {
    date: "2023-05",
    displayDate: "May 2023",
    text: "Our work on inter-bilingual semantic parsing was accepted to NLP4ConvAI at ACL 2023.",
    href: "https://aclanthology.org/2023.nlp4convai-1.9/",
  },
  {
    date: "2022-10",
    displayDate: "Oct 2022",
    text: "IndicXNLI was accepted to EMNLP 2022.",
    href: "https://aclanthology.org/2022.emnlp-main.755/",
  },
];
