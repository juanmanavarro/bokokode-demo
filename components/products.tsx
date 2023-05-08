import Product from './product';
import Filter from './filter';

export default function Products({ products, paginationLinks, setPageIndex }: { products: any[], paginationLinks: any[], setPageIndex: Function}) {
    return (
        <section className="relative">
            <div className="flex justify-between items-center py-3 px-2">
                <div className="md:text-xl">
                    <span className="title-3">Photography / </span>
                    <span>Premium Photos</span>
                </div>
                <div className="text-black text-sm block md:hidden">
                    <Filter />
                </div>
                <div className="hidden md:block">Sort by: <a href="" className="font-bold">Price &#9660;</a></div>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-4 py-3 px-2">
                <aside className="p-2 hidden md:block">
                    <h5 className="title-3">Category</h5>
                    <ul className="mt-3">
                        {['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'].map((category: string) => (
                            <li className="mb-3" key={category}>
                                <input className="me-2 accent-gray-500" type="checkbox" name="" id="" />
                                <label className="capitalize" htmlFor="">{category}</label>
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className="col-span-2 md:p-2">
                    <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-4">
                        {products?.map((product: any) => (
                            <Product product={product} key={product._id} />
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
