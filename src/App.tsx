import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import About from './About/About'
import Home from './Home/Home'
import Works from './Works/Works'
import Footer from './Footer/Footer'

function App() {
  const [page, setPage] = useState<string>('Home')

  const renderPage = (page: string) => {
    switch (page) {
      case 'About':
        return <About />
      case 'Works':
        return <Works />
      default:
        return <Home />
    }
  }
  return (
    <>
      <div className="h-full">
        <div className="flex pt-12 md:h-2/3 flex-col md:flex-row justify-center h-5/6">
          <Sidebar page={page} setPage={setPage} />
          {renderPage(page)}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
