import CloseIcon from "@/app/assets/icons/close";
import FilterIcon from "@/app/assets/icons/filter";
import { useState } from "react";
import FilterItems from "./items";

export default function Filter({ onFilter }: { onFilter: (category: string) => void }) {
    const [showFilter, setShowFilter] = useState(false);

    const setClear = () => {
        setShowFilter(false);
        onFilter('');
    }

    return (
        <div>
            <div className="" onClick={() => setShowFilter(!showFilter)}>
                <FilterIcon />
            </div>
            <div className={`border bg-white absolute inset-x-0 top-[50px] right-0 pt-4 px-2 z-10 ${showFilter ? "block" : "hidden"}`}>
                <div className="mb-5 flex justify-between align-center">
                    <p className="font-bold text-2xl">Filter</p>
                    <a onClick={() => setShowFilter(false)}><CloseIcon /></a>
                </div>
                <ul className="py-4">
                    <FilterItems onFilter={onFilter} />
                </ul>
                <div className="grid grid-cols-2 gap-2 pb-2">
                    <button className="button-white" onClick={() => setClear()}>Clear</button>
                    <button className="button-black" onClick={() => setShowFilter(false)}>Save</button>
                </div>
            </div>
        </div>
    );
}
