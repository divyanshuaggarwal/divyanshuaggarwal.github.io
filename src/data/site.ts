export type ProfileLink = {
  label: string;
  href: string;
  kind: "email" | "github" | "linkedin" | "scholar" | "x";
};

export const site = {
  name: "Divyanshu Aggarwal",
  shortName: "DA",
  role: "Applied Scientist 2 at Microsoft",
  location: "Delhi, India",
  email: "divyanshuggrwl@gmail.com",
  url: "https://divyanshuaggarwal.github.io",
  resume: "/resume/",
  description:
    "Applied Scientist and NLP researcher working on efficient LLM adaptation, multilingual and continual learning, model distillation, and evaluation.",
  profiles: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=WuYKZLAAAAAJ",
      kind: "scholar",
    },
    {
      label: "GitHub",
      href: "https://github.com/divyanshuaggarwal",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/divyanshu-aggarwal-498894163/",
      kind: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:divyanshuggrwl@gmail.com",
      kind: "email",
    },
    {
      label: "X",
      href: "https://x.com/divyanshuggrwl",
      kind: "x",
    },
  ] satisfies ProfileLink[],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "Open Source", href: "/open-source/" },
  { label: "Experience", href: "/experience/" },
];
