import React, { useState } from "react";

const SearchBarFilter = () => {
    const fruits = [
        "Apple",
        "Apricot",
        "Banana",
        "Blueberry",
        "Cherry",
        "Date",
        "Grape",
        "Elderberry",
        "Grapefruit",
        "Dragonfruit"
    ];

    const [fruitsData, setFruitsData] = useState(fruits);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);     
    }

    const fruitsDataFiltered = fruitsData.filter((fruit) => {
        fruit.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input type="text" placeholder="Search here" onChange={handleSearch} />
           
                {fruitsData.map((fruit, i) => {
                    return (
                        <div className={"row"} key={i}> 
                            <p>{fruit}</p>
                        </div>
                    )})}
        </div>
    );
};

export default SearchBarFilter;

