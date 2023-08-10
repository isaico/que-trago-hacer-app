import axios from 'axios';
import CocktailsContext from './CocktailsContext';
import CocktailsReducer from './CocktailsReducer';
import {
    GET_COCKTAILS,
    UPDATE_USER_INGREDIENTS,
    DELETE_USER_INGREDIENT,
    SHOW_ALL_COCKTAILS,
} from './types';

import React, { useReducer } from 'react';

const CocktailState = (props) => {
    //conecto la url con axios, utilizo reactQuery y Json server
    const respApi = axios.create({ baseURL: 'https://que-trago-hacer-app.vercel.app' });
    //creo el estado inicial
    const initialState = {
        cocktails: [],
        userIngredients: [],
        isButtonClicked: false,
    };

    //dispatch escucha los cambios, initialState el valor de los datos iniciales
    const [state, dispatch] = useReducer(CocktailsReducer, initialState);

    //funcion para obtener productos
    const getCocktails = async () => {
        try {
            const res = await respApi.get('/cocktails');
            const data = res.data;
            dispatch({ type: GET_COCKTAILS, payload: data });
        } catch (error) {
            alert('Error al cargar los datos: intenta mas tarde!');
        }
    };

    const updateUserIngredients = (data) => {
        dispatch({
            type: UPDATE_USER_INGREDIENTS,
            payload: data,
        });
    };
    const deleteUserIngredient = (id) => {
        dispatch({
            type: DELETE_USER_INGREDIENT,
            payload: id,
        });
    };

    const handleIsButtonClicked = (value) => {
        dispatch({
            type: SHOW_ALL_COCKTAILS,
            payload: value,
        });
    };
    return (
        <CocktailsContext.Provider
            value={{
                cocktails: state.cocktails,
                userIngredients: state.userIngredients,
                isButtonClicked:state.isButtonClicked,
                getCocktails,
                updateUserIngredients,
                deleteUserIngredient,
                handleIsButtonClicked,
            }}
        >
            {props.children}
        </CocktailsContext.Provider>
    );
};
export default CocktailState;
