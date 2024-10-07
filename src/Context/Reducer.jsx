

export const reducer = (state,action) => {
  switch (action.type) {
    case "setData" :
     return {...state,hit:action.payLoad}

    case "paging" :
     return {...state,
      page:(action.payLoad>0 && action.payLoad<=10)? action.payLoad:state.page=1
    }
  
    default:
      break;
  }
  return state;
}

