import { useCustomPr } from "../context/SharedData"

export const Page = () => {
  const {hit,handlePaging,page} =useCustomPr()
  console.log(hit.length);
  
  return (
    <>
        <div className={` gap-4 mt-5 mb-10 cursor-pointer w-[45%] mx-auto overflow-x-auto`}>
    <span onClick={()=>handlePaging(page-1)}  className={`inline-block p-2 px-4 border-2 border-black ${page==1?"hidden":"block"}`}>◀</span>

   {
    [...Array(hit.length/10)].map( (curPage,i)=>{
      return <span onClick={()=>handlePaging(i+1)} key={i+1} className={`inline-block p-2 px-4 border-2 border-black ${page==i+1?"bg-slate-500":""}`}>{i+1}</span>
    })
   }
 
  
  <span onClick={()=>handlePaging(page+1)}  className={`inline-block p-2 px-4 border-2 border-black `}>▶</span>
  </div>
    </>

  )
}
