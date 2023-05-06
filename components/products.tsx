export default function Products({ products, paginationLinks, setPageIndex }: { products: any[], paginationLinks: any[], setPageIndex: any}) {
    return (
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
                <div className="col-span-2 p-2">
                    <div className="grid grid-cols-3 gap-4">
                        {products?.map((product: any) => (
                            <div className="product" key={product._id}>
                                <div
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `url(${product.image.src})`,
                                        height: '300px',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                </div>
                                <div className="product-footer py-2">
                                    <div className="capitalize text-sm text-gray-500">{product.category}</div>
                                    <div className="truncate text-ellipsis overflow-hidden font-bold">{product.name}</div>
                                    <div className="product-price text-gray-500">$ {product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination flex justify-center align-center mt-3">
                        {paginationLinks?.map((link: any) => (
                            <a
                                onClick={() => setPageIndex(link.label)}
                                className="pagination-item mx-1"
                                key={link.label}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
