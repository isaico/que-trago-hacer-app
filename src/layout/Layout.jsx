import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

// export const AppContext = React.createContext();

const Layout = () => {
    return (
        <>
            <div className="flex flex-col bg-primaryBg font-poppins px-4 sm:px-10 md:px-20 lg:px-48 ">
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default Layout;
