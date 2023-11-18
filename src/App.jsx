import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TotalCases from './components/totalCases'
import TodayCases from './components/TodayCases'
import Deaths from './components/Deaths'

const App = () => {
  const [covidData, setCovidData] = useState({})

  const getCovidData = () => {
    return axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        setCovidData(response.data)
      })
      .catch(error => console.log(error))
  }
  
  useEffect(() => {
    getCovidData()
  }, [])
  
  return (
    <>
      <p className="read-the-docs">
        covid data
      </p>
      <TotalCases data={covidData}/>
      <TodayCases data={covidData}/>
      <Deaths data={covidData}/>
    </>
  )
}

export default App
