import React from 'react';
import './homepage.scss';
import ResourceList from '../../components/resource-list.component';
import CustomButton from '../../components/custom-button.component';

const HomePage = () => (
    <div className='homepage'>
        <div className='top-container vh-50 mw-100 '>
            <CustomButton title='LOGIN'/>
            <CustomButton title='CHAT'/>
        </div>

        <ResourceList />
    </div>
);

export default HomePage;