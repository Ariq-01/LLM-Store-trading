import { ProductProps } from "@/components/ProductCard"

// ─────────────────────────────────────────────
//  ADD NEW PRODUCTS HERE
//  Just paste: name, author, description, githubUrl, price, category, stars
// ─────────────────────────────────────────────
export const products: ProductProps[] = [
  {
    name: "GPT-Researcher",
    author: "assafelovic",
    description: "Autonomous agent designed for comprehensive online research on any given topic.",
    githubUrl: "https://github.com/assafelovic/gpt-researcher",
    price: "free",
    category: "Research Agent",
    stars: 16800,
  },
  {
    name: "LangChain",
    author: "langchain-ai",
    description: "Framework for developing applications powered by language models with chains and agents.",
    githubUrl: "https://github.com/langchain-ai/langchain",
    price: "free",
    category: "Framework",
    stars: 92000,
  },
  {
    name: "AutoGPT",
    author: "Significant-Gravitas",
    description: "An experimental open-source attempt to make GPT-4 fully autonomous.",
    githubUrl: "https://github.com/Significant-Gravitas/AutoGPT",
    price: "free",
    category: "Autonomous Agent",
    stars: 167000,
  },
  {
    name: "PrivateGPT",
    author: "zylon-ai",
    description: "Interact with your documents using LLMs, 100% privately, no data leaves your execution environment.",
    githubUrl: "https://github.com/zylon-ai/private-gpt",
    price: "free",
    category: "Privacy",
    stars: 54000,
  },
  {
    name: "Ollama",
    author: "ollama",
    description: "Get up and running with large language models locally on your machine.",
    githubUrl: "https://github.com/ollama/ollama",
    price: "free",
    category: "Local LLM",
    stars: 98000,
  },
  {
    name: "CrewAI",
    author: "crewAIInc",
    description: "Framework for orchestrating role-playing, autonomous AI agents working together.",
    githubUrl: "https://github.com/crewAIInc/crewAI",
    price: "free",
    category: "Multi-Agent",
    stars: 24000,
  },
]

export const categories = Array.from(new Set(products.map((p) => p.category)))
