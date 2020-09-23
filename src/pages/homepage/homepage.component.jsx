import React from 'react';
import './homepage.styles.scss';
//import LCSlogo from '../../assets/lutheran-community-services.jpg';
import ResourceItem from '../../components/resource/resource-item/resource-item.component';
import resources from '../../resources.data';

const HomePage = () => (
    <div className='homepage'>
        <div className='top-container'>
            <button>Login</button>
            <button>Secure Chat</button>
            <p> Hello world </p>
        </div>

        <div className='bottom-container'>
            {resources.map(resource => (
                <ResourceItem id={resource.id} resource={resource} />
            ))}
        </div>
    </div>
);

export default HomePage;