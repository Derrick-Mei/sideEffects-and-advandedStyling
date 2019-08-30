import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
// import array from './data'
// import Author from './components/Author'
// import Image from './components/Image'
import Card from './components/Card'
import Menu from './components/Menu'
import Carousel from './components/Carousel'

import Weather from './components/Weather'

import ChuckNorris from './components/ChuckNorris'


const url = 'https://picsum.photos/v2/list';
const chuck = 'https://api.chucknorris.io/jokes/random'
function App() {

  const [data, setData] = useState([])
  // const [weatherData, setWeatherData] = useState([])
  const [chuckJoke, setChuckJoke] = useState('')

  // useEffect(() => {
  //   axios.get('https://api.weather.gov/alerts')
  //   .then(response => {
  //     setWeatherData(response.data.features)
  //   })
  //   .catch(err => console.log(err))
  // }, [])

  useEffect(()=> {

    axios.get(url)
    .then(response => {
      console.log("Data: ", response.data)
      setData(response.data)
    })
    .catch(err => console.log(err))
  }, [] )

  useEffect(() => {
    axios.get(chuck)
    .then(response => {
      console.log("=====================", response.data)
      setChuckJoke(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Menu />
      <Carousel data={data}/>

      <ChuckNorris icon_url={chuckJoke.icon_url} value={chuckJoke.value} created_at={chuckJoke.created_at}/>

      {/* {weatherData.length ? weatherData.map(item => {
        console.log(item)
        return <Weather headline={item.properties.headline} />
      }) : null} */}

      {data.map(item => {
        // console.log(item)
        return (
          <div>
            <Card author={item.author} url={item.download_url} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
