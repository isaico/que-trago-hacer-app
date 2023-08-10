import CocktailList from './CocktailList';
import CocktailContext from '../../context/CocktailsContext';
import Loading from '../Loading/Loading';
import { useContext, useEffect, useState } from 'react';
import filter from '../../utils/filter';
//este componente va a renderizar una lista de cockteles dependiendo,con filtro o sin filtro

const CocktailContainer = () => {
    const [filterList, setFilterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { cocktails, userIngredients, getCocktails, isButtonClicked } =
        useContext(CocktailContext); 

    useEffect(() => {
        if (userIngredients.length === 0) {
            getCocktails();
            setIsLoading(false);
        } else {
            handleFilter(cocktails, userIngredients);
        }
    }, [userIngredients]);

    const handleFilter = (list, filterParamsList) => {
        const updatedList = filter(list, filterParamsList);
        setFilterList(updatedList);
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : userIngredients && userIngredients.length === 0 ? (
                isButtonClicked ? (
                    <CocktailList cocktails={cocktails} />
                ) : (
                    <CocktailList />
                )
            ) : filterList && userIngredients.length > 0 ? (
                <CocktailList cocktails={filterList} />
            ) : (
                <span className="text-gray-200 text-md mx-auto text-center ">
                   Ups!, No se encontro un trago con esos ingredientes, prueba otros!
                </span>
            )}
        </>
    );
};
export default CocktailContainer;
