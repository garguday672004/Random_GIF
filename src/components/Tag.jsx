import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag(){

  const [tag,setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] justify-between mb-[15px]">

      <div className="font-semibold text-3xl uppercase underline">{`RANDOM ${tag} GIF`}</div>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gif' width={450}/>)
      }

      <input
        type="text"
        className="w-11/12 py-3 bg-white rounded-md font-semibold text-xl text-align-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button onClick={() => fetchData(tag)} className="w-11/12 py-3 bg-blue-200 rounded-md mb-[15px] font-semibold text-xl">
        GENERATE
      </button>

    </div>
  )
}

export default Tag;