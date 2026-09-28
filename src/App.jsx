import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import OpenSource from './components/OpenSource'
import Estimator from './components/Estimator'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-200 selection:bg-[#0071E3]/20 selection:text-[#0071E3]">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <Services />
        <CaseStudy />
        <OpenSource />
        <Estimator />
        <Workflow />
      </main>
      <Footer />
    </div>
  )
}


export default App

