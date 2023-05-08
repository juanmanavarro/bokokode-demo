export default function FilterItems() {
    return (
        <>
            {['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature']
            .map((category: string) => (
                <li className="mb-3" key={category}>
                    <input className="me-2 accent-gray-500" type="checkbox" name={category} id={category} />
                    <label className="capitalize" htmlFor="">{category}</label>
                </li>
            ))}
        </>
    )
}
