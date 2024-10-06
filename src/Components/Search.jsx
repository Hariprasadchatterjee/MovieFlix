import { useTimeSaver } from "../Context/ApiDataProvider"


export const Search = () => {
  const {query,handleSearch} = useTimeSaver()

  return (
   <>
   <form action="">
    <div className="w-[30%] mx-auto">
    <input type="search" name="" id="" className="border-2 border-black rounded-xl w-[100%]
    py-4 px-8 outline-none" placeholder="Search here" value={query} onChange={(e)=>handleSearch(e.target.value)}/>
    </div>
   </form>
   </>
  )
}
