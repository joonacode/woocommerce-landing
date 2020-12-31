import { useState } from 'react'
import {
  Advantages,
  BeforeFooter,
  Features,
  Footer,
  Hero,
  Navbar,
  Sidebar,
  Testimoni,
} from './components'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const [sidebarSearch, setSidebarSearch] = useState(false)
  const toggleSidebar = () => {
    setSidebar(!sidebar)
    if (sidebar) {
      setSidebarSearch(false)
    }
  }
  const toggleSidebarSearch = () => {
    setSidebar(!sidebar)
    setSidebarSearch(!sidebarSearch)
  }
  const showSidebarSearch = () => {
    setSidebarSearch(true)
  }

  return (
    <div className='text-gray-800 overflow-hidden'>
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleSidebarSearch={toggleSidebarSearch}
        sidebarSearch={sidebarSearch}
      />
      {sidebar && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          sidebarSearch={sidebarSearch}
          toggleSidebarSearch={toggleSidebarSearch}
          showSidebar={sidebar}
          showSidebarSearch={showSidebarSearch}
        />
      )}
      <Hero />
      <Features />
      <Advantages />
      <Testimoni />
      <BeforeFooter />
      <Footer />
    </div>
  )
}

export default App
