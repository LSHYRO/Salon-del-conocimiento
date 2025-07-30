export default function TextCard ({ textCardSelection, prymaryColor, secondaryColor, thirdColor,title, subtitle, paragraph, textcenter }) {
  const defaultPrimaryColor = 'primary-bg-color third-text-color'
  const defaultSecondaryColor = 'third-bg-color secondary-text-color'
  const defaultThirdColor = 'secondary-bg-color third-text-color'
  const selected = prymaryColor ? defaultPrimaryColor : (secondaryColor ? defaultSecondaryColor : (thirdColor ? defaultThirdColor : ''))

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
