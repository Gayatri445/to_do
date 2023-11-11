export const addTodo = (data)=>{       //data is similar to argument that is passed to onClick addTodo
    return {
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data,
        }
    }
}

export const deleteTodo = (id)=>{
    return {
        type:"DELETE_TODO",
        id                               //we can pass it through payload or as it is
    }
}

export const removeAllTodo = ()=>{
    return {
        type:"REMOVE_ALL_TODO"
    }
}