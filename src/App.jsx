import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WorldwideData from './components/WorldwideData'

const App = () => {
  const [covidData, setCovidData] = useState({})

  const getCovidData = () => {
    return axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        console.log(response.data)
        const allowedKeys = ['cases', 'deaths', 'critical', 'recovered', 'population'];
        const filteredData = Object.keys(response.data)
          .filter(key => allowedKeys.includes(key))
          .reduce((obj, key) => {
            obj[key] = response.data[key];
            return obj;
          }, {})
        console.log(filteredData)
        setCovidData(response.data)
      })
      .catch(error => console.log(error))
  }
  
  useEffect(() => {
    getCovidData()
  }, [])
  
  return (
    <>
      <p>
        covid data
      </p>
      <WorldwideData data={covidData}/>
    </>
  )
}

export default App
