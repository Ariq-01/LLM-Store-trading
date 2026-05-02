"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import { products, categories } from "@/data/products"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [search, setSearch] = useState("")

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-ios-bg">
      {/* Nav */}
      <nav className="glass sticky top-0 z-50 border-b border-ios-border">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-ios-label font-semibold text-lg tracking-tight">LLM Store</span>
          <span className="text-ios-gray text-xs">{products.length} tools</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-ios-label tracking-tight mb-3">
            Discover LLM Tools
          </h1>
          <p className="text-ios-gray text-base max-w-md mx-auto">
            The best open-source LLM research, agents, and frameworks — all in one place.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-xl mx-auto">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ios-gray text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-ios-surface border border-ios-border rounded-ios pl-9 pr-4 py-2.5 text-ios-label text-sm placeholder:text-ios-gray focus:outline-none focus:border-ios-blue transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-ios-blue text-white"
                  : "bg-ios-surface text-ios-gray border border-ios-border hover:border-ios-blue/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-ios-gray">
            <p className="text-4xl mb-3">🔭</p>
            <p className="text-sm">No tools found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-ios-border mt-16 py-6 text-center text-ios-gray text-xs">
        LLM Store — Open source tools for everyone
      </footer>
    </div>
  )
}
