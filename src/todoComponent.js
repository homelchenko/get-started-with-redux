import React from 'react';

export default ({
    onClick,
    text,
    completed
}) => {
    return (
        <li
            onClick={onClick}                            
            style={{
                textDecoration: completed ? 
                    'line-through' :
                    'none'
            }}>
            {text}
        </li>
    )
}