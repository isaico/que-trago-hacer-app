/* eslint-disable react/prop-types */
import { useContext } from 'react';
import CocktailsContext from '../../context/CocktailsContext';
import DefaultModal from '../Modal/Modal';
// import useWindowDimensions from 'react-use';
const Cocktail = ({ item }) => {
    const { userIngredients } = useContext(CocktailsContext);
    return (
        <>
            <div
                className="sm:min-w-1/3 w-2/3 max-w-xs p-4 bg-thirthBg border border-gray-500 rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 grid"
                key={item.id}
            >
                <div className="">
                    <h3 className="mb-4 text-3xl font-semibold text-center text-color-main dark:text-gray-400 font-tilt">
                        {item.name}
                    </h3>

                    <ul role="list" className="space-y-3 my-7">
                        {item.ingredients.map((subItem, i) => (
                            <li className="flex space-x-3 items-center" key={i}>
                                <svg
                                    className={`flex-shrink-0 w-4 h-4 text-gray-500
                                          ${
                                              userIngredients.find(
                                                  (ing) =>
                                                      subItem ===
                                                      ing.ingredientValue
                                              )
                                                  ? 'text-pink-500'
                                                  : 'text-gray-500'
                                          }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-300 ">
                                    {subItem}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="self-end">
                    <DefaultModal item={item}></DefaultModal>
                    {/* <a
                        target="_blank"
                        href="https://www.highcpmrevenuegate.com/ww2qnnzje?key=e8a6211438341a71a038d0a80b7b6bd1"
                    >
                        adds
                    </a> */}
                </div>
            </div>
        </>
    );
};
export default Cocktail;
