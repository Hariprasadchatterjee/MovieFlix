import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
const API_DATA= `https://dummyjson.com/products?limit=190`
export const SharedPagination= createContext()

const initialState={
  hit:[],
  Loading:true,
  page:1,
}

export const SharedProvider=({children})=>{
  const [state,dispatch]=useReducer(reducer,initialState)
 
    const getApiData= async (url)=>{
      try {
        const ress = await fetch(url)
      const data = await ress.json();
      // console.log(data);
          state.Loading=false
            dispatch({
              type:"setData",
              payLoad:data.products,
              })
    }
       catch (error) {
        console.log(error);
        
      }
      
    }
    const handlePaging=(id)=>{
        dispatch({
          type:"paging",
          payLoad:id
        })
    }

    


  useEffect( ()=>{
    getApiData(API_DATA)
  },[])
 
  return <SharedPagination.Provider value={{...state,handlePaging}}>{children}</SharedPagination.Provider>
  }

export const useCustomPr=()=>{
  return useContext(SharedPagination)
}
