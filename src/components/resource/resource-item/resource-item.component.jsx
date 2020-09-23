import React from 'react';
import './resource-item.styles.scss';

const ResourceItem = ({ id, resource}) => {
    const { title, description, imageUrl } = resource;
    return (
        <div className='resource-card' >
            <img src={imageUrl} alt={title}/>
            <p> {description} </p>
        </div>
    )
}


export default ResourceItem;