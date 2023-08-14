import Main from '../components/Main/Main';
import Loading from '../components/Loading/Loading';
import { lazy, Suspense } from 'react';
// import AdsTerra from '../components/AdsTerra/AdsTerra';
const Footer = lazy(() => import('../components/Footer/Footer'));

const Layout = () => {
    return (
        <>
            <div className="flex flex-col bg-primaryBg font-poppins px-4 sm:px-10 md:px-20 lg:px-48 ">
                <Main />
                {/* <AdsTerra /> */}
                <Suspense fallback={<Loading />}>
                    <Footer />
                </Suspense>
            </div>
        </>
    );
};

export default Layout;
