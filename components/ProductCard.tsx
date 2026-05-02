import Link from "next/link"

export interface ProductProps {
  name: string
  author: string
  description: string
  githubUrl: string
  price: number | "free"
  category: string
  stars?: number
}

export default function ProductCard({ name, author, description, githubUrl, price, category, stars }: ProductProps) {
  return (
    <div className="bg-ios-card border border-ios-border rounded-ios-lg p-5 flex flex-col gap-3 hover:border-ios-blue/50 transition-all duration-200 hover:scale-[1.01]">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-medium text-ios-blue uppercase tracking-widest">{category}</span>
          <h3 className="text-ios-label font-semibold text-base mt-0.5 truncate">{name}</h3>
          <p className="text-ios-gray text-xs mt-0.5">by {author}</p>
        </div>
        <div className="text-right shrink-0">
          {price === "free" ? (
            <span className="bg-ios-green/20 text-ios-green text-xs font-semibold px-2.5 py-1 rounded-full">FREE</span>
          ) : (
            <span className="bg-ios-blue/20 text-ios-blue text-xs font-semibold px-2.5 py-1 rounded-full">${price}</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-ios-sublabel/70 text-sm leading-relaxed line-clamp-2">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-ios-border">
        {stars !== undefined && (
          <span className="text-ios-gray text-xs flex items-center gap-1">
            <span className="text-yellow-400">★</span> {stars.toLocaleString()}
          </span>
        )}
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs font-medium text-ios-blue hover:text-white transition-colors bg-ios-blue/10 hover:bg-ios-blue px-3 py-1.5 rounded-full"
        >
          View →
        </Link>
      </div>
    </div>
  )
}
