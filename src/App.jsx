import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import TotalCases from './components/totalCases'

const App = () => {
  const [data, setData] = useState({})

  const getCovidData = () => {
    return axios.get('https://disease.sh/v3/covid-19/all')
      .then(response => {
        setData(response.data)
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
      <TotalCases data={data}/>
    </>
  )
}

export default App