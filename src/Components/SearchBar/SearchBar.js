const SearchBar = () => {
    return(
        <div className="search-bar">
            <input type="text" id="search-bar__text-field" className="pa3" placeholder="Search" />
            <i className="fas fa-search"></i>
        </div>
    );
}

export default SearchBar;