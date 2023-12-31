import React, { useState } from 'react'
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {
  const [searchText, setSearchText] = useState('')
  return (
    <div className='rounded-div mt-3'>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className='text-2xl font-bold my-2'>Search a coin</h1>
            <form>
                <input placeholder='Search a coin' type='text' onChange={(e) => setSearchText(e.target.value)} color='black' className='w-full bg-primary border border-input px-4 py-2 rounded-2xl '/>
            </form>
        </div>

        <table className='w-full border-collapse text-center p-2'>
            <thead>
                <tr className='border-b'>
                    <th></th>
                    <th className='px-4 hidden md:table-cell'>#</th>
                    <th className='text-left'>Coin</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden md:table-cell'>Mkt</th>
                </tr>
            </thead>
            <tbody>
                {coins.filter((value) => {
                    if(searchText === ''){
                        return value
                    } else if (
                        value.name.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                        return value;
                    }    
                }).map((coin) => (
                    <CoinItem key={coin.id} coin={coin}/>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default CoinSearch