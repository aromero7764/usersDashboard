import React from 'react';

const Header = ({openModal}) => {
    return (
        <div className='level mt-6'>
            <div className='level-left'>
                <h1 className='title is-2 is-spaced f1'>USERS</h1>
            </div>
            <div className='level-right'>
                <button onClick={openModal} className='button is-link is-light is-radiusless px-6'>
                    <span className="icon is-small">
                    <i className='fa-solid fa-user-plus'></i></span>
                    <span>Create new user</span></button>
            </div>
            
        </div>
    );
};

export default Header;