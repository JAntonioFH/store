import { XMarkIcon } from '@heroicons/react/24/solid';

function ProductDetailUI({ product, onClose }) {
    return (
        <aside className="product-detail fixed top-10 left-0 right-0 mx-auto w-96 border border-black rounded-lg bg-white shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <h2 className="font-medium text-xl">Detalles</h2>
                <button onClick={onClose}>
                    <XMarkIcon className="h-6 w-6 text-black hover:text-red-500 cursor-pointer" />
                </button>
            </div>
            <div className="p-4">
                {product ? (
                    <>
                        {/* Imagen principal del producto */}
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        
                        {/* Título del producto */}
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        
                        {/* Descripción del producto */}
                        <p className="text-gray-700 mt-2">{product.description}</p>

                        {/* Precio del producto */}
                        <span className="block mt-4 text-xl font-bold text-gray-800">
                            ${product.price}
                        </span>

                        {/* Categoría del producto */}
                        <div className="mt-4">
                            <span className="font-medium text-gray-600">Categoría: </span>
                            <span>{product.category.name}</span>
                        </div>

                        {/* Mostrar imágenes adicionales */}
                        <div className="mt-4">
                            <h4 className="font-medium text-gray-600">Más imágenes</h4>
                            <div className="flex space-x-2 mt-2">
                                {product.images.slice(1).map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${product.title} image ${index + 2}`}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500">Selecciona un producto para ver los detalles.</p>
                )}
            </div>
        </aside>
    );
}

export { ProductDetailUI };
