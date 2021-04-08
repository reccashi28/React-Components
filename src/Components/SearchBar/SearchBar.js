const SearchBar = ( {onSearchChange}) => {

    // const searchBarFocus = () => {
    //     fa-search.style.display = "none";
    // }
    return(
        <div className="search-bar">
            <input  onChange={onSearchChange} type="text" id="search-bar__text-field" className="pa3" placeholder="Search" />
            <i className="fas fa-search o-50"></i>
        </div>
    );
}

export default SearchBar;