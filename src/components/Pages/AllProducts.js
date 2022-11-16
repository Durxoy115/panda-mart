import React from 'react';
import useProduct from '../../hooks/useProduct';
import Products from '../Home/Products';

const AllProducts = () => {
    const [products] = useProduct();
    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold font-serif mt-4">
          All Products
        </h1>
        <div className="flex justify-center">
          <div className="divider w-1/3 mt-0"></div>
        </div>
           <div className=" mt-2  card grid gap-4 md:grid-cols-2 lg:grid-cols-4 bg-base-100 p-3 lg:p-10">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
        </div>
    );
};

export default AllProducts;