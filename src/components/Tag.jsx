import { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('')
  const { gif, loading, fetchData } = useGif(tag)

  return (
    <div className='w-1/2 h-[450px] bg-blue-400 rounded-lg border-2 border-dashed 
    border-black flex flex-col items-center gap-y-5'>
      <h2 className='text-2xl underline font-bold uppercase'>
        Random {tag} GIF
      </h2>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="gif" width={450} className=' max-h-[55%]' />)
      }

      <input
        type="text"
        placeholder='Search by Tags'
        className=' w-9/12 py-2 px-2 rounded-lg'
        onChange={(event) =>
          setTag(event.target.value)
        }
        value={tag}
      />

      <button className='w-9/12 bg-[#ffffffa2] py-3 rounded-lg text-xl'
        onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Tag