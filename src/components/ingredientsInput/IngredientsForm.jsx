/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { useContext, useRef } from 'react';
import CocktailsContext from '../../context/CocktailsContext';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
const IngredientsForm = () => {
    const { updateUserIngredients } = useContext(CocktailsContext);
    const input = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const ingredient = Object.fromEntries(formData);
        const ingredientValue = fistCharUpper(ingredient.ingredient);
        updateUserIngredients({ ingredientValue, id: uuidv4() });
        input.current.value = '';
    };
    const fistCharUpper = (string) => {
        const cadena = string.trim();
        const firstLetter = cadena.charAt(0);
        const modifiedString = firstLetter.toUpperCase() + cadena.substring(1);
        return modifiedString;
    };
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-4">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                    >
                        <path d="M32 0C19.1 0 7.4 7.8 2.4 19.8S.2 45.5 9.3 54.7L224 269.3V448h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zm141.3 128l-64-64h293.4l-64 64H173.3z" />
                    </svg>
                </div>
                <input
                    type="text"
                    id="ingredient"
                    name="ingredient"
                    list="myList"
                    className="block w-full p-4 pl-10 text-sm md:text-lg text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:pink-blue-500"
                    placeholder="Ejemplo: Vodka"
                    required
                    ref={input}
                />
                <datalist id="myList">
                    <option value="Ron">Ron</option>
                    <option value="Azucar">Azucar</option>
                    <option value="Limon">Limon</option>
                    <option value="Gaseosa tonica">Gaseosa tonica</option>
                    <option value="Jugo de naranja">Jugo de naranja</option>
                </datalist>
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-color-main hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                    Agregar
                </button>
            </div>
            <ButtonGroup/>
        </form>
    );
};

export default IngredientsForm;
