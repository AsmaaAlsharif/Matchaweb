import React, { useEffect } from 'react';
import Navbar from './Navbar';

const MainLayout = ({children, title}) => {
    useEffect(()=> {
        if(title)
        {
            document.title = title;
        }
    }, [title]);
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <footer className="footer">
                <p>© 2025 Matcha Blog, LLC. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default MainLayout;