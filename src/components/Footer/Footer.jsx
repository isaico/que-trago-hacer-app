import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-primaryBg shadow dark:bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto py-4 md:py-8">
                <div className="md:flex md:items-center md:justify-between">
                    <a
                        href="#header"
                        className="flex items-center justify-between mb-4"
                    >
                        <Logo />

                        <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap text-white neon">
                            ¿Qué Trago Hacer?
                        </span>
                    </a>
                    <ul className="flex justify-center  flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                to="/how-to-use"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Como usar?
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://www.privacypolicies.com/live/8c3bdc2a-6bb6-4d51-8c26-27a44e039866"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Politicas de provacidad
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:isaico@outlook.com?subject=Quiero%20que%20crees%20mi%20sitio%20web"
                                target="_blank" 
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Quieres que creemos tu sitio?
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:isaico@outlook.com?subject=Contacto%20por%20temas%20del%20sitio"
                                target="_blank"
                                className="hover:underline"
                            >
                                Contactar
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 ¿Qué Trago Hacer?™ . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};
export default Footer;
