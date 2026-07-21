export type ExperienceEntry = {
  organization: string;
  role: string;
  team?: string;
  period: string;
  location: string;
  href?: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const professionalExperience: ExperienceEntry[] = [
  {
    organization: "Microsoft India",
    role: "Applied Scientist 2",
    team: "India Applied Sciences",
    period: "Aug 2025 — Present",
    location: "India",
    href: "https://www.microsoft.com/",
    summary:
      "Building efficient language-model capabilities for product applications, from adaptation and training-data design through large-scale evaluation.",
    highlights: [
      "Finetuning large and small language models to improve application intelligence across new tasks and domains.",
      "Exploring on-policy distillation of frontier models into cost-efficient, purpose-built small language models.",
      "Supporting a strong research culture through paper curation, reading groups, and technical presentations.",
    ],
    tags: ["LLM adaptation", "Model distillation", "Evaluation"],
  },
  {
    organization: "Microsoft Research India",
    role: "Research Fellow",
    team: "Mentored by Dr. Sunayana Sitaram",
    period: "Sep 2023 — Jul 2025",
    location: "Bengaluru, India",
    href: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/",
    summary:
      "Researched how pretrained language models can gain multilingual capabilities efficiently without sacrificing existing performance.",
    highlights: [
      "Developed active-forgetting and modular-learning approaches for cross-lingual transfer and language adaptation.",
      "Studied catastrophic forgetting, multilingual parameter-efficient finetuning, and broad multilingual evaluation.",
      "Ran distributed pretraining and post-training experiments on clusters spanning more than 100 GPUs.",
    ],
    tags: ["Multilingual LLMs", "Continual learning", "Distributed training"],
  },
  {
    organization: "American Express AI Labs",
    role: "AI Researcher",
    team: "Advanced NLP",
    period: "Aug 2022 — Aug 2023",
    location: "Gurugram, India",
    href: "https://www.americanexpress.com/",
    summary:
      "Applied language models to customer-care and text-understanding workflows while building scalable training-data systems.",
    highlights: [
      "Finetuned LLaMA models for response generation and built text-classification workflows with DeBERTa and RoBERTa.",
      "Combined abstractive summarization and classification for high-precision analysis of call-log data.",
      "Designed data curation and preprocessing pipelines on petabyte-scale Hadoop infrastructure.",
    ],
    tags: ["NLP", "LLM finetuning", "Data systems"],
  },
  {
    organization: "Builder.ai",
    role: "Data Scientist",
    period: "Mar 2021 — May 2022",
    location: "India",
    summary:
      "Worked on conversational recommendation, orchestration, and intent understanding for product-building workflows.",
    highlights: [
      "Built text-based recommendation and conversation-orchestration systems.",
      "Developed in-house intent classification for customer conversations.",
    ],
    tags: ["Recommendations", "Conversational AI"],
  },
];

export const academicExperience: ExperienceEntry[] = [
  {
    organization: "AI4Bharat, IIT Madras",
    role: "Research Collaborator",
    team: "Advisor: Dr. Anoop Kunchukuttan",
    period: "2022 — 2023",
    location: "Remote",
    href: "https://ai4bharat.iitm.ac.in/",
    summary:
      "Evaluated and finetuned large language models for Indian languages.",
    highlights: [],
    tags: ["Indic NLP", "LLM evaluation"],
  },
  {
    organization: "University of Utah",
    role: "Research Collaborator",
    team: "Advisor: Dr. Vivek Gupta",
    period: "2021 — 2022",
    location: "Remote",
    href: "https://www.utah.edu/",
    summary:
      "Collaborated on multilingual and tabular natural language inference and inter-bilingual semantic parsing.",
    highlights: [],
    tags: ["Multilingual NLI", "Semantic parsing"],
  },
  {
    organization: "Indian Institute of Technology Delhi",
    role: "Summer Fellowship Research Intern",
    team: "Advisor: Dr. Ashwini Vaidya",
    period: "2020 — 2021",
    location: "Delhi, India",
    href: "https://home.iitd.ac.in/",
    summary:
      "Created multilingual semantic-similarity data, baselines, and analysis for closely-related Indian languages.",
    highlights: [],
    tags: ["Semantic similarity", "Indian languages"],
  },
];

export const capabilityGroups = [
  {
    title: "Language models",
    items: [
      "Finetuning & post-training",
      "PEFT & adapters",
      "Continual learning",
      "Distillation",
      "Multilingual evaluation",
    ],
  },
  {
    title: "ML systems",
    items: [
      "PyTorch",
      "DeepSpeed",
      "Hugging Face",
      "Azure ML",
      "Distributed training",
      "Evaluation harnesses",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Python",
      "SQL",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud systems",
    ],
  },
];

export const academicService = {
  conferences: ["EMNLP 2024", "NAACL 2024", "ACL 2025"],
  workshops: [
    "NLP4ConvAI @ ACL 2024",
    "ACM AIMLSys Workshop 2023",
    "Continual FOMO @ NeurIPS 2024",
    "FITML @ NeurIPS 2024",
  ],
};
