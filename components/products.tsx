import FilterItems from './filter/items';
import Product from './product';
import Filter from '@/components/filter/index';
import { useEffect, useState } from 'react';
import { useFetchProducts } from '@/app/hooks/useApi';

export default function Products() {
    const [loading, setLoading] = useState<boolean>(true)
    const [pageIndex, setPageIndex] = useState(0)
    const [categories, setCategories] = useState<string[]>([])
    const [products, setProducts] = useState<any[]>([])
    const [paginationLinks, setPaginationLinks] = useState<string[]>([])

    useEffect(() => {
        useFetchProducts({ categories, page: pageIndex })
            .then(res => {
                setProducts(res?.data.data)
                setPaginationLinks(res?.data.links)
                setLoading(false)
            })
    }, [categories, pageIndex])

    const setFilter = async(category: string) => {
        if ( categories.includes(category) ) {
            setCategories(categories.filter(cat => cat !== category))
        } else {
            setCategories([...categories, category])
        }
        setPageIndex(1)
    }

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
                        <FilterItems onFilter={setFilter} />
                    </ul>
                </aside>
                <div className="col-span-2 md:p-2">
                        {loading ? <h1>loading</h1> : (
                            <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-4">
                                {products?.map((product: any) => (
                                    <Product product={product} key={product._id} />
                                ))}
                            </div>
                        )}
                        <div className="pagination flex justify-center align-center mt-10">
                            <a
                                onClick={() => setPageIndex(Number(pageIndex <= 1 ? pageIndex : pageIndex - 1))}
                                className="mx-1 cursor-pointer font-bold"
                            >
                                {'<'}
                            </a>
                            {paginationLinks?.slice(1, -1).map((link: any) => (
                                <a
                                    onClick={() => setPageIndex(Number(link.label))}
                                    className={`mx-1 cursor-pointer ${link.active ? 'font-bold' : 'text-gray-500'}`}
                                    key={link.label}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                onClick={() => setPageIndex(Number(pageIndex >= 9 ? pageIndex : pageIndex + 1))}
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
