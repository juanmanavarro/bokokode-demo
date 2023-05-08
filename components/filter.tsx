import CloseIcon from "@/app/assets/icons/close";
import FilterIcon from "@/app/assets/icons/filter";
import { useState } from "react";

export default function Filter() {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div>
            <div className="" onClick={() => setShowFilter(!showFilter)}>
                <FilterIcon />
            </div>
            <div className={`border bg-white absolute inset-x-0 top-[50px] right-0 pt-4 px-2 ${showFilter ? "block" : "hidden"}`}>
                <div className="mb-5 flex justify-between align-center">
                    <p className="font-bold text-2xl">Filter</p>
                    <a onClick={() => setShowFilter(false)}><CloseIcon /></a>
                </div>
                <ul className="py-4">
                    {['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'].map((category: string) => (
                        <li className="mb-3" key={category}>
                            <input className="me-2 accent-gray-500" type="checkbox" name="" id="" />
                            <label className="capitalize" htmlFor="">{category}</label>
                        </li>
                    ))}
                </ul>
                <div className="grid grid-cols-2 gap-2 pb-2">
                    <button className="button-white">Clear</button>
                    <button className="button-black">Save</button>
                </div>
            </div>
        </div>
    );
}
