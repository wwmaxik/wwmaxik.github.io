import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import Estimator from './components/Estimator'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-200 selection:bg-[#0071E3]/20 selection:text-[#0071E3]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Estimator />
        <Workflow />
      </main>
      <Footer />
    </div>
  )
}

export default App
