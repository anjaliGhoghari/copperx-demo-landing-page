
import './App.css'
import ComparisonGrid from './components/ComparisonGrid'
import FAQSection from './components/FAQSection'
import GetStartedSection from './components/GetStartedSection'
import HeroSection from './components/HeroSection'
import Layout from './components/layout/Layout'
import RelatableArticle from './components/RelatableArticle'

function App() {
  
  return (
    <>
    <Layout>
    <HeroSection/>
    <ComparisonGrid/>
    <RelatableArticle/>
    <FAQSection/>
    <GetStartedSection/>
    </Layout>
    </>
  )
}

export default App
