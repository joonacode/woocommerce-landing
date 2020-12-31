import { useEffect, useState } from 'react'
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
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 250) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <div className='text-gray-800'>
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleSidebarSearch={toggleSidebarSearch}
        sidebarSearch={sidebarSearch}
        scrollNav={scrollNav}
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
      <div className='overflow-hidden lg:pb-40 md:pb-32'>
        <Advantages />
      </div>
      <Testimoni />
      <BeforeFooter />
      <Footer />
    </div>
  )
}

export default App
