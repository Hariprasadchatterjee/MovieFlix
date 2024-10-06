export const reducer=(state,action)=>{

  switch (action.type) {
    case "set_loading":
      return{
        ...state,isLoading:true,
      }

    case "get_stories":
     return {
      ...state,
      isLoading:false,
      hits:action.payLoad.apiHits,
      nbPages:action.payLoad.apiNbPages,
     }
     case "remove" :
      return{
        ...state,
        hits:state.hits.filter( (curClickedPost)=>curClickedPost.objectID!==action.payLoad)
      }
     case "search" :
      return{
        ...state,
        query:action.payLoad,
      
      }
     case "goPrev" :
      return{
        ...state,
      
        pages: (state.pages<=0)?state.Pages=0 : state.pages-1,
      }
     case "goNext" :
      return{
        ...state,
       
       pages: (state.nbPages>state.pages+1)? state.pages+1 : state.Pages=0,
      
      }

  
    default:
      break;
  }

  return state;

}