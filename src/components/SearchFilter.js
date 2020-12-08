import React from 'react'
import '../styles/searchFilter.css'

function SearchFilter({
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    options,
}) {
    let option = options.map((option) => {
        return (
            <option
                key={option.name}
                className="search-option"
                value={option.filter}
            >
                {option.name}
            </option>
        )
    })
    return (
        <div className="filter-wrap">
            <div className="input-border">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-filter"
                />
                <i className="fas fa-angle-down select-arrow"></i>
            </div>
            <select
                className="select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
            >
                {option}
            </select>
        </div>
    )
}

export default SearchFilter
