import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba bw2 br3 b search'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}  
            />
        </div>
    );
}

export default SearchBox;