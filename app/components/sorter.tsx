import { useState } from "react"

export default function Sorter({ onSort }: { onSort: Function }) {
    const [ sort, setSort ] = useState({
        type: 'ASC',
        key: 'price'
    })

    return (
        <>
            Sort by:&nbsp;
            <a className="font-bold cursor-pointer" onClick={() => {
                const type = sort.type === 'ASC' ? 'DESC' : 'ASC';
                setSort({ key: 'price', type })
                onSort({ key: 'price', type })
            }}>
                Price
                {sort.type === 'DESC'
                    ? <span>&#9660;</span>
                    : <span>&#9650;</span>
                }
            </a>
        </>
    )
}
