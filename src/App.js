import {
  Advantages,
  BeforeFooter,
  Features,
  Footer,
  Hero,
  Navbar,
  Testimoni,
} from './components'

function App() {
  return (
    <div className='text-gray-800 overflow-hidden'>
      <Navbar />
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
