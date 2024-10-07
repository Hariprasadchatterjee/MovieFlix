import { Pagination2 } from "./Component2/Pagination2"
// import { Pagination } from "./Components/sortProject/Pagination"
import { SharedProvider } from "./context/SharedData"

export const App=()=>{

  return (
    <>
    <SharedProvider>
        <Pagination2/>
    </SharedProvider>
     

    </>
  )

}