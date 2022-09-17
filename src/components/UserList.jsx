import axios from 'axios';
import React from 'react';

const UserList = ({users, getUsers, getUserSelect}) => {

const deleteUser = (id)=> {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(()=> {getUsers()})
}

    return (
        <div className='container mt-6'>

            <div className="columns is-flex is-flex-wrap-wrap is-variable is-6">
    {/* card body */}

    { users.map ( user => (
                <div key={user.id} className='column is-one-third'>
                    <div className='box'>
                        <article className='has-text-centered'>
                                <p className='is-size-4
                                has-text-weight-semibold is-uppercase'>{user.first_name} {user.last_name}</p>
                        </article>
                        <article className='media'>
                        <figure className="media-left">
                            <p className="image is-64x64">
                            <img src={`https://picsum.photos/64/64?random=${user.id}`} />
                            </p>
                        </figure>
                            <div className='media-content'>
                                <article className='media'>
                                    <p>
                                        <span className='has-text-grey-light is-uppercase'>Email</span>
                                        <br />
                                        <span className='has-text-dark is-lowercase'>{user.email}</span>
                                        <br />
                                        <span className='has-text-grey-light is-uppercase'>birthday date</span>
                                        <br />
                                        <span className='icon'><i className="fa-solid fa-gift"></i></span>
                                        <span className='has-text-dark is-lowercase'>{user.birthday}</span>
                                    </p>
                                </article>
                                <article className="media is-justify-content-flex-end">
                                    <button onClick={()=>deleteUser(user.id)} className='button is-danger mr-3'>
                                        <i className="fa-regular fa-trash-can"></i></button>
                                    <button onClick={()=> getUserSelect(user)} className='button is-light'>
                                        <i className="fa-regular fa-pen-to-square"></i></button>
                                </article>
                            </div>

                        </article>


                    </div>
                </div>
                
                ))}
                {/* end card body */}
            </div>
            
        </div>
    );
};

export default UserList;