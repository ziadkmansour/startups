import Link from 'next/link';
import React from 'react';

const UsersDashboard: React.FC = () => {
    return (
        <div>
            <h1>Users Dashboard</h1>
            <ul className='mt-10'>
                <li><Link href="/dashboards/users/1">User 1</Link></li>
                <li><Link href="/dashboards/users/2">User 2</Link></li>
                <li><Link href="/dashboards/users/3">User 3</Link></li>
                <li><Link href="/dashboards/users/4">User 4</Link></li>
            </ul>
        </div>
    );
};

export default UsersDashboard;