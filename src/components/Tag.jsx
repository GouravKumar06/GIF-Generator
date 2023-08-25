import React, {useState} from 'react';
import Spinner from './Spinner';
import { useGif } from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  const [tag,setTag] = useState('car');

  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }
  
  function changehandler(event){
    setTag(event.target.value)
  }


  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-blacks
     flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading? <Spinner/> :<img src={gif} alt="img" width="450"/>
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changehandler}
        value={tag}
      />

      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>
    </div>
  )
}