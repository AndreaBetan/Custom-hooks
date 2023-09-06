import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse (localStorage.getItem ('todos')) || []
}

export const useTodos = () => {

    // useReduceres un React Hook que te permite agregar un reductor a tu componente.
    // dispatch: disparador de la accion
    // init permite almacenamiento persistente en el localstorage asi se refresque el navegador
    const [todos, dispatchTodos] = useReducer(todoReducer, [], init);

    useEffect(() => {
    // De esta forma, almaceno los todos en el localstorage (pero se eliminan cada que se refresca la pantalla si no tengo el init del useReducer)
    // Ojo: Esto solo se puede realizar debio al useReducer
      localStorage.setItem ('todos', JSON.stringify( todos) )
    }, [todos])
    // Que se desencadene este efecto secundario cada que los todos cambien
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type:'[TODO] Add Todo',
            payload: todo
        }
        // Por medio del dispatch envio la action al todoReducer
        dispatchTodos (action)
    }

    // El parametro definido en el todoReducer para eliminar es el que debo enviar como parametro a esta fx
    const handleDeleteTodo = ( id ) => {
        dispatchTodos ({
            type:'[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodos ({
            type:'[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        // ver cuantas tareas tengo, si la necesito, solo es llamarla en el useTodos de la TodoApp
        todosCount: todos.length,
        // Con este filter puedo ver cuantas tareas tengo pendientes
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo
        
    }

}