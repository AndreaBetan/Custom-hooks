import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm )

    // Para obtener el valor need el e.tarjet.value, pero si se desestructura el evento puedo obtener el tarjet
    const onInputChange = ({ target }) => {
        // Al desestructurar el tarjet puedo obtener el name del input y el value, este name debera ser unico por input
        const { name, value } = target;
        setFormState({
            ...formState,
            // Ahora debo indicar que voy a cambiar la propiedad name y que sera igual al nuevo valor
            [name]: value
        });
    }
    
    // Funcion para resetear el formulario a su valor inicial
    const onResetForm = () => {
            setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm 
    }
}