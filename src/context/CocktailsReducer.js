import {
    GET_COCKTAILS,
    UPDATE_USER_INGREDIENTS,
    DELETE_USER_INGREDIENT,
    SHOW_ALL_COCKTAILS,
} from './types';
//exportamos una funcion anonima que determina que metodo utilizar y que datos utiliza
export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_COCKTAILS:
            return {
                ...state,
                cocktails: payload,
            };

        case UPDATE_USER_INGREDIENTS:
            const newUserIngredients = [...state.userIngredients, payload];
            return {
                ...state,
                userIngredients: newUserIngredients,
            };
        case DELETE_USER_INGREDIENT:
            const filteredUserIngredient = state.userIngredients.filter(
                (ingredient) => ingredient.id !== payload
            );
            return {
                ...state,
                userIngredients: filteredUserIngredient,
            };
        case SHOW_ALL_COCKTAILS: {
            return {
                ...state,
                isButtonClicked: payload,
            };
        }
        default:
            return state;
    }
};
