import React from 'react'
import { BsSearch } from "react-icons/bs";
import "./style.css"

const Header = ({ search, setSearch, handleSubmit }) => {
    return (
        <header>
            <h1>Dada Book Searching App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" />
                <span><BsSearch /></span>
            </form>
        </header>
    )
}

export default Header
