import React from 'react';
//import './resource-item.styles.scss';

const ResourceItem = ({ id, resource}) => {
    const { title, description, imageUrl, url } = resource;
    return (
        <div className='w-25 pa3 ma4 ba br4' >
            <img src={imageUrl} alt={title}/>
            <p> {description} </p>
            {/* <a href={url} style={{backgroundImage: `url(${imageUrl})`}} className='link contain bg-center cover hide-child '>
                <span className='white dtc v-mid child bg-black-40 pa5'>
                    {description}
                </span>
            </a> */}
        </div>
    )
}


export default ResourceItem;