import React from 'react';
import MainLayout from './Mainlayout';
import './NotFound.css';

const NotFound = () => {
    return (
    <MainLayout title="Page Not Found">
        <div className="notfound">
            <img src='sad.svg' alt="sad_emoji"></img>
            <h1>Page Not Found</h1>
            <p>We couldn't find what you were looking for.</p>
        </div>
    </MainLayout>
    );
}

export default NotFound;