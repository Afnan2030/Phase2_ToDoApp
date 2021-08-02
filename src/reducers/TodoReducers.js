export const TodoReducer=(state = { todos:[] }, action) => {
    switch (action.type){
        case "ADD_TODO":
            return {todos: action.peyload };

        case "REMOVE_TODO":
            return {todos: action.peyload };

           
        default:
           return state;
    }

};