import React from 'react';

const Card = ({ name, email, id }) => {

    return (
        <div className='tc bg-navy moon-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='jane Doe' src={`https://robohash.org/${ id }?200x200`} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>     
    );
}

export default Card;