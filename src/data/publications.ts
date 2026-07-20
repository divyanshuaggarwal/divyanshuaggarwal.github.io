export type Author = {
  name: string;
  self?: boolean;
  equalContribution?: boolean;
};

export type PublicationLink = {
  label: "Paper" | "Preprint" | "Code" | "Project";
  href: string;
};

export type Publication = {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  venueShort: string;
  year: number;
  topics: string[];
  summary?: string;
  featured?: boolean;
  links: PublicationLink[];
};

const self = (equalContribution = false): Author => ({
  name: "Divyanshu Aggarwal",
  self: true,
  equalContribution,
});

const author = (name: string, equalContribution = false): Author => ({
  name,
  equalContribution,
});

export const publications: Publication[] = [
  {
    id: "continual-instruction-finetuning",
    title:
      "Exploring Two-Phase Continual Instruction Fine-tuning for Multilingual Adaptation in Large Language Models",
    authors: [
      self(true),
      author("Sankarshan Damle", true),
      author("Navin Goyal"),
      author("Satya Lokam"),
      author("Sunayana Sitaram"),
    ],
    venue: "Findings of the Association for Computational Linguistics: ACL 2026",
    venueShort: "ACL 2026 Findings",
    year: 2026,
    topics: ["Continual learning", "Multilingual LLMs"],
    summary:
      "A two-phase instruction-finetuning approach for extending multilingual ability while retaining previously learned capabilities.",
    featured: true,
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2026.findings-acl.1595/",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2410.16006",
      },
    ],
  },
  {
    id: "active-forgetting",
    title: "Improving Cross Lingual Transfer by Pretraining with Active Forgetting",
    authors: [self(true), author("Ashutosh Sathe", true), author("Sunayana Sitaram")],
    venue: "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    venueShort: "EMNLP 2025",
    year: 2025,
    topics: ["Cross-lingual transfer", "Language adaptation"],
    summary:
      "Pretraining with active forgetting to improve transfer when decoder language models are adapted to new languages.",
    featured: true,
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2025.emnlp-main.120/",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2410.16168",
      },
    ],
  },
  {
    id: "probabilistic-tokenization",
    title: "Improving Consistency in LLM Inference using Probabilistic Tokenization",
    authors: [author("Ashutosh Sathe", true), self(true), author("Sunayana Sitaram")],
    venue: "Findings of the Association for Computational Linguistics: NAACL 2025",
    venueShort: "NAACL 2025 Findings",
    year: 2025,
    topics: ["LLM inference", "Tokenization"],
    summary:
      "A probabilistic tokenization strategy for improving the consistency of language-model outputs across repeated inference.",
    featured: true,
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2025.findings-naacl.268/",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2407.03678",
      },
    ],
  },
  {
    id: "maple",
    title: "MAPLE: Multilingual Evaluation of Parameter Efficient Finetuning of Large Language Models",
    authors: [
      self(true),
      author("Ashutosh Sathe", true),
      author("Ishaan Watts"),
      author("Sunayana Sitaram"),
    ],
    venue: "Findings of the Association for Computational Linguistics: ACL 2024",
    venueShort: "ACL 2024 Findings",
    year: 2024,
    topics: ["PEFT", "Multilingual evaluation"],
    summary:
      "A systematic evaluation of parameter-efficient finetuning choices across multilingual downstream tasks.",
    featured: true,
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2024.findings-acl.881/",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2401.07598",
      },
    ],
  },
  {
    id: "megaverse",
    title: "MEGAVERSE: Benchmarking Large Language Models Across Languages, Modalities, Models and Tasks",
    authors: [
      author("Sanchit Ahuja"),
      self(),
      author("Varun Gumma"),
      author("Ishaan Watts"),
      author("Ashutosh Sathe"),
      author("Millicent Ochieng"),
      author("Rishav Hada"),
      author("Prachi Jain"),
      author("Mohamed Ahmed"),
      author("Kalika Bali"),
      author("Sunayana Sitaram"),
    ],
    venue:
      "Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics",
    venueShort: "NAACL 2024",
    year: 2024,
    topics: ["Benchmarking", "Multilingual LLMs", "Multimodality"],
    summary:
      "A broad evaluation benchmark spanning languages, modalities, model families, and task types.",
    featured: true,
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2024.naacl-long.143/",
      },
      {
        label: "Code",
        href: "https://github.com/microsoft/MEGAVERSE",
      },
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2311.07463",
      },
    ],
  },
  {
    id: "inter-bilingual-semantic-parsing",
    title: "Evaluating Inter-Bilingual Semantic Parsing for Indian Languages",
    authors: [self(), author("Vivek Gupta"), author("Anoop Kunchukuttan")],
    venue: "Proceedings of the 5th Workshop on NLP for Conversational AI",
    venueShort: "NLP4ConvAI @ ACL 2023",
    year: 2023,
    topics: ["Semantic parsing", "Indian languages"],
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2023.nlp4convai-1.9/",
      },
      {
        label: "Project",
        href: "https://iesemparse.github.io/",
      },
    ],
  },
  {
    id: "indicxnli",
    title: "IndicXNLI: Evaluating Multilingual Inference for Indian Languages",
    authors: [self(), author("Vivek Gupta"), author("Anoop Kunchukuttan")],
    venue: "Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing",
    venueShort: "EMNLP 2022",
    year: 2022,
    topics: ["Natural language inference", "Indian languages"],
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2022.emnlp-main.755/",
      },
      {
        label: "Project",
        href: "https://indicxnli.github.io/",
      },
    ],
  },
  {
    id: "xinfotabs",
    title: "XInfoTabS: Evaluating Multilingual Tabular Natural Language Inference",
    authors: [
      author("Bhavnick Minhas"),
      author("Anant Shankhdhar"),
      author("Vivek Gupta"),
      self(),
      author("Shuo Zhang"),
    ],
    venue: "Proceedings of the Fifth Fact Extraction and VERification Workshop",
    venueShort: "FEVER @ ACL 2022",
    year: 2022,
    topics: ["Tabular NLI", "Multilingual evaluation"],
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2022.fever-1.7/",
      },
      {
        label: "Project",
        href: "https://xinfotabs.github.io/",
      },
    ],
  },
  {
    id: "protein-function-prediction",
    title: "A Review of Deep Learning Techniques for Protein Function Prediction",
    authors: [self(), author("Yasha Hasija")],
    venue: "2nd International Conference for Emerging Technology",
    venueShort: "IEEE INCET 2021",
    year: 2021,
    topics: ["Deep learning", "Computational biology"],
    links: [
      {
        label: "Preprint",
        href: "https://arxiv.org/abs/2211.09705",
      },
    ],
  },
  {
    id: "distributional-semantic-models",
    title: "Fine-tuning Distributional Semantic Models for Closely-Related Languages",
    authors: [author("Kushagra Bhatia"), self(), author("Ashwini Vaidya")],
    venue: "Proceedings of the Eighth Workshop on NLP for Similar Languages, Varieties and Dialects",
    venueShort: "VarDial @ EACL 2021",
    year: 2021,
    topics: ["Semantic similarity", "Closely-related languages"],
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2021.vardial-1.7/",
      },
    ],
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);
