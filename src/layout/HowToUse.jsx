import React from 'react';
import Title from '../components/Title/Title';
import inputZoneScreen from '../assets/input-zone-screenshoot.jpg';
import ingredientsTagScreens from '../assets/ingredients-tags-screenshoot.jpg';
import cocktailCardScreen from '../assets/cocktail-card-screenshoot.jpg';
import { Link } from 'react-router-dom';
const HowToUse = () => {
    return (
        <div className="flex flex-col bg-primaryBg font-poppins px-4 sm:px-10 md:px-20 lg:px-48 pt-12">
            <Link to="/" className="text-gray-200 flex flex-col text-xl">
                <span>Volver</span>
                <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M112 352l-64-64 64-64"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M64 288h294c58.76 0 106-49.33 106-108v-20"
                    />
                </svg>
            </Link>
            <div className="grid justify-items-center place-self-center text-center ">
                <Title />
            </div>
            <div className=" bg-secondaryBg rounded-xl flex flex-col  justify-items-center p-8 mb-12 text-center ">
                <div className="bg-thirthBg rounded-xl">
                    <h2 className="text-gray-200 sm:text-2xl  text-md  py-4 sm:pl-4  rounded-bl-none rounded-br-none rounded-xl">
                        ¿No sabes que trago o coctel puedes hacer?. ¿Tienes unos
                        ingredientes a mano y no sabes como mezclarlos?
                    </h2>
                    <h3 className="text-gray-300 sm:text-xl  text-sm sm:pb-4 pb-2 pl-4  ">
                        No te preocupes, te ayudamos!... Hacer tragos fáciles y
                        económicos en casa nunca fue tan sencillo. 
                    </h3>

                    <h3 className="text-gray-300 sm:text-xl  text-sm sm:pb-4 pb-2 pl-4 ">
                        Tragos con vodka, con gin, o con lo que tengas
                        disponible! te damos la receta!
                    </h3>
                </div>
                <p className="flex items-center text-gray-400 pl-4 mt-4 justify-center text-xs sm:text-sm">
                    Solo sigue el paso a paso aqui abajo!
                    <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        className="w-8 text-color-main"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
                        />
                    </svg>
                </p>
            </div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-10">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-secondaryBg ">
                        <svg
                            className="w-4 h-4 text-color-main "
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M13 4h-2l-1-2h4l-1 2m6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white"></h3>
                    <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                        Para comenzar a encontrar los mejores y más populares
                        tragos disponibles, primero debes dirigirte a la zona de
                        opciones.
                    </time>
                    <p className="mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
                        La puedes reconocer facilmente ya que es la zona donde
                        puedes ingresar texto!
                    </p>
                    <img
                        className="h-auto md:max-w-lg  rounded-lg max-w-[15rem] "
                        src={inputZoneScreen}
                        alt="screenshot de una seccion de la pagina web en la cual se muestra un input de tipo texto un boton para agregar y 2 botones inferiores que dicen ver todos y ocultar todos!"
                    />
                    <p className="my-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        Ingresa el nombre de algun ingrediente que tengas o
                        bien, puedes ver todos los tragos disponibles!
                    </p>
                </li>
                <li className="mb-10 ml-10">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-secondaryBg ">
                        <svg
                            className="w-4 h-4 text-color-main "
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M13 4h-2l-1-2h4l-1 2m6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white"></h3>
                    <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                        Si ingresaste un ingrediente 🍓 🍾 entonces veras como
                        se formara una lista de lo que agregues!
                    </time>
                    <p className="mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
                        La puedes detectar rapido ya que tiene un titulo
                        "Ingredientes"!
                    </p>
                    <img
                        className="h-auto md:max-w-lg  rounded-lg max-w-[15rem]"
                        src={ingredientsTagScreens}
                        alt="screenshot de una seccion de la pagina web en la cual se muestra un titulo 'ingredientes' y un item 'Ron' cargado por un usuario"
                    />
                    <p className="my-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        Si te arrepentiste del lo que ingresaste puedes apretar
                        la cruz y eliminara ❌ el ingrediente y asi nuevamente
                        refinara la lista de tragos.
                    </p>
                </li>
                <li className="mb-10 ml-10">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-secondaryBg ">
                        <svg
                            className="w-4 h-4 text-color-main "
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M13 4h-2l-1-2h4l-1 2m6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 dark:text-white"></h3>
                    <time className="block mb-2 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                        Al ingresar un texto tendras una lista de tragos 🍹 que
                        tienen el ingrediente que seleccionaste!
                    </time>
                    <p className="mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
                        Puedes seguir ingresando ingredientes hasta encontrar el
                        trago ideal!
                    </p>
                    <img
                        className="h-auto md:max-w-lg  rounded-lg max-w-[15rem]"
                        src={cocktailCardScreen}
                        alt="screenshot de una seccion de la pagina web en la cual se muestra un titulo 'ingredientes' y un item 'Ron' cargado por un usuario"
                    />
                    <p className="my-2 text-base font-normal text-gray-500 dark:text-gray-400">
                        En la lista de la tarjeta de cada trago podras ver
                        resaltado los ingredientes que ya seleccionaste!
                    </p>
                </li>
                <li className="mb-10 ml-10">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-secondaryBg ">
                        <svg
                            className="w-4 h-4 text-color-main "
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M13 4h-2l-1-2h4l-1 2m6 9v9H5v-9c0-2.76 2.24-5 5-5V6H9V5h6v1h-1v2c2.76 0 5 2.24 5 5z" />
                        </svg>
                    </span>
                    <h3 className="text-gray-200 sm:text-2xl  text-xl ">
                        Solo te queda disfrutar de tu trago hecho a la medida
                        para ti!!😇 🍸{' '}
                    </h3>
                    <Link
                        to="/"
                        className="inline-flex  items-center justify-center p-5 mt-6 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="w-full">Ir a la app</span>
                        <svg
                            className="w-4 h-4 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </li>
            </ol>
        </div>
    );
};

export default HowToUse;
