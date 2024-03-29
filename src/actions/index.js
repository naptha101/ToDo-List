export const Add=(data)=>{
    console.log(data);
    return {
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const Delete=(data)=>{
    console.log(data);
    return {
        type:"DELETE_TODO",
        payload:{
            id:data
        }
    }
}
export const Remove=()=>{
    return {
        type:"REMOVE_TODO"
    }
}