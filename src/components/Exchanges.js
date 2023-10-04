import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Exchanges = () => {
    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10';
    const [exchanges, setExchanges] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            setExchanges(response.data)
            console.log(response.data)
        })
    }, [url])

  return (
    <div className='rounded-div my-12 py-8 text-primary '>
        <h1 className='ml-[6%] md:ml-[4%] mb-5 text-2xl font-bold'>Exchanges</h1>


        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'> 
        {exchanges.map((exchange) => (
            <div key={exchange.id} className='rounded-div p-4 hover:scale-105 ease-in-out duration-300'>
                <div className='flex items-center justify-between'>
                   <div className='flex gap-2 items-center '>
                        <div>
                            <img src={exchange.image} className='mr-2 rounded-full'/>  
                        </div>
                        <div className='text-lg font-semibold'><a href={exchange.url}>{exchange.name}</a></div>
                   </div>

                   <div className='flex'>
                        <div>
                            <img src='https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579' className='w-4 mr-2 mt-1'/>
                        </div>
                        <div>{exchange.trade_volume_24h_btc.toFixed(5)}</div>     
                   </div>  
                </div>                             
            </div>
        ))}
        </div>
    </div>
  )
}

export default Exchanges