import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'
import Exchanges from '../components/Exchanges'
import { TickerTape } from "react-ts-tradingview-widgets";

const Home = ({coins}) => {
  return (
    <div>      
      <CoinSearch coins={coins}/>

      <Trending/>
      <Exchanges/>
    </div>
  )
}

export default Home