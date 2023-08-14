import { useContext } from 'react';
import CocktailsContext from '../../context/CocktailsContext';
const ButtonGroup = () => {
    const { handleIsButtonClicked } = useContext(CocktailsContext);

    return (
        <div
            className=" flex items-center rounded-md shadow-sm mb-4 mt-4 pt-2 lg:mt-0 lg:self-center w-full   "
            role="group"
        >
            <button
                type="button"
                onClick={() => handleIsButtonClicked(true)}
                className="inline-flex justify-start  w-1/2 items-center px-1 py-1 md:text-md text-sm font-medium text-gray-100 bg-transparent border border-gray-100 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mx-2 w-8"
                >
                    <path d="M7.5 7l-2-2h13l-2 2M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2l8 8z" />
                </svg>
                Ver todos!
            </button>
            <button
                type="button"
                onClick={() => handleIsButtonClicked(false)}
                className="inline-flex justify-end  w-1/2 items-center  text-center sm:px-1 py-1 md:text-md  text-sm font-medium text-gray-100 bg-transparent border  rounded-r-lg  border-gray-100 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 "
            >
                Ocultar todos!
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mx-2  w-8"
                >
                    <path d="M13.33 12.67L7.66 7 6.13 5.47 2.39 1.73 1.11 3 3 4.89V5l8 8v6H6v2h12v-1.11l2.84 2.84 1.27-1.27-8.78-8.79M13 19v-4.11L17.11 19H13M8.2 5l-2-2H21v2l-6.4 6.4L10.2 7h6.3l2-2H8.2z" />
                </svg>
            </button>
        </div>
    );
};

export default ButtonGroup;
