import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {
  const { gif, loading, fetchData } = useGif()

  return (
    <div className='w-1/2 h-[450px] bg-green-400 rounded-lg border-2 border-dashed 
    border-black flex flex-col items-center gap-y-5'>
      <h2 className='text-2xl underline font-bold uppercase'>
        A Random GIF
      </h2>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="gif" width={450} className=' max-h-[66%]' />)
      }

      <button className='w-9/12 bg-[#ffffffa2] py-3 rounded-lg text-xl'
        onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Random