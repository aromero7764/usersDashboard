import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({openModal, getUsers, selectUser, desSelectUser}) => {

const {register, handleSubmit, reset} = useForm()

useEffect(()=> {
    if(selectUser) {
        reset(selectUser)
    }
}, [selectUser])

const submit = (data)=> {
    if(selectUser) {
        axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, data)
        .then(()=> {
            getUsers() })
        .catch(error => console.log(error.response))
        desSelectUser()

    } else {
    axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(()=> {
            getUsers() })
        .catch(error => {
            if(error) 
                alert("An error occurred while recording the data, please check email")
            })
    
}
clear()
openModal() //Close modal
}

const changeSelection = ()=>{
    if(selectUser) {
        desSelectUser()
        //Close modal
    }
     openModal()
}

const clear = ()=> {
    reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: "",
    })
    desSelectUser()
}


    return (
        <div>
            <div className='modal is-active'>
                <div onClick={changeSelection} className="modal-background"></div>
                <div className="modal-card">
                    {/* here start form */}
                    <form onSubmit={handleSubmit(submit)}>
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-weight-bold">{(selectUser) ? "Update" : "Add New"} User</p>
                        <button onClick={changeSelection} className="delete button is-danger" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                    {/*  body del modal */}
                    <div className='mds mt-3 mb-4 px-3'>
                    <div className="field">
                            <label htmlFor='first_name' className="label">Name</label>
                            <div className="control">
                                <input id='first_name'
                                {...register("first_name")} className="input is-radiusless" 
                                        type="text" 
                                        placeholder="Please write your name..."
                                         />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor='last_name' className="label">Last Name</label>
                            <div className="control">
                                <input id='last_name' className="input is-radiusless" 
                                        type="text" placeholder="Please write your last name..."
                                        
                                        {...register("last_name")} required/>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor='email' className="label">Email</label>
                            <div className="control has-icons-left">
                                <input id='email' className="input is-radiusless"
                                    type="email"
                                    placeholder="Please write your email..."
                                    
                                    {...register("email")} required/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor='password' className="label">Password</label>
                            <div className="control has-icons-left">
                                <input id='password' className="input is-radiusless"
                                    type="password"
                                    placeholder="Please write your password..."
                                    
                                    {...register("password")} required/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor='birthday' className="label">Birthday Date</label>
                            <div className="control has-icons-left">
                                <input id='birthday' className="input is-radiusless"
                                    type="date"
                                    placeholder="Please write Birthday Date..." 
                                  
                                    {...register("birthday")} required/>
                                <span className="icon is-small is-left">
                                    <i className="fa-solid fa-cake-candles"></i>
                                </span>
                            </div>
                        </div>
                       </div>

                        {/* fin del body */}
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success is-radiusless">Save</button>
                        <button onClick={changeSelection} className="button is-danger is-radiusless">Cancel</button>
                    </footer>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UsersForm;