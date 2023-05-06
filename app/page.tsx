'use client';

import { useGetProducts } from "@/components/useRequest";
import CartIcon from "./icons/cart";
import { useState } from "react";
import FeaturedProduct from "@/components/featured-product";

export default function Home() {
    const [pageIndex, setPageIndex] = useState(0);
    const { data, error, isLoading } = useGetProducts(pageIndex);
    const products = data?.data.data;
    const featuredProduct = products?.find((product: any) => product.featured === true);
    const paginationLinks = data?.data.links;

    return (
        <main className="container">
            <header className="header">
                <h1 className="h1">BEJAMAS_</h1>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <>
                    <FeaturedProduct product={featuredProduct} />
                    <section>
                        <div className="flex justify-between items-center py-3 px-2">
                            <div>Photography / <span>Premium Photos</span></div>
                            <div>Sort by: <a href="">Price </a></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 py-3 px-2">
                            <aside className="bg-red-500 p-2">
                                <h5>Category</h5>
                                <ul>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">People</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Premium</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Pets</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Food</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Landmarks</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Cities</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Nature</label>
                                    </li>
                                </ul>
                            </aside>
                            <div className="col-span-2 bg-green-500 p-2">
                                <div className="grid grid-cols-3 gap-4">
                                    {products?.map((product: any) => (
                                        <div className="product" key={product._id}>
                                            <img className="w-full" src={product.image.src} alt={product.image.alt} />
                                            <div className="product-footer">
                                                <div className="product-category">{product.category}</div>
                                                <div className="product-name">{product.name}</div>
                                                <div className="product-price">$ {product.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pagination flex justify-center align-center mt-3">
                                    {paginationLinks?.map((link: any) => (
                                        <a onClick={() => {
                                            setPageIndex(link.label)
                                        }} className="pagination-item mx-1" key={link.label}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    )
}
