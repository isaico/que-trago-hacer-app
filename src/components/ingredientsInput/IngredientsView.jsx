import CocktailContext from '../../context/CocktailsContext';
import { useContext } from 'react';

const IngredientsView = () => {
    const { userIngredients, deleteUserIngredient } =
        useContext(CocktailContext); 

    return (
        <div
            className="bg-secondaryBg  rounded-2xl py-6 flex flex-col  gap-3 lg:gap-6 items-center max-h-72 md:max-h-[34rem] overflow-auto shrink-0 w-full lg:w-1/3 "
            id="toastContainer"
        >
            <h2 className=" text-xl text-gray-200 ">Ingredientes:</h2>
            {userIngredients.length === 0 ? (
                <div className="flex items-center mx-2 text-color-main pb-2 md:pb-0">
                    <svg
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className="mx-2"
                    >
                        <path d="M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854C20.307 17.842 19.65 19 18 19H6c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83S4.473 21 6 21h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854C14.482 4.251 13.296 3.511 12 3.511z" />
                        <path d="M13.3 16 A1.3 1.3 0 0 1 12 17.3 A1.3 1.3 0 0 1 10.7 16 A1.3 1.3 0 0 1 13.3 16 z" />
                        <path d="M13.5 10c0-.83-.671-1.5-1.5-1.5a1.499 1.499 0 00-1.389 2.062C11.165 11.938 12 14 12 14l1.391-3.438c.068-.173.109-.363.109-.562z" />
                    </svg>
                    <span className="text-gray-200 text-md">
                        Todavía no ingresaste ingredientes
                    </span>
                </div>
            ) : (
                userIngredients.map((item, i) => (
                    <div
                        id="toast-default"
                        className="flex items-center my-2  w-full max-w-xs p-3 sm:p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 font-tilt"
                        role="alert"
                        key={i}
                    >
                        <div className="ml-3 text-sm font-semibold">
                            {item.ingredientValue.toUpperCase()}
                        </div>
                        <button
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            data-dismiss-target="#toast-default"
                            aria-label="Close"
                            onClick={() => deleteUserIngredient(item.id)}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3 text-color-main"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default IngredientsView;
