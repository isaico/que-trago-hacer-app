import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import AdsTerra from '../components/AdsTerra/AdsTerra';
import DefaultToast from '../components/Toast/DefaultToast';
const Layout = () => {
    return (
        <>
            <div className="flex flex-col bg-primaryBg font-poppins px-4 sm:px-10 md:px-20 lg:px-48 ">
                <Main />
                <AdsTerra />
                <Footer />
                <DefaultToast />
            </div>
        </>
    );
};

export default Layout;
