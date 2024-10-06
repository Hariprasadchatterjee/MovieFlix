import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

export const ApiDataProvider=createContext();
const MY_API=`https://hn.algolia.com/api/v1/search?`;

const intialState={
  isLoading:true,
  query:"react",
  nbPages:0,
  pages:0,
  hits:[],
}

export const Delybary=({children})=>{
  const [state,dispatch]=useReducer(reducer,intialState)
 
  const getStoriesData= async (url)=>{
    dispatch({
      type:"set_loading"
    })
    try {
      const res=await fetch(url)
      const data=await res.json();
      console.log(data);
      dispatch({
        type:"get_stories",
        payLoad:{
          apiHits:data.hits,
          apiNbPages:data.nbPages,
        }
      })
   
      
   
    } catch (error) {
      console.log(error);
      
    }
      
  }
  const handleRemove=(id)=>{
    dispatch({
      type:"remove",
      payLoad:id,
    })
  }
  const handleSearch=(val)=>{
    dispatch({
      type:"search",
      payLoad:val,
    })
    
  }
  const getPrevPage=()=>{
    dispatch({
      type:"goPrev"
    })
  }
  const getNextPage=()=>{
    dispatch({
      type:"goNext"
    })
  }

  useEffect( ()=>{
    getStoriesData(`${MY_API}query=${state.query}&page=${state.pages}`)
  },[state.query,state.pages])

  return <ApiDataProvider.Provider value={{...state,handleRemove,handleSearch,getPrevPage,getNextPage}}>{children}</ApiDataProvider.Provider>
}

export const useTimeSaver=()=>{
  return useContext(ApiDataProvider)
}