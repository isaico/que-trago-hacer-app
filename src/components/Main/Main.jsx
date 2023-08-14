import { lazy, Suspense } from 'react';
import CocktailState from '../../context/CocktailsState';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
const MainContent = lazy(()=>import('./MainContent'));

const Main = () => {
    return (
        <>
            <CocktailState>
                <Header />
                <Suspense fallback={<Loading/>}>
                    <MainContent />
                </Suspense>
            </CocktailState>
        </>
    );
};

export default Main;
