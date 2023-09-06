
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        // En este esta variable voy a almacenar:
        // 1. La data de la url
        data: null,
        // 2. Lo inicio en true ya que cuando se crea la peticion estoy cargando y cuando ya se ejecuta el fetch pasa a false
        isLoading: true,
        //3. Para identificar si hay un error
        hasError: true
    })

    const getFetch = async () => {

        // setState({
        //     ...state,
        //     isLoading: true,
        // });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }


    useEffect(() => {
        getFetch()
    }, [url])
    // Se ejecutara cada que cambie la url

    return {
        // Puedo retornar state o sus propiedades asi, esto es util por si en algun momento se quiere editar o expandir:
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
