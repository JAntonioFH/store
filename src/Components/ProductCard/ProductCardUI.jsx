function ProductCardUI({ handleClick, product, isAdded, openProductDetail }) {
    return (
        <div
            onClick={openProductDetail}
            className="transition-transform transform hover:scale-105 active:scale-95"
        >
            <figure className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg">
                <img
                    className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
                    src={product.images[2]}
                    alt={product.title}
                />
                <figcaption className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold text-gray-800">${product.price}</span>
                        <button
                            className={`px-4 py-2 text-white text-sm font-medium rounded-md 
                            ${isAdded ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                            onClick={(e) => {
                                e.stopPropagation(); // Evitar que el clic afecte al contenedor principal
                                handleClick();
                            }}
                        >
                            {isAdded ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}


export  {ProductCardUI};

