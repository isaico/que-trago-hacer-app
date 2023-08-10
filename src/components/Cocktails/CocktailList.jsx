import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => {
    return (
        <div
            className="bg-secondaryBg rounded-xl flex flex-col items-center w-full lg:w-2/3 gap-3 lg:gap-6 pt-6  max-h-[1000px] overflow-auto"
            id="cocktailList"
        >
            <h2 className=" text-xl text-gray-200 ">Cocteles:</h2>
            <div className="flex flex-row flex-wrap gap-4 lg:gap-8 justify-center pb-6 w-full">
                {cocktails ? (
                    cocktails?.map((cocktail) => (
                        <Cocktail key={cocktail.id} item={cocktail} />
                    ))
                ) : (
                    <div className="flex items-center px-4 text-color-main">
                        <svg
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="mx-2 w-8"
                        >
                            <path d="M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854C20.307 17.842 19.65 19 18 19H6c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83S4.473 21 6 21h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854C14.482 4.251 13.296 3.511 12 3.511z" />
                            <path d="M13.3 16 A1.3 1.3 0 0 1 12 17.3 A1.3 1.3 0 0 1 10.7 16 A1.3 1.3 0 0 1 13.3 16 z" />
                            <path d="M13.5 10c0-.83-.671-1.5-1.5-1.5a1.499 1.499 0 00-1.389 2.062C11.165 11.938 12 14 12 14l1.391-3.438c.068-.173.109-.363.109-.562z" />
                        </svg>
                        <span className="text-gray-200 text-md ">
                            No hay tragos! selecciona una opcion o bien ingresa
                            un ingrediente!
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default CocktailList;
