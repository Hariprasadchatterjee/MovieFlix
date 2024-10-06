import { useTimeSaver } from "../Context/ApiDataProvider"


export const Pagination = () => {
  const {pages,nbPages,getPrevPage,getNextPage} =useTimeSaver()
  return (
    <>
    <section className="flex items-center justify-center gap-8 my-4">
      <div className="btn1">
        <button onClick={()=>getPrevPage()} className="px-4 py-2 font-bold text-white bg-black rounded-sm">Prev</button>
      </div>
      <div className="btn1">
        <p><span>{pages+1}</span> of <span>{nbPages}</span></p>
      </div>
      <div className="btn1">
        <button onClick={()=>getNextPage()} className="px-4 py-2 font-bold text-white bg-black rounded-sm">Next</button>
      </div>
    </section>
    </>
  )
}
