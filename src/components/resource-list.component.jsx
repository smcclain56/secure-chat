import React from 'react';
import ResourceItem from './resource-item.component';
import resources from '../resources.data';

const ResourceList = () => (
    <div className='flex flex-wrap'>
        {resources.map(resource => (
                <ResourceItem id={resource.id} resource={resource} />
            ))}
    </div>
);

export default ResourceList;