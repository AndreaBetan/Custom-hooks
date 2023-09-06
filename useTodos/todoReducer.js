

export const todoReducer = ( initialState = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            // Como el state es un array se regresa un [], con los elementos que ya tiene y el actio.payload sera la nueva tarea, lo cual se envia en el TodoApp
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            // El filter regresa un nuevo [] con todos los elementos que cumplan con la condicion definida
            // en este caso con todos los todo que tengan un id diferente al eliminado
            return initialState.filter( todo => todo.id !== action.payload );

        // Cambia el estado de la tarea de true a false y viceversa
        case '[TODO] Toggle Todo':
            // El map transforma un [] en otra cosa y regresa un nuevo []
            return initialState.map( todo => {
                // Si el todo.id es igual al que tenemos definido en la accion regresa un nuevo todo y niega ! el done (Si estaba en true lo pasa a false y viceversa)
                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 
                // Si no se cumple la condicion regresa el mismo todo
                return todo;
            });
    
        default:
            return initialState;
    }


}