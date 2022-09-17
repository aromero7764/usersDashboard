import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = ({openModal}) => {
const [quote, setQuote] = useState("")

    useEffect(()=> {
        axios.get("https://programming-quotes-api.herokuapp.com/Quotes/random")
            .then(res => setQuote(res.data))
    }, [])

    console.log(quote)

    return (

        
             <div className="column pt-0">

                <section className="hero is-info welcome">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Hello, Admin.
                            </h1>
                            <blockquote className='is-italic'>"{quote.en}..."</blockquote>
                            <blockquote>{quote.author}</blockquote>
                        </div>
                    </div>
                </section>
           
        <div className='level mt-4'>
            <div className='level-right'>
                <button onClick={openModal} className='button is-link is-light is-radiusless px-6'>
                    <span className="icon is-small">
                    <i className='fa-solid fa-user-plus'></i></span>
                    <span>Create new user</span></button>
            </div>
         </div>    
        </div>

    );
};

export default Header;