import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {FaRegHeart} from 'react-icons/fa';
import {AiOutlineArrowUp, AiOutlineArrowDown, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { CoinContext } from '../context/SavedCoinContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoinItem = ({coin}) => {
    const { savedCoin, setSavedCoin } = useContext(CoinContext)
    const notify = () => toast.success("Coin added to favorites");

  return (
    <tr className='h-[80px] border-b overflow-hidden'>
                        <td className='cursor-pointer' onClick={notify}>
                            <AiOutlineStar  color='black' fill='black' onClick={() => setSavedCoin([...savedCoin, coin])} />
                            <ToastContainer autoClose={2000}/>
                        </td>
                        <td className='hidden md:table-cell'>{coin.market_cap_rank}</td>
                        <td>
                            <Link to={`/coin/${coin.id}`}>
                                <div className='flex items-center'> 
                                    <img className='w-6 mr-2 rounded-full ' src={coin.image} alt={coin.id}/>
                                    <p className='hidden sm:table-cell'>{coin.name}</p>
                                </div>
                            </Link>
                            
                        </td>
                        <td>{coin.symbol.toUpperCase()}</td>
                        <td>{coin.current_price.toLocaleString()}</td>
                        <td>{coin.price_change_percentage_24h > 0 ? 
                            (<p className='text-green-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>) 
                            : 
                            (<p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}
                        </td>
                        <td className='w-[180px] hidden md:table-cell '>{coin.total_volume.toLocaleString()}</td>
                        <td className='w-[180px] hidden md:table-cell'>{coin.market_cap.toLocaleString()}</td>                      
                    </tr>
  )
}

export default CoinItem