'use client';

import { useGetProducts } from "@/components/useRequest";
import CartIcon from "./icons/cart";

export default function Home() {
    const { data, error, isLoading } = useGetProducts();
    const products = data?.data.data;
    const featuredProduct = products?.find((product: any) => product.featured === true);

    return (
        <main className="container">
            <header className="header">
                <h1 className="h1">BEJAMAS_</h1>
                <a href=""><CartIcon /></a>
            </header>
            {isLoading ? <h1>loading</h1> : (
                <>
                    <section className="fp mt-10">
                        <div className="fp-header">
                            <h2 className="h2">{featuredProduct.name}</h2>
                            <button className="button-black">Add to cart</button>
                        </div>
                        <div className="fp-image">
                            <img src={featuredProduct.image.src} alt={featuredProduct.image.alt} />
                            <div className="caption">Photo of the day</div>
                        </div>
                        <div className="fp-footer">
                            <div className="fp-description">
                                <h4>About the {featuredProduct.name}</h4>
                                <p>{featuredProduct.category}</p>
                                <p>{featuredProduct.description}</p>
                            </div>
                            <div className="fp-related">
                                <h4>People also buy</h4>
                                <div className="related-products">
                                    <div className="related-product"></div>
                                    <div className="related-product"></div>
                                    <div className="related-product"></div>
                                </div>
                            </div>
                        </div>
                    </section>
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
                            <div className="col-span-2 bg-green-500 p-2 grid grid-cols-3 gap-4">
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
                        </div>
                    </section>
                </>
            )}
        </main>
    )
}
