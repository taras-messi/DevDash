import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface MenuListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const MenuList: React.FC<MenuListProps> = ({ products, onAddToCart }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Заголовок секции */}
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 border-b-4 border-yellow-400 pb-2 inline-block">
        Меню McDonald's
      </h2>

      {/* Адаптивная сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
          >
            {/* Изображение товара */}
            <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Контент карточки */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {product.title}
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-extrabold text-gray-900 dark:text-yellow-400">
                  ${product.price}
                </span>

                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-xl transition-colors duration-200 active:scale-95 shadow-sm"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};