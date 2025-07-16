export default function TextCard ({ prymaryColor, secondaryColor, title, subtitle, paragraph, textcenter }) {
  const defaultPrimaryColor = 'primary-bg-color third-text-color'
  const defaultSecondaryColor = 'third-bg-color secondary-text-color'
  const selected = prymaryColor ? defaultPrimaryColor : (secondaryColor ? defaultSecondaryColor : '')

  const className = ` text-card
    ${textcenter ? 'text-center' : 'text-left'}
    ${selected}
  `

  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {paragraph && <p>{paragraph}</p>}
    </div>
  )
}
