import React from 'react';

type SearchProps = {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ( {onSearchChange}: SearchProps) => {
    const inputFocus = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const hideSearchImage = () => {
        inputFocus.current.style.display = "none";
    }
    return(
        <div className="search-bar">
            <input  onFocus={hideSearchImage} onChange={onSearchChange} type="text" id="search-bar__text-field" className="pa3" placeholder="Search" />
            <i ref={inputFocus} className="fas fa-search o-50"></i>
        </div>
    );
}

export default SearchBar;