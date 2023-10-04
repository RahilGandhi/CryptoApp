import React, { useState, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CoinContext } from '../context/SavedCoinContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedCoin = () => {
    const [coins, setcoins] = useState([])
    const { savedCoin, setSavedCoin } = useContext(CoinContext)

    const notify = () => toast.success("Coin removed from favorites");

    const handleRemove = (item) => {
        console.log(item)
        const updatedCoins = savedCoin.filter((coin) => coin.name !== item.name)
        setSavedCoin(updatedCoins)
    }
  return (
    <div >
        {savedCoin.length === 0 ? (
            <p className='px-2'>You don't have any coins saved. Please save a coin to add it to your watchlist.  <Link to='/' className='text-blue-500 underline'>Add Coins</Link></p>                    
        ) : (
            <table className='w-full border-collapse text-center '>
                <thead>
                    <tr className='border-b flex justify-around w-full items-center'>                        
                        <th>Coin</th>
                        <th>Price Change %</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {savedCoin.map((coin) => (
                        <tr key={coin.id} className='h-[60px] overflow-hidden flex justify-around  items-center'>
                            <td>
                                <Link to={`/coin/${coin.id}`}>
                                    <div className='flex items-center'>
                                        <img src={coin?.image} alt='/' className='w-8 mr-4 '/>
                                        <div>
                                            <p className='hidden sm:table-cell'>{coin?.name}</p>
                                            <p className='text-gray-500 text-left text-sm'>{coin?.symbol.toUpperCase()}</p>
                                        </div>    
                                    </div>    

                                </Link>
                            </td>
                            <td className='text-left '>{coin?.price_change_percentage_24h.toFixed(2)}</td>
                            <td  onClick={notify}>
                                <AiOutlineClose className='cursor-pointer' onClick={() => handleRemove(coin)}/> 
                                <ToastContainer autoClose={2000}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default SavedCoin