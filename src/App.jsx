
import './App.css'
import { Suspense } from 'react'
import Bottles from './components/Bottles/Bottles'


function App() {

  const bottlesPromise = fetch('/bottles.json ')
  .then(res => res.json());

  return (
    <>

      <h1>Favourite water Bottles</h1>

      <Suspense fallback="Loading bottles...">
        <Bottles  bottlesPromise={bottlesPromise}/>
      </Suspense>


    </>
  )
}

export default App
