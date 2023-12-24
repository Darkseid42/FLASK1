import { featuresList } from '@/constants/XpanFeatures'
import HeroSection from '@/components/homepage/HeroSection'
import Navbar from '@/components/homepage/Navbar'
import ActionLearn from '@/components/homepage/ActionLearn'
import Footer from '@/components/homepage/Footer'
import GetStarted from '@/components/homepage/GetStarted'
import ExchangeList from '@/components/homepage/ExchangeList'
import { exchangeList } from '@/constants/Exchanges'
import Features from '@/components/homepage/Features'
import Testimonials from '@/components/homepage/Testimonials'
import Statistics from '@/components/homepage/Statistics'


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features featuresList={featuresList} />
      <ActionLearn />
      <ExchangeList exchangeList={exchangeList} />
      <GetStarted />
      <Testimonials />
      <Footer />
    </>

  )
}
