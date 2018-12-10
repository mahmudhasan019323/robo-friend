import React from 'react';

const SearchField = ({searchChange})=>{
    return (
        <div className="pa3 tc">
            <input type="text" placeholder="Search friend" className="pa3 b--green bg-lightest-blue" onChange={searchChange} />
        </div>
    );
}

export default SearchField;