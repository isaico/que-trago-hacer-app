//filtro que toma una lista y la filtra de acuerdo a otra lista
const filter = (list, userInputs) => {
    //mutamos la lista para refinarla solo con los valores necesarios para la comparacion
    const userInputsValues = userInputs.map((i) => i.ingredientValue);
    //chequeamos que tenga valores sino retornamos null
    if (userInputs.length > 0) {
        //filtramos la lista principal, chequeamos que CADA input este incluido en la key "ingredients" de cada item en la lista
        const filteredList = list.filter((cocktail, i) =>
            userInputsValues.every((value) =>
                cocktail.ingredients.includes(value)
            )
            );
        if(filteredList.length>0){
           
            return filteredList
        }else{
            return null
        }
    }
    return null
};
export default filter;
