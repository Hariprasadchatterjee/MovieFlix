import { useEffect, useState } from "react"
import { TemplatePr } from "../TemplatePr"


const API_DATA= `https://dummyjson.com/products?limit=100`
export const Pagination = () => {

  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(1);

  const getProducts= async (url) =>{
    try {
      const res=await fetch(url)
      const data=await res.json()
    // console.log(data);
    setProducts(data.products)
    // console.log(data)
    } catch (error) {
      console.log(error);
      
    }
    
  }
 
  const selectPageHandler=(val)=>{
    if (products.length/10>=val && 0<val) {
      
      setPage( val)
    }
  }


  useEffect( ()=>{
    getProducts(API_DATA)
  },[])
  return (
   <>
   <section>
    <div className="container max-w-[1400px] mx-auto ">
      <ul className="grid grid-cols-4 gap-4">
        
   {
    
    products.length>0 &&
    products.slice(page * 10 - 10,page * 10).map( (curVal)=>{
      // console.log(curVal);
      
      return <TemplatePr key={curVal.id} data={curVal} productLength={products.length}/>
    
    })
   }
    </ul>
    <div className={` gap-4 mt-5 mb-10 cursor-pointer w-[45%] mx-auto overflow-x-auto`}>
    <span onClick={()=>selectPageHandler(page-1)} className={`inline-block p-2 px-4 border-2 border-black ${page==1?"hidden":""}`}>◀</span>
   {
   
    [...Array(products.length/10)].map( (val,i)=>{
     return <span onClick={()=>selectPageHandler(i+1)} className={`inline-block p-2 px-4 border-2 border-black ${page==i+1?"bg-slate-500":""}`} key={i}>{i+1}</span>
      
    })
  }
  <span onClick={()=>selectPageHandler(page+1)} className={`inline-block p-2 px-4 border-2 border-black ${page==10?"hidden":""}`}>▶</span>
  </div>
   
   
    </div>
    </section>
   </>
  )
}
