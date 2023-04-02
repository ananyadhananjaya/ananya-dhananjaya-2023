import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import About from './About/About'
import Home from './Home/Home'
import Works from './Works/Works'

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
      <div className="h-screen">
        <div className="flex items-center md:h-2/3 flex-col md:flex-row justify-center">
          <Sidebar page={page} setPage={setPage} />
          {renderPage(page)}
        </div>
      </div>
    </>
  )
}

export default App
