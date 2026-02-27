
import './App.css'
import { Suspense, useMemo } from 'react'
import Bottles from './components/Bottles/Bottles'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';


function App() {

  const bottlesPromise = useMemo(() => fetch('/bottles.json')
  .then(res => res.json()), []);

  return (
    <>

      <Navbar />

      <Suspense fallback="Loading bottles...">
        <Bottles  bottlesPromise={bottlesPromise}/>
      </Suspense>
      <Footer />

    </>
    
  )
}

export default App
