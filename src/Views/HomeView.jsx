import ContactSection from '../Components/HomeViewComponents/Contact/ContactSection'
import GalerySection from '../Components/HomeViewComponents/Galery/GalerySection'
import { AboutSection } from '../Components/HomeViewComponents/About/AboutSection'
import { BannerSection } from '../Components/HomeViewComponents/Banner/BannerSection'
import ImportanceSection from '../Components/HomeViewComponents/Importance/ImportanceSection'
import PurposeSection from '../Components/HomeViewComponents/Purpose/PurposeSection'
import { AwardedSection } from '../Components/HomeViewComponents/SectionAwarded/AwardedSection'
import SelectionSection from '../Components/HomeViewComponents/selectionCriteria/selectionSection'
import MinutesSection from '../Components/Minutes/minutesSection'
import { PublicLayout } from '../Layouts/PublicLayout'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function HomeView () {

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <PublicLayout>
      <>
        <BannerSection />
        <AwardedSection id="AwardedSection"/>
        <AboutSection id="AboutSection"/>
        <PurposeSection id="PurposeSection"/>
        <ImportanceSection id="ImportanceSection"/>
        <SelectionSection id="SelectionSection"/>
        <GalerySection id="GalerySection"/>
        <MinutesSection/>
        <ContactSection/>
      </>
    </PublicLayout>
  )
}
