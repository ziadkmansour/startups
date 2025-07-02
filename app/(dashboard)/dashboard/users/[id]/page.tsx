import React from 'react';

const UserDetailPage = ({params} : {params : {id : string}}) => {
    const id = params.id;
    return (
        <div>
            <h1 className='text-3xl'>User detail page: {id}</h1>
        </div>
    );
};

export default UserDetailPage;