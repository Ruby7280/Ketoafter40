interface RecipeCardProps {
  title: string
  prepTime: number
  servings: number
  carbs: number
}

export default function RecipeCard({ title, prepTime, servings, carbs }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px]">
      {/* Image Placeholder */}
      <div className="w-full aspect-video bg-gradient-to-br from-warm-cream to-brand-teal-light flex items-center justify-center">
        <svg className="w-12 h-12 text-brand-teal opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif-display text-lg font-bold text-charcoal mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Metadata */}
        <div className="flex gap-4 text-sm text-text-secondary mb-4">
          <span>{prepTime} min</span>
          <span>•</span>
          <span>Serves {servings}</span>
          <span>•</span>
          <span>{carbs}g carbs</span>
        </div>

        {/* CTA */}
        <button className="text-brand-teal font-semibold hover:text-brand-teal-dark transition inline-flex items-center gap-1">
          View Recipe →
        </button>
      </div>
    </div>
  )
}