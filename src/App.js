import React from 'react'
import CityList from './components/CityList'
import { cities } from './helpers/cities'


const App = () => {
  return (
    <div>
      <CityList cities={cities}/>
    </div>
  )
}


export default App
