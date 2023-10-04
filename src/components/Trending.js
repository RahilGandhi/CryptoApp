import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Trending = () => {
    const url = 'https://api.coingecko.com/api/v3/search/trending';
    const [trending, setTrending] = useState([]) 
    useEffect(() => {
        axios.get(url).then((response) => {
            setTrending(response.data.coins)
            console.log(response.data.coins)
        })
    }, [url])
  return (
    <div className='rounded-div my-12 py-8 text-primary'>
        <h1 className='ml-[6%] md:ml-[4%] mb-5 text-2xl font-bold'>Trending Coins</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {trending.map((coin, i) => (
                <div className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300' key={i}>
                    <div className='flex  w-full items-center justify-between'>
                        <div className='flex'>
                            <img className='mr-2 rounded-full' src={coin.item.small} alt='/'/>
                            <div>
                                <p className='font-bold'><Link to={`/coin/${coin.item.id}`}>{coin.item.name}</Link></p>
                                <p>{coin.item.symbol}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-4 mr-2' src='https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579' alt='/'/>
                            <p>{coin.item.price_btc.toFixed(7)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Trending