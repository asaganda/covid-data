import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WorldwideData from './components/CovidData'
import UnitedStatesData from './components/CovidData'
import Navbar from './components/Navbar'

const App = () => {
  const [worldCovidData, setWorldCovidData] = useState({})
  const [unitedCovidData, setUnitedCovidData] = useState({})
  const [page, setPage] = useState(1)

  const getWorldCovidData = () => {
    return axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        // console.log(response.data)
        const allowedKeys = ['cases', 'deaths', 'critical', 'recovered', 'population'];
        const filteredWorldData = Object.keys(response.data)
          .filter(key => allowedKeys.includes(key))
          .reduce((obj, key) => {
            obj[key] = response.data[key];
            return obj;
          }, {})
        // console.log(filteredData)
        setWorldCovidData(filteredWorldData)
      })
      .catch(error => console.log(error))
  }
  
  const getUSCovidData = () => {
    return axios.get('https://disease.sh/v3/covid-19/countries/usa')
      .then(response => {
        console.log(response.data)
        const allowedKeys = ['cases', 'deaths', 'critical', 'recovered', 'population'];
        const filteredUnitedData = Object.keys(response.data)
          .filter(key => allowedKeys.includes(key))
          .reduce((obj, key) => {
            obj[key] = response.data[key];
            return obj;
          }, {})
        setUnitedCovidData(filteredUnitedData)
      })
      .catch(error => console.log(error))
  }
  
  useEffect(() => {
    getWorldCovidData()
    getUSCovidData()
  }, [])
  
  return (
    <>
      <Navbar setPage={setPage} data={unitedCovidData}/>
      { page === 1 ? <WorldwideData data={worldCovidData}/> : <></> }
      { page === 2 ? <UnitedStatesData data={unitedCovidData}/> : <></> }
    </>
  )
}

export default App
