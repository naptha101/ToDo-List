
const initialData={
    list:[]
}
const todoreducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":{
            const {id,data}=action.payload;
            return {
                ...state,list:[
                    ...state.list,{
                        id:id,
                        data:data
                    }
                ]
            };
        };
          case "DELETE_TODO":{
      const {id}=action.payload;
          return{
            ...state,list:state.list.filter((item)=>item.id!=id)
          }
    };
    case "REMOVE_TODO":{
        return {
            ...state,list:[]
        }
    };

            default: return state;
    }
}
export default todoreducer