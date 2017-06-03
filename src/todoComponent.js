import React from 'react';

export default ({
    onClick,
    id,
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