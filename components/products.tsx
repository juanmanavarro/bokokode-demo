import FilterIcon from '@/app/assets/icons/filter';

export default function Products({ products, paginationLinks, setPageIndex }: { products: any[], paginationLinks: any[], setPageIndex: Function}) {
    return (
        <section>
            <div className="flex justify-between items-center py-3 px-2">
                <div className="md:text-xl">
                    <span className="font-bold">Photography / </span>
                    <span>Premium Photos</span>
                </div>
                <div className="text-black text-sm block md:hidden"><FilterIcon /></div>
                <div className="hidden md:block">Sort by: <a href="" className="font-bold">Price &#9660;</a></div>
            </div>
            <div className="grid grid-cols-3 gap-4 py-3 px-2">
                <aside className="p-2">
                    <h5 className="text-xl font-bold">Category</h5>
                    <ul className="mt-3">
                        {['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'].map((category: string) => (
                            <li className="mb-3" key={category}>
                                <input className="me-2 accent-gray-500" type="checkbox" name="" id="" />
                                <label className="capitalize" htmlFor="">{category}</label>
                            </li>
                        ))}
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
                    <div className="pagination flex justify-center align-center mt-10">
                        <a
                            onClick={() => null}
                            className="mx-1 cursor-pointer font-bold"
                        >
                            {'<'}
                        </a>
                        {paginationLinks?.slice(1, -1).map((link: any) => (
                            <a
                                onClick={() => setPageIndex(link.label)}
                                className={`mx-1 cursor-pointer ${link.active ? 'font-bold' : 'text-gray-500'}`}
                                key={link.label}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            onClick={() => null}
                            className="mx-1 cursor-pointer font-bold"
                        >
                            {'>'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
