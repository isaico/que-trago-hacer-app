
import IngredientsView from '../ingredientsInput/IngredientsView';
import CocktailContainer from '../Cocktails/CocktailContainer';
import CocktailState from '../../context/CocktailsState';
import Header from '../Header/Header';
const Main = () => {
   

    return (
        <>
            <CocktailState>
                <Header />
                <div className='flex lg:items-start gap-4 md:gap-12 lg:gap-16 md:pb-12 pb-4 lg:flex-row flex-col items-center '>
                    <IngredientsView />
                    <CocktailContainer />
                </div>
            </CocktailState>
        </>
    );
};

export default Main;
