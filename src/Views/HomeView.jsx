import ContactSection from '../Components/Contact/ContactSection'
import GalerySection from '../Components/Galery/GalerySection'
import { AboutSection } from '../Components/HomeViewComponents/About/AboutSection'
import { BannerSection } from '../Components/HomeViewComponents/Banner/BannerSection'
import ImportanceSection from '../Components/HomeViewComponents/Importance/ImportanceSection'
import PurposeSection from '../Components/HomeViewComponents/Purpose/PurposeSection'
import { AwardedSection } from '../Components/HomeViewComponents/SectionAwarded/AwardedSection'
import SelectionSection from '../Components/HomeViewComponents/selectionCriteria/selectionSection'
import MinutesSection from '../Components/Minutes/minutesSection'
import { PublicLayout } from '../Layouts/PublicLayout'

export function HomeView () {
  return (
    <PublicLayout>
      <>
        <BannerSection />
        <AwardedSection />
        <AboutSection />
        <PurposeSection />
        <ImportanceSection />
        <SelectionSection />
        <GalerySection />
        <MinutesSection />
        <ContactSection />
      </>
    </PublicLayout>
  )
}
