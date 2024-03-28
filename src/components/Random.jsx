import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random(){

  const {gif, loading, fetchData} = useGif();

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] justify-between">

      <div className="font-semibold text-3xl underline">A RANDOM GIF</div>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gif' width={450}/>)
      }

      <button onClick={() => fetchData()} className="w-11/12 py-3 bg-green-200 rounded-md mb-[15px] font-semibold text-xl">
        GENERATE
      </button>

    </div>
  )
}

export default Random;