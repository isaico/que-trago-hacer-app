import IngredientsView from '../ingredientsInput/IngredientsView';
import CocktailContainer from '../Cocktails/CocktailContainer';
const MainContent = () => {
    return (
        <div className="flex lg:items-start gap-4 md:gap-12 lg:gap-16 md:pb-12 pb-4 lg:flex-row flex-col items-center ">
            <IngredientsView />
            <CocktailContainer />
        </div>
    );
};

export default MainContent;
