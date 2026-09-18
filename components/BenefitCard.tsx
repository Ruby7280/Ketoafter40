interface BenefitCardProps {
  title: string
  description: string
  icon: string
}

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg border border-border-light hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-serif-display text-heading-sm text-charcoal mb-3">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}