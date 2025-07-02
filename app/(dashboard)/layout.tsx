import React from 'react';

const Layout = ({ children } : {children : React.ReactNode}) => {
    return (
        <div>
            <header>
                <h1 className='text-3xl'>Dashboard Layout</h1>
            </header>
            {children}
        </div>
    );
};

export default Layout;