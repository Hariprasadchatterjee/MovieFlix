
import { TemplatePr } from "../Components/TemplatePr"
import { useCustomPr } from "../context/SharedData"
import { Page } from "./Page"


export const Pagination2 = () => {
  const {hit,page} =useCustomPr()
  
  return (
      <>
      <section>
    <div className="container max-w-[1400px] mx-auto ">
      <ul className="grid grid-cols-4 gap-4">
          {
            hit.slice(page*10-10,page*10) .map(( curProducts)=>{
              console.log(curProducts);
              
              return <TemplatePr data={curProducts} key={curProducts.id} />
            })
          }
          </ul>
          <Page/>
          </div>
          </section>
      </>
  )
}
