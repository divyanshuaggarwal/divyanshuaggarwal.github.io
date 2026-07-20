export type OpenSourceContribution = {
  project: string;
  organization: string;
  year: number;
  description: string;
  repository: string;
  contributions: {
    label: string;
    href: string;
  }[];
};

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: "Marin",
    organization: "marin-community",
    year: 2025,
    description:
      "Added a continual-pretraining script for augmenting multilingual capabilities from the Phoenix training phase.",
    repository: "https://github.com/marin-community/marin",
    contributions: [
      {
        label: "PR #1498",
        href: "https://github.com/marin-community/marin/pull/1498",
      },
    ],
  },
  {
    project: "Axolotl",
    organization: "axolotl-ai-cloud",
    year: 2025,
    description:
      "Extended the training lifecycle with integration hooks for model loading, adapter loading, training, and unloading.",
    repository: "https://github.com/axolotl-ai-cloud/axolotl",
    contributions: [
      {
        label: "PR #2539",
        href: "https://github.com/axolotl-ai-cloud/axolotl/pull/2539",
      },
    ],
  },
  {
    project: "Adapters",
    organization: "adapter-hub",
    year: 2024,
    description:
      "Fixed Mistral model support so adapter workflows can run with FlashAttention 2.",
    repository: "https://github.com/adapter-hub/adapters",
    contributions: [
      {
        label: "PR #758",
        href: "https://github.com/adapter-hub/adapters/pull/758",
      },
    ],
  },
  {
    project: "FastChat",
    organization: "lm-sys",
    year: 2023,
    description:
      "Added DeepSpeed scripts for multi-GPU LoRA finetuning of T5 XL and XXL models.",
    repository: "https://github.com/lm-sys/FastChat",
    contributions: [
      {
        label: "PR #1926",
        href: "https://github.com/lm-sys/FastChat/pull/1926",
      },
    ],
  },
  {
    project: "imodelsX",
    organization: "csinva",
    year: 2023,
    description:
      "Added batching and minimum N-gram frequency controls to make Aug-GAM and Emb-GAM workflows more practical.",
    repository: "https://github.com/csinva/imodelsX",
    contributions: [
      {
        label: "PR #3",
        href: "https://github.com/csinva/imodelsX/pull/3",
      },
      {
        label: "PR #4",
        href: "https://github.com/csinva/imodelsX/pull/4",
      },
    ],
  },
];
