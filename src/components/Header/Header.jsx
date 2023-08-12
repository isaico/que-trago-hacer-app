import { Link } from 'react-router-dom';
import IngredientsForm from '../ingredientsInput/IngredientsForm';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <>
            <div className="absolute top-4 left-4 invisible md:visible">
                <Logo />
            </div>
            <section id="header">
                <div className=" md:py-12  py-4 text-center lg:py-16 z-10 relative ">
                    <Link
                        to="/how-to-use"
                        className="inline-flex justify-between items-center sm:py-1 sm:px-1 m-2 pr-4 mb-7  text-gray-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-secondaryBg"
                    >
                        <span className="text-xs bg-pink-500 rounded-full text-white px-4 py-1.5 mr-3">
                            Como usar?
                        </span>
                        <p className="sm:text-sm text-xs md:font-medium">
                            Haz clic aquí para ver información sobre como usar
                            el sitio.
                        </p>
                        <svg
                            className="w-2.5 h-2.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </Link>
                    <h1 className="mb-10 mt-2 text-5xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">
                        <span className="font-tilt neon">
                            <span className="blink">¿Q</span>ué Trago Hacer?
                        </span>
                    </h1>
                    <div className="bg-secondaryBg md:py-8 p-4 lg:py-12 w-full sm:px-4 rounded-2xl">
                        <h2 className="md:mb-12 mb-8 sm:text-lg text-sm font-medium text-gray-200 lg:text-xl sm:px-16 lg:px-20 dark:text-gray-200">
                            ¡Agrega los ingredientes que tengas a mano, y
                            obtendrás recetas fáciles y rápidas para los mejores tragos que
                            puedan hacerse en casa!
                        </h2>
                        <IngredientsForm />

                        <h3 className="md:mb-4 mb-2 sm:text-lg text-sm font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-28 dark:text-gray-200">
                            ¿No sabes que trago puedes hacer? Te damos las
                            recetas.
                        </h3>
                        <h4 className="mb-4 px-8  sm:text-sm text-xs font-normal text-gray-400 lg:text-md sm:px-16 lg:px-48 dark:text-gray-500">
                            Encuentra el cóctel perfecto con los ingredientes
                            que tienes a mano
                        </h4>
                    </div>
                </div>
            </section>
            {/*ads: <div id="container-f4252e5fcae282409d4f301ce43542f1" className='text-white '></div> */}
            
        </>
    );
};
export default Header;
