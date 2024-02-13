import React from 'react';

const Fact = ({ children }) => {
    const { content, title, image } = children;
    return (
        <div className='fact'>
        <h2>{title}</h2>
        <div className='fact-content'>
            <img src={image} alt="Fact" />
        <p>{content}</p>
        </div>
        </div>
    );
};

export default Fact;
