
import './App.css'
import ComparisonGrid from './components/ComparisonGrid'
import HeroSection from './components/HeroSection'
import Layout from './components/layout/Layout'
import QuestionSection from './components/QuestionSection'
import RelatableArticle from './components/RelatableArticle'

function App() {
  
  return (
    <>
    <Layout>
    <HeroSection/>
    <ComparisonGrid/>
    <RelatableArticle/>
    <QuestionSection/>
    </Layout>
    </>
  )
}

export default App
